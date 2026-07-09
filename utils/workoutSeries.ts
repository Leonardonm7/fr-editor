export type SeriesDetail = {
  load: string;
  reps: string;
};

export const parseSeriesCount = (value: string) => {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
};

export const buildSeriesDetails = (
  series: string,
  fallback: Partial<SeriesDetail> = {},
  source?: unknown,
) => {
  const count = parseSeriesCount(series);
  const sourceItems = Array.isArray(source) ? source : [];

  return Array.from({ length: count }, (_, index) => {
    const item = sourceItems[index] as Partial<SeriesDetail> | undefined;

    return {
      reps: String(item?.reps ?? fallback.reps ?? ""),
      load: String(item?.load ?? fallback.load ?? ""),
    };
  });
};
