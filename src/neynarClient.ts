/**
 * Minimal Neynar REST client
 * Reference: https://docs.neynar.com/reference
 */

import { config } from "../config.js"; // optional if you import env elsewhere

const API_BASE = "https://api.neynar.com/v2/farcaster";

export interface Cast {
  hash: string;
  text: string;
  author: {
    fid: number;
    username: string;
    display_name: string;
  };
  timestamp: string;
}

/** Fetch recent casts globally or for a given FID */
export async function fetchCasts(fid?: number): Promise<Cast[]> {
  const url = new URL(`${API_BASE}/casts`);
  url.searchParams.set("limit", "5");
  if (fid) url.searchParams.set("fid", fid.toString());

  const res = await fetch(url.toString(), {
    headers: { api_key: process.env.NEYNAR_API_KEY || "" },
  });

  if (!res.ok) {
    console.error(`❌ Neynar API error: ${res.status} ${res.statusText}`);
    return [];
  }

  const data = await res.json();
  return data.casts || [];
}

/** Post a cast (stub for now, logs payload instead of sending) */
export async function publishCast(text: string): Promise<{ success: boolean }> {
  console.log(`🟣 Simulated cast post: "${text}"`);
  // Real call would use POST /casts
  return { success: true };
}

/** Fetch reactions (likes/recasts) for a specific cast */
export async function getReactions(castHash: string): Promise<any[]> {
  const url = `${API_BASE}/reactions?cast_hash=${castHash}`;
  const res = await fetch(url, {
    headers: { api_key: process.env.NEYNAR_API_KEY || "" },
  });

  if (!res.ok) {
    console.warn("⚠️ Could not fetch reactions");
    return [];
  }

  const data = await res.json();
  return data.reactions || [];
}
