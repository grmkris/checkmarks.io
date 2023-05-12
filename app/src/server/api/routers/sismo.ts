import {createTRPCRouter, protectedProcedure} from "../trpc";
import {z} from "zod";

const receiveProofs = protectedProcedure.input(z.object({text: z.any()})).mutation(async ({ctx, input}) => {
    console.log("sismo proof has received")
    const vcProof = {"issuer": "checkmark.io"}
    return vcProof
})

export const sismoRouter = createTRPCRouter({
    receiveProofs: receiveProofs
})