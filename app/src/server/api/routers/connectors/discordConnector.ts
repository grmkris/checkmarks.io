import { clerkClient } from "@clerk/nextjs";
import discord from "discord-oauth2";
import { protectedProcedure } from "../../trpc";

import { createDiscordVC } from "../../../vc/generateVCs";
import { DidSchema } from "../../../vc/polygon-id-node";

export const discordConnector = protectedProcedure
  .input(DidSchema)
  .query(async ({ ctx, input }) => {
    const user = await clerkClient.users.getUser(ctx.auth?.userId);

    // TODO make sure user is the same as the one in the did

    const discordToken = await clerkClient.users.getUserOauthAccessToken(
      ctx.auth?.userId,
      "oauth_discord"
    );

    const disToken = discordToken[0]?.token;
    if (!disToken) throw new Error("No discord token found");
    const oauth = new discord();
    const discordUser = await oauth.getUser(disToken);
    const guilds = await oauth.getUserGuilds(disToken);
    return createDiscordVC({
      id: input.did,
      username: "dfsd",
      accountCreationDate: "2010-12-31", // TODO: get this from discord
      email: "kristjan@grm.com",
      verified: true,
    });
  });
