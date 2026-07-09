import type { RestFinishedSoundPreference } from "@/database/types";
import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

type RestSoundOptionProps = {
  colors: GlobalContainerColors;
  isBusy: boolean;
  onImport: () => void;
  onReset: () => void;
  sound: RestFinishedSoundPreference | null;
};

export const RestSoundOption = ({
  colors,
  isBusy,
  onImport,
  onReset,
  sound,
}: RestSoundOptionProps) => {
  const { t } = useTranslation();
  const hasCustomSound = !!sound;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor: hasCustomSound ? colors.selected : colors.thumb,
              borderColor: hasCustomSound ? colors.accent : colors.border,
            },
          ]}
        >
          <Icon color={colors.accent} size={22} source="music-note" />
        </View>

        <View style={styles.textBlock}>
          <Text style={[styles.title, { color: colors.ink }]}>
            {t("restSound")}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.caption, { color: colors.muted }]}
          >
            {sound?.name ?? t("appDefault")}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          compact
          disabled={isBusy}
          icon="file-music"
          loading={isBusy}
          mode="contained"
          onPress={onImport}
        >
          {t("import")}
        </Button>
        <Button
          compact
          disabled={isBusy || !hasCustomSound}
          icon="restore"
          mode="outlined"
          onPress={onReset}
        >
          {t("reset")}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  caption: {
    fontSize: 13,
    fontWeight: "700",
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 14,
  },
  iconBox: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  textBlock: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "900",
  },
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
});
