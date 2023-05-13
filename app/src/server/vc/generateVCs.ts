import { generateVC, getVcContent } from "./polygon-id-node";

/**
 * credentialSchema:
 *           "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/TwitterSchema.json",
 *         type: "TwitterGeneralCredential",
 *         credentialSubject: {
 *           id: "did:polygonid:polygon:mumbai:2qHBZWXsQczmcRUwgk6vbMVfELNCMmP9HXHTECaRrS",
 *           username: "kris",
 *           accountCreationDate: "2010-12-31",
 * @param config
 */
export const createTwitterVC = async (config: {
  id: string;
  username: string;
  accountCreationDate: string;
}) => {
  const vc = await generateVC({
    body: {
      credentialSchema:
        "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/v2/TwitterSchema.json",
      type: "TwitterGeneralCredentialV2",
      credentialSubject: {
        id: config.id,
        username: config.username,
        accountCreationDate: config.accountCreationDate,
      },
    },
  });
  const id = vc?.id;
  console.log("createTwitterVC - vcs", vc);
  if (!id) throw new Error("No twitter credential id found");
  console.log(`twitterCredId: ${id}`);
  return await getVcContent(id);
};

export const createGithubVC = async (config: {
  id: string;
  login: string;
  created_at: string;
  github_id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
}) => {
  console.log("createGithubVCs", config);
  const date = new Date(config.created_at);
  // YYYY-MM-DD
  const formattedDate = "2010-12-31";
  const vc = await generateVC({
    body: {
      credentialSchema:
        "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/v2/GithubSchemaV4.json",
      type: "GithubGeneralCredentialV4",
      credentialSubject: {
        id: config.id,
        login: config.login,
        github_id: config.github_id,
        avatar_url: config.avatar_url,
        url: config.url,
        html_url: config.html_url,
        name: config.name,
        public_repos: config.public_repos,
        followers: config.followers,
        following: config.following,
        created_at: formattedDate,
      },
    },
  });
  console.log("createGithubVC - vcs", vc);
  const id = vc?.id;
  if (!id) throw new Error("No github credential id found");
  console.log(`githubCredId: ${id}`);
  return await getVcContent(id);
};

export const createDiscordVC = async (config: {
  id: string;
  username: string;
  accountCreationDate: string;
  email: string;
  verified: boolean;
}) => {
  const vc = await generateVC({
    body: {
      credentialSchema:
        "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/v4/DiscordSchemaV4.json",
      type: "DiscordGeneralCredentialV3",
      credentialSubject: {
        id: config.id,
        username: config.username,
        accountCreationDate: config.accountCreationDate,
        email: config.email,
        verified: config.verified,
      },
    },
  });
  console.log("createDiscordVC - vcs", vc);
  const id = vc?.id;
  if (!id) throw new Error("No discord credential id found");
  console.log(`discordCredId: ${id}`);
  return await getVcContent(id);
};

export const createTikTokVC = async (config: {
  id: string;
  open_id: string;
  union_id: string;
  avatar_url: string;
  avatar_url_100: string;
  avatar_large_url: string;
  display_name: string;
  bio_description: string;
  profile_deep_link: string;
  is_verified: boolean;
  follower_count: number;
  following_count: number;
  likes_count: number;
}) => {
  console.log("creating tiktok vc", config);
  const vc = await generateVC({
    body: {
      credentialSchema:
        "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/v2/TikTokSchema.json",
      type: "TikTokGeneralCredentialV2",
      credentialSubject: {
        id: config.id,
        open_id: config.open_id,
        union_id: config.union_id,
        avatar_url: config.avatar_url,
        avatar_url_100: config.avatar_url_100,
        avatar_large_url: config.avatar_large_url,
        display_name: config.display_name,
        bio_description: config.bio_description,
        profile_deep_link: config.profile_deep_link,
        is_verified: config.is_verified,
        follower_count: config.follower_count,
        following_count: config.following_count,
        likes_count: config.likes_count,
      },
    },
  });

  const id = vc?.id;
  console.log(`tiktokCred:`, vc);
  if (!id) throw new Error("No tiktok credential id found");
  console.log(`tiktokCredId: ${id}`);
  return await getVcContent(id);
};
