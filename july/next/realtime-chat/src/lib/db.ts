import { Redis } from '@upstash/redis';
export const redis = Redis.fromEnv();

// export const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_UR,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// export const redis = new Redis({
//   url: '.upstash.io',
//   token:
//     'yOTU=',
// });
