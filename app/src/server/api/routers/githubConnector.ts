import { clerkClient } from "@clerk/nextjs";
import { Octokit } from "octokit";
import { protectedProcedure } from "../trpc";

export const githubConnector = protectedProcedure.query(async ({ ctx }) => {
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

  console.table("Github connection has finished");

  return ghUser;
});