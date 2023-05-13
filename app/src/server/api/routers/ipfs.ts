import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import pinataSDK from "@pinata/sdk";
import { env } from "../../../env.mjs";

export const ipfsRouter = createTRPCRouter({
  uploadIpfs: protectedProcedure
    .input(z.object({ creds: z.any() }))
    .mutation(async ({ ctx, input }) => {
      console.log("ipfs endpoint has started");
      // Use the api keys by specifying your api key and api secret
      const pinata = new pinataSDK({
        pinataApiKey: env.PINATA_API_KEY,
        pinataSecretApiKey: env.PINATA_API_SECRET,
      });
      const result = await pinata.pinJSONToIPFS(input.creds);
      console.log("ipfs endpoint has finished", result);
      return result;
    }),
});
