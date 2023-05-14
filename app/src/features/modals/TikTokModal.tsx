import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";
import { api } from "../../utils/api";
import { useIden3DID } from "../iden3/useIden3DID";
import { useCredentialStore } from "../CredentialStore";

export const TikTokModal = () => {
  const did = useIden3DID();
  const store = useCredentialStore((state) => state.addCredential);
  const data = api.did.connectTiktok.useQuery(
    {
      did: did.data?.did.toString() || "",
    },
    {
      enabled: !!did.data?.did.toString(),
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  if (!!data.data) {
    store({
      credential: data.data,
      provider: SocialNames.TikTok,
    });
  }
  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Tiktok ID"} data={"krisSLO"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of followers"} data={"350"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of likes"} data={"150"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.TikTok.toUpperCase()}
      credentials={creds}
    />
  );
};
