import { fetchCasts, publishCast } from "./neynarClient.js";

(async () => {
  console.log("🧩 Fetching latest casts via Neynar...");
  const casts = await fetchCasts();
  console.log("✅ Received", casts.length, "casts");
  if (casts[0]) console.log("First cast:", casts[0].text);

  await publishCast("Hello from Farcaster Utils demo 🚀");
})();
