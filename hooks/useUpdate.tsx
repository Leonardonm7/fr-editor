import { useTheme } from "@/theme";
import * as Updates from "expo-updates";
import { useEffect, useRef, useState } from "react";

const UPDATE_TIMEOUT_MS = 5000;

type UseUpdateOptions = {
  enabled?: boolean;
};

const useUpdate = ({ enabled = true }: UseUpdateOptions = {}) => {
  const theme = useTheme();
  const hasCheckedUpdateRef = useRef(false);
  const [isLoading, setIsLoadingUpdate] = useState(false);

  useEffect(() => {
    if (!enabled || hasCheckedUpdateRef.current) return;

    let isMounted = true;
    hasCheckedUpdateRef.current = true;

    const setLoadingSafely = (value: boolean) => {
      if (isMounted) {
        setIsLoadingUpdate(value);
      }
    };

    const update = async () => {
      if (!__DEV__) {
        setLoadingSafely(true);

        const timeoutId = setTimeout(() => {
          setLoadingSafely(false);
        }, UPDATE_TIMEOUT_MS);

        try {
          const { isAvailable } = await Updates.checkForUpdateAsync();

          if (isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync({
              reloadScreenOptions: {
                fade: true,
                backgroundColor: theme.colors.background,
                spinner: { color: theme.colors.primary, size: "large" },
              },
            });
          }
        } catch {
          // OTA failure should not block app startup.
        } finally {
          clearTimeout(timeoutId);
          setLoadingSafely(false);
        }
      }
    };

    update();

    return () => {
      isMounted = false;
    };
  }, [enabled, theme.colors.background, theme.colors.primary]);

  return isLoading;
};

export default useUpdate;
