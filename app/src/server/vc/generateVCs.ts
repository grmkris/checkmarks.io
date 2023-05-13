import { generateVC } from "./polygon-id-node";

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
  return generateVC({
    body: {
      credentialSchema:
        "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/TwitterSchema.json",
      type: "TwitterGeneralCredential",
      credentialSubject: {
        id: config.id,
        username: config.username,
        accountCreationDate: config.accountCreationDate,
      },
    },
  });
};

export const createGithubVC = async (config: {
  subject: string;
  username: string;
  accountCreationDate: string;
}) => {};
