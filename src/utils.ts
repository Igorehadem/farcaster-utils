/** Returns current UTC time as ISO string */
export const nowISO = (): string => new Date().toISOString();

/** Async delay helper */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/** Truncates long text and appends ellipsis */
export const truncate = (text: string, n = 120): string =>
  text.length > n ? text.slice(0, n) + "…" : text;
