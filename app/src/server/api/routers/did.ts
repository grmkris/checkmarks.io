import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { discordConnector } from "./connectors/discordConnector";
import { githubConnector } from "./connectors/githubConnector";
import { tiktokConnector } from "./connectors/tiktokConnector";
import { twitterConnector } from "./connectors/twitterConnector";

export const DidSchema = z.object({
  did: z
    .string()
    .describe("Subject DID from useIden3DID hook -> did.data?.did.toString()"),
});

export const didRouter = createTRPCRouter({
  connectDiscord: discordConnector,
  connectGithub: githubConnector,
  connectTiktok: tiktokConnector,
  connectTwitter: twitterConnector,
});
