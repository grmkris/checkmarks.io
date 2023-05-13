import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

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
        tokenTransfers {
          transactionHash
        }
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
    }
      }
      ethereum: Wallet(
        input: {
          blockchain: ethereum
          identity: "${address}"
        }
      ) {
        addresses
        tokenTransfers {
          transactionHash
        }
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
    }
      }
    }
  `;
};

const checkAirStack = protectedProcedure
  .input(z.object({ address: z.string() }))
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
    return resultJson;
  });

export const airstack = createTRPCRouter({
  checkAirStack: checkAirStack,
});
