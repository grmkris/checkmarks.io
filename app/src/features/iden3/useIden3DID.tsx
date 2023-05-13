import { useQuery } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";
import { getUserDID } from "./user-did-iden3";

export const useIden3DID = () => {
  const { user } = useUser();
  return useQuery({
    queryKey: ["identity", user?.web3Wallets[0].web3Wallet],
    queryFn: async () => {
      if (!user?.web3Wallets[0].web3Wallet) throw new Error("No wallet");
      return getUserDID({
        username: user?.web3Wallets[0].web3Wallet,
      });
    },
    enabled: !!user?.web3Wallets[0].web3Wallet,
  });
};
