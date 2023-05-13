import { clerkClient } from "@clerk/nextjs";
import { Octokit } from "octokit";
import { protectedProcedure } from "../../trpc";
import { DidSchema } from "../../../vc/polygon-id-node";
import { createGithubVC } from "../../../vc/generateVCs";

export const githubConnector = protectedProcedure
  .input(DidSchema)
  .query(async ({ ctx, input }) => {
    console.table("Github connection has started");
    const user = await clerkClient.users.getUser(ctx.auth?.userId);

    const githubToken = await clerkClient.users.getUserOauthAccessToken(
      ctx.auth?.userId,
      "oauth_github"
    );

    const ghToken = githubToken[0]?.token;

    const octokit = new Octokit({
      auth: ghToken,
    });

    const ghUser = await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log("Github connection has finished", ghUser?.data);
    return createGithubVC({
      id: input.did,
      avatar_url: ghUser.data.avatar_url,
      github_id: ghUser.data.id,
      created_at: ghUser.data.created_at,
      followers: ghUser.data.followers,
      url: ghUser.data.url,
      following: ghUser.data.following,
      html_url: ghUser.data.html_url,
      login: ghUser.data.login,
      name: ghUser.data.name || "",
      public_repos: ghUser.data.public_repos,
    });
  });
