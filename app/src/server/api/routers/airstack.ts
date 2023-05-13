import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { createAirStackVC, createLensVC } from "../../vc/generateVCs";

function calculateUserInfo(data: any) {
  console.log("calculateUserInfo:", data);
  const polygonData = data.polygon;
  const ethereumData = data.ethereum;

  let hasLensHandle = false;
  let lensName = null;
  let ownedNFTs = 0;
  let hasENS = false;
  let ensName = null;

  const allData = [polygonData, ethereumData];

  allData.forEach((blockchainData) => {
    // Check if user has lens handle and get its name
    blockchainData?.socials.forEach((social: any) => {
      if (social.dappName.toLowerCase() === "lens") {
        hasLensHandle = true;
        lensName = social.profileName;
      }
    });

    // Calculate number of owned NFTs
    blockchainData?.tokenBalances.forEach((tokenBalance: any) => {
      if (
        tokenBalance.tokenType === "ERC721" ||
        tokenBalance.tokenType === "ERC1155"
      ) {
        ownedNFTs += 1;
      }
    });

    // Check if user has ENS and get its name
    blockchainData?.domains.forEach((domain: any) => {
      if (domain.dappName.toLowerCase() === "ens") {
        hasENS = true;
        ensName = domain.labelName;
      }
    });
  });

  return {
    hasLensHandle,
    lensName,
    ownedNFTs,
    hasENS,
    ensName,
  };
}

const getQueryString = (address: string) => {
  return `
    query Wallet {
      polygon: Wallet(
        input: {
          blockchain: polygon
          identity: "${address}"
        }
      ) {
        addresses
        tokenBalances {
          amount
          tokenType
          tokenAddress
        }
            domains {
      id
       labelName
      dappName
    }
        socials {
      id
      userId
      dappName
      profileName
    }
      }
      ethereum: Wallet(
        input: {
          blockchain: ethereum
          identity: "${address}"
        }
      ) {
        addresses
        tokenBalances {
          amount
          tokenType
          tokenAddress
        }
            domains {
      id
       labelName
      dappName
    }
        socials {
      id
      userId
      dappName
      profileName
    }
      }
    }
  `;
};

const checkAirStack = protectedProcedure
  .input(z.object({ address: z.string(), did: z.string() }))
  .query(async ({ ctx, input }) => {
    console.log("AIRSTACK endpoint has started");
    const queryString = getQueryString(input.address);
    const result = await fetch("https://api.airstack.xyz/gql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryString,
      }),
    });
    const resultJson = await result.json(); // get JSON response
    console.log("AIRSTACK endpoint has finished", resultJson);
    const resultPa = calculateUserInfo(resultJson.data);

    const airstack = await createAirStackVC({
      numberOfNfts: resultPa.ownedNFTs,
      ensName: resultPa.ensName ?? "",
      id: input.did,
    });

    const lens = await createLensVC({
      id: input.did,
      // @ts-ignore
      lensId: resultPa.lensName?.split(".")[0] ?? "",
    });

    return {
      airstack,
      lens,
    };
  });

export const airstack = createTRPCRouter({
  checkAirStack: checkAirStack,
});
