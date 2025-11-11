import { nowISO, truncate, sleep } from "./utils.js";

console.log("🧩 Farcaster Utils Demo started @", nowISO());

(async () => {
  console.log(truncate("This is a demo output to keep the repo alive and useful.", 40));
  console.log("⏳ Waiting 1 second...");
  await sleep(1000);
  console.log("✅ Demo finished @", nowISO());
})();
