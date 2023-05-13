import {
  AuthType,
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import { api } from "../utils/api";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x4198a24d0345151a12db749863ed3a39",
};

export const Sismo = () => {
  const receiveProofsMutation = api.sismo.receiveProofs.useMutation();
  return (
    <div>
      <SismoConnectButton
        appId={"0x4198a24d0345151a12db749863ed3a39"}
        auth={{
          authType: AuthType.VAULT,
        }}
        onResponse={async (response: SismoConnectResponse) => {
          const bakendResponse = receiveProofsMutation.mutate({
            text: response,
          });
          console.log("bakendResponse", bakendResponse);
        }}
      />
    </div>
  );
};
