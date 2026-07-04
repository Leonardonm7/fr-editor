import {
  clearRestFinishedSoundPreference,
  setRestFinishedSoundPreference,
} from "@/database/repositories/settingsRepository";
import {
  type RestFinishedSoundPreference,
} from "@/database/types";
import * as DocumentPicker from "expo-document-picker";
import { Directory, File, Paths } from "expo-file-system";

const REST_SOUND_DIR = "rest-sounds";
const REST_SOUND_FILE_BASENAME = "rest-finished-custom";
const SUPPORTED_AUDIO_EXTENSIONS = new Set([
  ".aac",
  ".flac",
  ".m4a",
  ".mp3",
  ".ogg",
  ".opus",
  ".wav",
]);

const restSoundDirectory = () => new Directory(Paths.document, REST_SOUND_DIR);

const getSafeExtension = (name: string, mimeType?: string) => {
  const extensionMatch = name.toLowerCase().match(/\.[a-z0-9]+$/);
  if (extensionMatch && SUPPORTED_AUDIO_EXTENSIONS.has(extensionMatch[0])) {
    return extensionMatch[0];
  }

  if (mimeType === "audio/mpeg") return ".mp3";
  if (mimeType === "audio/mp4" || mimeType === "audio/x-m4a") return ".m4a";
  if (mimeType === "audio/ogg") return ".ogg";
  if (mimeType === "audio/wav" || mimeType === "audio/x-wav") return ".wav";

  return null;
};

const assertAudioAsset = (asset: DocumentPicker.DocumentPickerAsset) => {
  const mimeType = asset.mimeType?.toLowerCase();
  const extension = getSafeExtension(asset.name, mimeType);
  const isAudioMime = !!mimeType?.startsWith("audio/");

  if (!extension || (!isAudioMime && !SUPPORTED_AUDIO_EXTENSIONS.has(extension))) {
    throw new Error("Escolha um arquivo de áudio válido.");
  }

  return extension;
};

const deleteImportedRestSoundFiles = () => {
  const directory = restSoundDirectory();
  if (!directory.exists) return;

  directory.list().forEach((entry) => {
    if (entry instanceof File && entry.name.startsWith(REST_SOUND_FILE_BASENAME)) {
      entry.delete();
    }
  });
};

export const importRestFinishedSoundFile =
  async (): Promise<RestFinishedSoundPreference | null> => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      multiple: false,
      type: "audio/*",
    });

    if (result.canceled) return null;

    const asset = result.assets[0];
    const extension = assertAudioAsset(asset);
    const directory = restSoundDirectory();
    directory.create({ idempotent: true, intermediates: true });

    deleteImportedRestSoundFiles();

    const destination = new File(
      directory,
      `${REST_SOUND_FILE_BASENAME}${extension}`,
    );
    new File(asset.uri).copy(destination);

    const preference: RestFinishedSoundPreference = {
      mimeType: asset.mimeType,
      name: asset.name,
      updatedAt: new Date().toISOString(),
      uri: destination.uri,
    };

    await setRestFinishedSoundPreference(preference);
    return preference;
  };

export const resetRestFinishedSoundFile = async () => {
  deleteImportedRestSoundFiles();
  await clearRestFinishedSoundPreference();
};
