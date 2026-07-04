import { formatRestTime } from "@/features/workout/services/restTime";
import {
  playRestFinishedSound,
  setupRestFinishedSound,
} from "@/features/workout/services/restSoundService";
import { Platform, Vibration } from "react-native";
import notifee, {
  AlarmType,
  AndroidCategory,
  AndroidDefaults,
  AndroidForegroundServiceBehavior,
  AndroidForegroundServiceType,
  AndroidImportance,
  AndroidVisibility,
  AuthorizationStatus,
  TriggerType,
  type Notification,
  type TimestampTrigger,
} from "react-native-notify-kit";

const REST_TIMER_CHANNEL_ID = "workout-rest-timer-live-v3";
const REST_FINISHED_CHANNEL_ID = "workout-rest-finished-v4";
const REST_TIMER_NOTIFICATION_ID = "workout-rest-timer";
const REST_FINISHED_NOTIFICATION_ID = "workout-rest-finished";
const REST_FINISHED_VIBRATION_PATTERN = [350, 180, 350, 180];
const REST_TIMER_VIBRATION_PATTERN = [90, 90];
const SHORT_FOREGROUND_SERVICE_LIMIT_MS = 170_000;

let notificationSetupPromise: Promise<boolean> | null = null;
let foregroundServiceRegistered = false;
let foregroundServiceRunning = false;
let activeForegroundRestKey: string | null = null;

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

const getNotificationDataString = (
  value: string | number | object | undefined,
) => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  return "";
};

const getRestForegroundKey = (label: string, endsAt: number) =>
  `${label}:${endsAt}`;

const stopRestForegroundService = async () => {
  if (Platform.OS !== "android" || !foregroundServiceRunning) return;

  foregroundServiceRunning = false;
  activeForegroundRestKey = null;
  await notifee.stopForegroundService().catch(() => undefined);
};

const ensureRestForegroundService = () => {
  if (Platform.OS !== "android" || foregroundServiceRegistered) return;

  notifee.registerForegroundService(async (notification) => {
    const endsAt = Number(getNotificationDataString(notification.data?.restEndsAt));
    const finishedBody = getNotificationDataString(
      notification.data?.restFinishedBody,
    );
    const finishedTitle = getNotificationDataString(
      notification.data?.restFinishedTitle,
    );
    const label = getNotificationDataString(notification.data?.restLabel);
    const restKey = getNotificationDataString(notification.data?.restKey);

    if (!Number.isFinite(endsAt) || !label || !restKey) return;

    while (activeForegroundRestKey === restKey) {
      const remainingMs = endsAt - Date.now();
      if (remainingMs <= 0) break;

      await sleep(Math.min(remainingMs, 1000));
    }

    if (activeForegroundRestKey !== restKey) return;

    await playRestFinishedSound(restKey);
    await showRestFinishedNotification(label, {
      body: finishedBody || undefined,
      title: finishedTitle || undefined,
    });
  });
  foregroundServiceRegistered = true;
};

export const setupRestNotifications = async () => {
  if (Platform.OS === "web") return false;

  notificationSetupPromise ??= (async () => {
    const warmupPromise =
      Platform.OS === "android"
        ? notifee.prewarmForegroundService().catch(() => undefined)
        : Promise.resolve();
    const settings = await notifee.requestPermission();
    if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
      console.warn("[workout] Notificações de descanso negadas pelo sistema.");
      return false;
    }

    if (Platform.OS === "android") {
      await setupRestFinishedSound();

      await Promise.all([
        notifee.createChannel({
          id: REST_TIMER_CHANNEL_ID,
          importance: AndroidImportance.HIGH,
          name: "Timer ativo do descanso",
          vibration: true,
          vibrationPattern: REST_TIMER_VIBRATION_PATTERN,
          visibility: AndroidVisibility.PUBLIC,
        }),
        notifee.createChannel({
          bypassDnd: true,
          id: REST_FINISHED_CHANNEL_ID,
          importance: AndroidImportance.HIGH,
          name: "Fim do descanso",
          vibration: true,
          vibrationPattern: REST_FINISHED_VIBRATION_PATTERN,
          visibility: AndroidVisibility.PUBLIC,
        }),
      ]);
    }

    await warmupPromise;
    return true;
  })();

  try {
    return await notificationSetupPromise;
  } catch (error) {
    console.warn("[workout] Falha ao configurar notificações de descanso.", error);
    notificationSetupPromise = null;
    return false;
  }
};

