import { createTRPCRouter } from "./trpc";
import { sismoRouter } from "./routers/sismo";
import { didRouter } from "./routers/did";
import { ipfsRouter } from "./routers/ipfs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  did: didRouter,
  sismo: sismoRouter,
  ipfsRouter: ipfsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
