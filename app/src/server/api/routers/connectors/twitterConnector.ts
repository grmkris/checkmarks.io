import { clerkClient } from "@clerk/nextjs";
import { protectedProcedure } from "../../trpc";
import { createTwitterVC } from "../../../vc/generateVCs";
import { getVcContent } from "../../../vc/polygon-id-node";

export const twitterConnector = protectedProcedure.query(async ({ ctx }) => {
  console.table("Discord connection has started");
  const user = await clerkClient.users.getUser(ctx.auth?.userId);

  const token = await clerkClient.users.getUserOauthAccessToken(
    ctx.auth?.userId,
    "oauth_discord"
  );

  const twitterCredId = await createTwitterVC({
    id: "did:polygonid:polygon:mumbai:2qHBZWXsQczmcRUwgk6vbMVfELNCMmP9HXHTECaRrS",
    accountCreationDate: "2010-12-31",
    username: "kris",
  });
  const id = twitterCredId?.id;
  if (!id) throw new Error("No twitter credential id found");
  console.log(`twitterCredId: ${id}`);

  return await getVcContent(id);

  // TODO fetch user data from twitter
  const disToken = token[0]?.token;
  if (!disToken) throw new Error("No twitter token found");
});
