import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";


export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url().optional(),
    CLERK_SECRET_KEY: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    POLYGON_ID_NODE_API_KEY: z.string(),
    NEXT_PUBLIC_SISMO_APP_ID: z.string()
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    POLYGON_ID_NODE_API_KEY: process.env.POLYGON_ID_NODE_API_KEY,
    NEXT_PUBLIC_SISMO_APP_ID: process.env.NEXT_PUBLIC_SISMO_APP_ID
  },
});
