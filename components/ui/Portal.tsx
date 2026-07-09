import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { StyleSheet, View } from "react-native";

type PortalEntry = {
  key: number;
  children: ReactNode;
};

type PortalContextValue = {
  mount: (key: number, children: ReactNode) => void;
  unmount: (key: number) => void;
  update: (key: number, children: ReactNode) => void;
};

const PortalContext = createContext<PortalContextValue | null>(null);
let portalKey = 0;

export const PortalProvider = ({ children }: { children: ReactNode }) => {
  const [portals, setPortals] = useState<PortalEntry[]>([]);

  const mount = useCallback((key: number, children: ReactNode) => {
    setPortals((currentPortals) => {
      if (currentPortals.some((portal) => portal.key === key)) {
        return currentPortals.map((portal) =>
          portal.key === key ? { key, children } : portal,
        );
      }

      return [...currentPortals, { key, children }];
    });
  }, []);

  const update = useCallback((key: number, children: ReactNode) => {
    setPortals((currentPortals) =>
      currentPortals.map((portal) =>
        portal.key === key ? { key, children } : portal,
      ),
    );
  }, []);

  const unmount = useCallback((key: number) => {
    setPortals((currentPortals) =>
      currentPortals.filter((portal) => portal.key !== key),
    );
  }, []);

  const contextValue = useMemo(
    () => ({ mount, unmount, update }),
    [mount, unmount, update],
  );

  return (
    <PortalContext.Provider value={contextValue}>
      <View style={styles.provider}>
        {children}
        <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
          {portals.map((portal) => (
            <View
              key={portal.key}
              pointerEvents="box-none"
              style={StyleSheet.absoluteFill}
            >
              {portal.children}
            </View>
          ))}
        </View>
      </View>
    </PortalContext.Provider>
  );
};

export const Portal = ({ children }: { children?: ReactNode }) => {
  const manager = useContext(PortalContext);
  const key = useRef(portalKey++).current;

  useEffect(() => {
    if (!manager) return;

    manager.mount(key, null);
    return () => manager.unmount(key);
  }, [key, manager]);

  useEffect(() => {
    if (!manager) return;

    manager.update(key, children);
  }, [children, key, manager]);

  if (!manager) return <>{children}</>;

  return null;
};

const styles = StyleSheet.create({
  provider: {
    flex: 1,
  },
});
