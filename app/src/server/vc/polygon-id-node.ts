import { env } from "../../env.mjs";

const schemas = {
  twitter:
    "https://raw.githubusercontent.com/grmkris/checkmarks.io/main/schemas/TwitterSchema.json",
};

const host = "http://157.230.127.219";
const issuer =
  "did:polygonid:polygon:mumbai:2qNFuaUVKxGJEGp3RLriKN71L9wwCu8cvXNUi49Vpg";

export const generateVC = async (config: { body: any }) => {
  const body = config.body;
  const url = `${host}:3001/v1/${issuer}/claims`;
  console.log("URL", url);
  console.log("Basic " + env.POLYGON_ID_NODE_API_KEY);
  console.log("BODY: ", JSON.stringify(body));
  const result = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${env.POLYGON_ID_NODE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return result.json();
};

export const getVcContent = async (vcId: string) => {
  const url = `${host}:3001/v1/${issuer}/claims/${vcId}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Basic ${env.POLYGON_ID_NODE_API_KEY}`,
    },
  });
  return data.json();
};

export const getVcQRCode = async (vcId: string) => {};
