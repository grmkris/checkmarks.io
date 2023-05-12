import { clerkClient } from "@clerk/nextjs";
import { protectedProcedure } from "../trpc";

export const tiktokConnector = protectedProcedure.query(async ({ ctx }) => {
  console.table("TikTok connection has started");
  const tiktok = await clerkClient.users.getUserOauthAccessToken(
    ctx.auth?.userId,
    "oauth_tiktok"
  );
  const response = await fetch(
    "https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,following_count,follower_count,likes_count,is_verified",
    {
      headers: {
        Authorization: "Bearer " + tiktok[0]?.token,
      },
    }
  );
  const data = await response.json();

  console.table("TikTok connection has finished");

  return data;
});