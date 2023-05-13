import { SismoConnectClientConfig } from "@sismo-core/sismo-connect-react";
import { api } from "../utils/api";
import Image from "next/image";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x4198a24d0345151a12db749863ed3a39",
};

export const ConnectWithAirStack = () => {
  const receiveProofsMutation = api.sismo.receiveProofs.useMutation();

  console.log("sismoVC", JSON.stringify(receiveProofsMutation.data));
  return <Image src="/airstack.png" alt="me" width={200} height={64} />;
};
