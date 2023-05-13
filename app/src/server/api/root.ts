import { createTRPCRouter } from "./trpc";
import { sismoRouter } from "./routers/sismo";
import { didRouter } from "./routers/did";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  did: didRouter,
  sismo: sismoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
