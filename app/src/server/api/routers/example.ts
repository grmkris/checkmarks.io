import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { discordConnector } from "./connectors/discordConnector";
import { githubConnector } from "./connectors/githubConnector";
import { tiktokConnector } from "./connectors/tiktokConnector";
import { twitterConnector } from "./connectors/twitterConnector";

const helloEndpoint = publicProcedure
  .input(z.object({ text: z.string() }))
  .output(z.object({ greeting: z.string() }))
  .query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  });

const helloMutationEndpoint = publicProcedure
  .input(z.object({ text: z.string() }))
  .mutation(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  });

const getAllEndpoint = protectedProcedure.query(async ({ ctx }) => {
  console.log("HERE ");

  return "hello";
});

export const exampleRouter = createTRPCRouter({
  hello: helloEndpoint,
  helloMutation: helloMutationEndpoint,
  getAll: getAllEndpoint,
  connectDiscord: discordConnector,
  connectGithub: githubConnector,
  connectTiktok: tiktokConnector,
  connectTwitter: twitterConnector,
});
