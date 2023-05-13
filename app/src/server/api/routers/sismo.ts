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
import { createSismoVaultVC } from "../../vc/generateVCs";

export const config: SismoConnectServerConfig = {
  appId: env.NEXT_PUBLIC_SISMO_APP_ID,
};

const sismoConnect = SismoConnect(config);

async function verifyResponse(config: {
  sismoConnectResponse: SismoConnectResponse;
  userId: string;
}) {
  const vaultAuth: AuthRequest = { authType: AuthType.VAULT };
  console.log("Verifying response");
  const result: SismoConnectVerifiedResult = await sismoConnect.verify(
    config.sismoConnectResponse,
    {
      auths: [vaultAuth],
    }
  );
  console.log("result:", result);
  result.claims?.forEach((claim) => {
    console.log("claim:", claim);
  });
  console.log("userId:", config.userId);
  const vaultId = result.getUserId(AuthType.VAULT);
  console.log("vaultId:", vaultId);
  if (!vaultId) throw new Error("No vaultId found");
  return createSismoVaultVC({ vaultId, id: config.userId });
}

const receiveProofs = protectedProcedure
  .input(z.object({ text: z.any() }))
  .mutation(async ({ ctx, input }) => {
    console.log("sismo proof endpoint has started");
    const result = await verifyResponse(input.text);
    console.log("sismo proof endpoint has finished", result);
    return result;
  });

export const sismoRouter = createTRPCRouter({
  receiveProofs: receiveProofs,
});