export const showRestTimerNotification = async ({
  endsAt: providedEndsAt,
  finishedBody,
  finishedTitle = "Descanso acabou",
  label,
  remainingMs,
  remainingSuffix = "restantes",
  title = "Descanso em andamento",
}: {
  endsAt?: number;
  finishedBody?: string;
  finishedTitle?: string;
  label: string;
  remainingMs: number;
  remainingSuffix?: string;
  title?: string;
}) => {
  try {
    const enabled = await setupRestNotifications();
    if (!enabled) return false;

    const endsAt = providedEndsAt ?? Date.now() + remainingMs;
    const useForegroundService =
      Platform.OS === "android" &&
      remainingMs > 0 &&
      remainingMs <= SHORT_FOREGROUND_SERVICE_LIMIT_MS;
    const restKey = getRestForegroundKey(label, endsAt);

    if (useForegroundService) {
      ensureRestForegroundService();
      foregroundServiceRunning = true;
      activeForegroundRestKey = restKey;
    } else {
      await stopRestForegroundService();
    }

    await Promise.all([
      notifee.cancelNotification(REST_TIMER_NOTIFICATION_ID).catch(() => undefined),
      notifee
        .cancelNotification(REST_FINISHED_NOTIFICATION_ID)
        .catch(() => undefined),
    ]);

    const getTimerNotification = (
      asForegroundService: boolean,
    ): Notification => ({
      android: {
        asForegroundService,
        autoCancel: false,
        category: AndroidCategory.ALARM,
        channelId: REST_TIMER_CHANNEL_ID,
        chronometerDirection: "down",
        defaults: [AndroidDefaults.VIBRATE],
        foregroundServiceBehavior: asForegroundService
          ? AndroidForegroundServiceBehavior.IMMEDIATE
          : undefined,
        foregroundServiceTypes: asForegroundService
          ? [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK]
          : undefined,
        importance: AndroidImportance.HIGH,
        lightUpScreen: true,
        ongoing: true,
        onlyAlertOnce: true,
        pressAction: { id: "default" },
        showChronometer: true,
        showTimestamp: true,
        timestamp: endsAt,
        vibrationPattern: REST_TIMER_VIBRATION_PATTERN,
        visibility: AndroidVisibility.PUBLIC,
      },
      body:
        Platform.OS === "android"
          ? label
          : `${formatRestTime(remainingMs)} ${remainingSuffix} · ${label}`,
      data: {
        restEndsAt: String(endsAt),
        restFinishedBody: finishedBody ?? "",
        restFinishedTitle: finishedTitle ?? "",
        restKey,
        restLabel: label,
      },
      id: REST_TIMER_NOTIFICATION_ID,
      title,
    });

    if (useForegroundService) {
      await notifee.displayNotification(getTimerNotification(false));
    }

    await notifee.displayNotification(getTimerNotification(useForegroundService));

    const trigger: TimestampTrigger = {
      alarmManager: {
        type: AlarmType.SET_ALARM_CLOCK,
      },
      timestamp: endsAt,
      type: TriggerType.TIMESTAMP,
    };

    await notifee.createTriggerNotification(
      {
        android: {
          autoCancel: true,
          category: AndroidCategory.ALARM,
          channelId: REST_FINISHED_CHANNEL_ID,
          defaults: [AndroidDefaults.VIBRATE],
          importance: AndroidImportance.HIGH,
          lightUpScreen: true,
          pressAction: { id: "default" },
          vibrationPattern: REST_FINISHED_VIBRATION_PATTERN,
          visibility: AndroidVisibility.PUBLIC,
        },
        body: finishedBody ?? `${label} pronto para a próxima série.`,
        id: REST_FINISHED_NOTIFICATION_ID,
        title: finishedTitle,
      },
      trigger,
    );
    return true;
  } catch (error) {
    console.warn("[workout] Falha ao mostrar timer de descanso.", error);
    return false;
  }
};

export const clearRestTimerNotification = async () => {
  if (Platform.OS === "web") return;

  await stopRestForegroundService();
  await notifee.cancelNotification(REST_TIMER_NOTIFICATION_ID).catch(
    () => undefined,
  );
};

export const clearRestNotifications = async () => {
  if (Platform.OS === "web") return;

  await stopRestForegroundService();
  await Promise.all([
    notifee.cancelNotification(REST_TIMER_NOTIFICATION_ID).catch(() => undefined),
    notifee
      .cancelNotification(REST_FINISHED_NOTIFICATION_ID)
      .catch(() => undefined),
  ]);
};

export const showRestFinishedNotification = async (
  label: string,
  options: { body?: string; title?: string } = {},
) => {
  try {
    const enabled = await setupRestNotifications();
    if (!enabled) return;

    await notifee.cancelNotification(REST_TIMER_NOTIFICATION_ID).catch(
      () => undefined,
    );
    await stopRestForegroundService();
    await notifee.displayNotification({
      android: {
        autoCancel: true,
        category: AndroidCategory.ALARM,
        channelId: REST_FINISHED_CHANNEL_ID,
        defaults: [AndroidDefaults.VIBRATE],
        importance: AndroidImportance.HIGH,
        lightUpScreen: true,
        pressAction: { id: "default" },
        vibrationPattern: REST_FINISHED_VIBRATION_PATTERN,
        visibility: AndroidVisibility.PUBLIC,
      },
      body: options.body ?? `${label} pronto para a próxima série.`,
      id: REST_FINISHED_NOTIFICATION_ID,
      title: options.title ?? "Descanso acabou",
    });
  } catch (error) {
    console.warn("[workout] Falha ao mostrar fim do descanso.", error);
  }
};

export const vibrateRestFinished = () => {
  if (Platform.OS === "android") return;
  Vibration.vibrate(REST_FINISHED_VIBRATION_PATTERN);
};
