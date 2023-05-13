import { clerkClient } from "@clerk/nextjs";
import discord from "discord-oauth2";
import { protectedProcedure } from "../../trpc";
import { z } from "zod";

export const discordConnector = protectedProcedure
  .input(
    z.object({
      did: z
        .string()
        .describe(
          "Subject DID from useIden3DID hook -> did.data?.did.toString()"
        ),
    })
  )
  .query(async ({ ctx }) => {
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
    if (guilds[0]?.id) {
      const guild = await oauth.getGuildMember(disToken, guilds[0]?.id);
      console.table("Discord connection has finished");
      return guild;
    }
  });
