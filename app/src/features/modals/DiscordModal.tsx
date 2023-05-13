import { SocialNames } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { api } from "../../utils/api";
import { useIden3DID } from "../iden3/useIden3DID";
import { useCredentialStore } from "../CredentialStore";

export const DataLabel = (props: { label: string; data: string }) => {
  return (
    <a>
      {props.label}: <a className={"text-secondary"}>{props.data}</a>
    </a>
  );
};

export const DiscordModal = () => {
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

  if (data.data?.vc) {
    store({
      credential: data.data.vc,
      provider: SocialNames.Discord,
    });
  }

  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Discord ID"} data={"Kris#8171"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of servers"} data={"3"} />,
      action: () => {},
    },
    {
      text: (
        <DataLabel
          label={"List of servers"}
          data={"[The Graph, Sismo, EthGlobal, Polygon, WorldCoin]"}
        />
      ),
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Discord.toUpperCase()}
      credentials={creds}
    />
  );
};
