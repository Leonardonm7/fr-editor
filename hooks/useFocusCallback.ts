/* eslint-disable react-hooks/exhaustive-deps */
import { useFocusEffect } from 'expo-router';
import { DependencyList, useCallback } from 'react';

export const useFocusCallback = (
  effect: () => void | (() => void),
  deps: DependencyList = [],
) => {
  useFocusEffect(
    useCallback(() => {
      return effect();
    }, deps),
  );
};
