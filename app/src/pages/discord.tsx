import { api } from "../utils/api";
import { useIden3DID } from "../features/iden3/useIden3DID";

const Discord = () => {
  const did = useIden3DID();
  const test = api.did.connectDiscord.useQuery(
    {
      did: did.data?.did.toString() ?? "",
    },
    {
      enabled: !!did.data?.did,
    }
  );

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Discord;
