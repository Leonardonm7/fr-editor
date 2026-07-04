import * as Updates from "expo-updates";
import { useEffect, useState } from "react";

const UPDATE_TIMEOUT_MS = 5000;

const useUpdate = () => {
  const [isLoading, setIsLoadingUpdate] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const setLoadingSafely = (value: boolean) => {
      if (isMounted) {
        setIsLoadingUpdate(value);
      }
    };

    const update = async () => {
      if (!__DEV__) {
        setLoadingSafely(true);

        const timeoutId = setTimeout(() => {
          // Failsafe: never block app startup indefinitely when offline.
          setLoadingSafely(false);
        }, UPDATE_TIMEOUT_MS);

        try {
          const { isAvailable } = await Updates.checkForUpdateAsync();

          if (isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        } catch (error) {
          console.warn("Falha ao verificar atualização OTA:", error);
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
  }, []);

  return isLoading;
};

export default useUpdate;
