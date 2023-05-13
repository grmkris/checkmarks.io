import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import {
  AuthRequest,
  AuthType,
  SismoConnect,
  SismoConnectResponse,
  SismoConnectServerConfig,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-server";
import { env } from "../../../env.mjs";

export const config: SismoConnectServerConfig = {
  appId: env.NEXT_PUBLIC_SISMO_APP_ID,
};

const sismoConnect = SismoConnect(config);

async function verifyResponse(sismoConnectResponse: SismoConnectResponse) {
  const vaultAuth: AuthRequest = { authType: AuthType.VAULT };

  const result: SismoConnectVerifiedResult = await sismoConnect.verify(
    sismoConnectResponse,
    {
      auths: [vaultAuth],
    }
  );
  console.log("result:", result);
  result.claims.forEach((claim) => {
    console.log("claim:", claim);
  });
  const vaultId = result.getUserId(AuthType.VAULT);
  console.log("vaultId:", vaultId);
}

const receiveProofs = protectedProcedure
  .input(z.object({ text: z.any() }))
  .mutation(async ({ ctx, input }) => {
    console.log("sismo proof endpoint has started");
    await verifyResponse(input.text);
    const vcProof = { issuer: "checkmark.io" };
    console.log("sismo proof endpoint has finished");
    return vcProof;
  });

export const sismoRouter = createTRPCRouter({
  receiveProofs: receiveProofs,
});
