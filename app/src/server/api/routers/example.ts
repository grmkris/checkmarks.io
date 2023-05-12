import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { discordConnector } from "./discordConnector";
import { githubConnector } from "./githubConnector";
import { tiktokConnector } from "./tiktokConnector";

const helloEndpoint = publicProcedure
  .input(z.object({ text1: z.string() }))
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
});