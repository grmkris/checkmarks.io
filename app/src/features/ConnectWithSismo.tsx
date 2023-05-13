import {
  AuthType,
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import { api } from "../utils/api";
import { useIden3DID } from "./iden3/useIden3DID";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x4198a24d0345151a12db749863ed3a39",
};

export const ConnectWithSismo = () => {
  const receiveProofsMutation = api.sismo.receiveProofs.useMutation();
  const did = useIden3DID();

  console.log("sismoVC", JSON.stringify(receiveProofsMutation.data));
  return (
    <div>
      <SismoConnectButton
        appId={"0x4198a24d0345151a12db749863ed3a39"}
        auth={{
          authType: AuthType.VAULT,
        }}
        onResponse={async (response: SismoConnectResponse) => {
          console.log("response", response);
          const bakendResponse = receiveProofsMutation.mutate({
            text: response,
            userId:
              "did:iden3:polygon:mumbai:wyh9oDxhKvP6cT8h3Bt7Hb1RcK8rZ4uBoG9U1cvHY",
          });
          console.log("bakendResponse", bakendResponse);
        }}
      />
    </div>
  );
};
