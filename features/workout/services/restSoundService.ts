import { getRestFinishedSoundPreference } from "@/database/repositories/settingsRepository";
import {
  createAudioPlayer,
  setAudioModeAsync,
  setIsAudioActiveAsync,
  type AudioPlayer,
  type AudioSource,
} from "expo-audio";
import { Platform } from "react-native";

const REST_FINISHED_SOUND = require("../../../assets/sounds/rest-finished.wav") as number;

let restFinishedSoundSetupPromise: Promise<void> | null = null;
let lastRestFinishedSound: { key: string; playedAt: number } | null = null;
const activeRestFinishedPlayers = new Set<AudioPlayer>();
const restFinishedSoundInFlightKeys = new Set<string>();

const getRestFinishedSoundSource = async (): Promise<{
  key: string;
  source: AudioSource;
}> => {
  const customSound = await getRestFinishedSoundPreference();
  if (customSound?.uri) {
    return {
      key: customSound.uri,
      source: { uri: customSound.uri },
    };
  }

  return {
    key: "default",
    source: REST_FINISHED_SOUND,
  };
};

export const setupRestFinishedSound = async () => {
  if (Platform.OS !== "android") return;

  restFinishedSoundSetupPromise ??= (async () => {
    await setAudioModeAsync({
      interruptionMode: "duckOthers",
      shouldPlayInBackground: true,
      shouldRouteThroughEarpiece: false,
    });
    await setIsAudioActiveAsync(true);
  })();

  try {
    await restFinishedSoundSetupPromise;
  } catch (error) {
    restFinishedSoundSetupPromise = null;
    console.warn("[workout] Falha ao preparar som de descanso.", error);
  }
};

export const reloadRestFinishedSound = () => {
  restFinishedSoundSetupPromise = null;
};

const disposeRestFinishedPlayer = (player: AudioPlayer) => {
  activeRestFinishedPlayers.delete(player);
  player.remove();
};

const waitForRestFinishedPlayerLoad = (player: AudioPlayer) =>
  new Promise<void>((resolve) => {
    if (player.isLoaded) {
      resolve();
      return;
    }

    let settled = false;
    let subscription: { remove: () => void } | null = null;
    const timeout = setTimeout(() => {
      if (settled) return;
      settled = true;
      subscription?.remove();
      resolve();
    }, 1200);

    subscription = player.addListener("playbackStatusUpdate", (status) => {
      if (settled || !status.isLoaded) return;

      settled = true;
      clearTimeout(timeout);
      subscription?.remove();
      resolve();
    });
  });

export const playRestFinishedSound = async (key = "rest-finished") => {
  if (Platform.OS !== "android") return;

  try {
    const now = Date.now();
    if (
      restFinishedSoundInFlightKeys.has(key) ||
      (lastRestFinishedSound?.key === key &&
        now - lastRestFinishedSound.playedAt < 2500)
    ) {
      return;
    }
    restFinishedSoundInFlightKeys.add(key);

    await setupRestFinishedSound();
    const { source } = await getRestFinishedSoundSource();
    await setIsAudioActiveAsync(true).catch(() => undefined);

    const player = createAudioPlayer(source, {
      keepAudioSessionActive: true,
      updateInterval: 50,
    });
    activeRestFinishedPlayers.add(player);

    player.volume = 1;
    await waitForRestFinishedPlayerLoad(player);
    await player.seekTo(0).catch(() => undefined);
    player.volume = 1;
    player.play();
    lastRestFinishedSound = { key, playedAt: now };

    let subscription: { remove: () => void } | null = null;
    const cleanup = () => {
      subscription?.remove();
      if (activeRestFinishedPlayers.has(player)) {
        disposeRestFinishedPlayer(player);
      }
    };

    subscription = player.addListener("playbackStatusUpdate", (status) => {
      if (status.didJustFinish) cleanup();
    });
    setTimeout(cleanup, 5000);
  } catch (error) {
    console.warn("[workout] Falha ao tocar som de descanso.", error);
  } finally {
    restFinishedSoundInFlightKeys.delete(key);
  }
};
