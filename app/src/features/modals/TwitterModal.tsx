import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { api } from "../../utils/api";
import { useIden3DID } from "../iden3/useIden3DID";
import { DataLabel } from "./DiscordModal";
import { useCredentialStore } from "../CredentialStore";

export const TwitterModal = () => {
  const did = useIden3DID();
  const store = useCredentialStore((state) => state.addCredential);
  const data = api.did.connectDiscord.useQuery(
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
      text: <DataLabel label={"Account name:"} data={"kris"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Joined:"} data={"2012-12-12"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of followers:"} data={"2232"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of tweets:"} data={"123"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of likes:"} data={"123"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of retweets:"} data={"123"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Twitter.toUpperCase()}
      credentials={creds}
    />
  );
};
