import { clerkClient } from "@clerk/nextjs";
import { protectedProcedure } from "../../trpc";
import { createTwitterVC } from "../../../vc/generateVCs";
import { getVcContent } from "../../../vc/polygon-id-node";
import { DidSchema } from "../did";

export const twitterConnector = protectedProcedure
  .input(DidSchema)
  .query(async ({ ctx }) => {
    console.table("Discord connection has started");
    const user = await clerkClient.users.getUser(ctx.auth?.userId);

    const token = await clerkClient.users.getUserOauthAccessToken(
      ctx.auth?.userId,
      "oauth_discord"
    );
    return createTwitterVC({
      id: "did:polygonid:polygon:mumbai:2qHBZWXsQczmcRUwgk6vbMVfELNCMmP9HXHTECaRrS",
      accountCreationDate: "2010-12-31",
      username: "kris",
    });
  });
