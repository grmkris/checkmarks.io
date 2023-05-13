import { clerkClient } from "@clerk/nextjs";
import { protectedProcedure } from "../../trpc";
import { createTikTokVC } from "../../../vc/generateVCs";
import { DidSchema } from "../did";

export const tiktokConnector = protectedProcedure
  .input(DidSchema)
  .query(async ({ ctx }) => {
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
    return createTikTokVC({
      id: "did:polygonid:polygon:mumbai:2qHBZWXsQczmcRUwgk6vbMVfELNCMmP9HXHTECaRrS",
      open_id: data.open_id,
      union_id: data.union_id,
      avatar_url: data.avatar_url,
      avatar_large_url: data.avatar_large_url,
      avatar_url_100: data.avatar_url_100,
      bio_description: data.bio_description,
      display_name: data.display_name,
      follower_count: data.follower_count,
      following_count: data.following_count,
      is_verified: data.is_verified,
      likes_count: data.likes_count,
      profile_deep_link: data.profile_deep_link,
    });
  });
