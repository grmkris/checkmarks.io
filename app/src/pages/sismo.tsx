import {
  AuthType,
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import { api } from "../utils/api";
import { SISMO_APP_ID } from "../../commons/commons";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: SISMO_APP_ID,
};

const Sismo = () => {
  const receiveProofsMutation = api.sismo.receiveProofs.useMutation();
  return (
    <div>
      <SismoConnectButton
        appId={SISMO_APP_ID}
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

export default Sismo;