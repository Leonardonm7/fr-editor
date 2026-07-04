export const formatRestTime = (ms: number) => {
  const totalSecs = Math.max(Math.ceil(ms / 1000), 0);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
