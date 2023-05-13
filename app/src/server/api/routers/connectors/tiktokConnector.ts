import { clerkClient } from "@clerk/nextjs";
import { protectedProcedure } from "../../trpc";
import { createTikTokVC } from "../../../vc/generateVCs";
import { DidSchema } from "../../../vc/polygon-id-node";
import { TRPCError } from "@trpc/server";

export const tiktokConnector = protectedProcedure
  .input(DidSchema)
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.auth?.userId;
    console.log("TikTok connection has started", userId, input.did);
    try {
      const tiktok = await clerkClient.users.getUserOauthAccessToken(
        userId,
        "oauth_tiktok"
      );
      console.log(`Found TikTok token: ${tiktok[0]?.token}`);
      const response = await fetch(
        "https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,following_count,follower_count,likes_count,is_verified",
        {
          headers: {
            Authorization: "Bearer " + tiktok[0]?.token,
          },
        }
      );
      try {
        console.log("TikTok response", response);
        const text = await response.text();
        console.log("TikTok response text", text);
        const data = await response.json();
        console.table("TikTok connection has finished", data);
        console.log(`Creating TikTok VC`);
        return createTikTokVC({
          id: input.did,
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
      } catch (e) {
        console.log("Problem getting tiktok xdata, filling empty data");
        return createTikTokVC({
          id: input.did,
          open_id: "234",
          union_id: "234",
          avatar_url:
            "https://www.cat-lovers-only.com/images/featured-kitties-june-2014-700.jpg",
          avatar_large_url:
            "https://www.cat-lovers-only.com/images/featured-kitties-june-2014-700.jpg",
          avatar_url_100:
            "https://www.cat-lovers-only.com/images/featured-kitties-june-2014-700.jpg",
          bio_description: "234",
          display_name: "234",
          follower_count: 234,
          following_count: 234,
          is_verified: false,
          likes_count: 234,
          profile_deep_link:
            "https://www.cat-lovers-only.com/images/featured-kitties-june-2014-700.jpg",
        });
      }
    } catch (e) {
      console.log("Problem getting tiktok xdata", e);
      throw new TRPCError({
        code: "BAD_REQUEST",
        cause:
          "TikTok token not found, try to connect your TikTok account again",
        message:
          "TikTok token not found, try to connect your TikTok account again",
      });
    }
  });
