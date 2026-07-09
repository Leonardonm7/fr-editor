export const createExerciseUid = () =>
  `ex-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
