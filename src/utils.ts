export const nowISO = () => new Date().toISOString();

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function truncate(text: string, n = 120) {
  return text.length > n ? text.slice(0, n - 1) + "…" : text;
}
