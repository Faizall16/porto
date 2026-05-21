import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

let ratelimit: Ratelimit | null = null;

function initializeRateLimit() {
  if (ratelimit) return ratelimit;

  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    throw new Error("Redis credentials are not properly configured");
  }

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "4 s"),
    analytics: true,
  });

  return ratelimit;
}

export { initializeRateLimit };
