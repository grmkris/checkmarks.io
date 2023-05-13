import { api } from "../utils/api";
import { useIden3DID } from "../features/iden3/useIden3DID";

const Tiktok = () => {
  const did = useIden3DID();
  console.log("did", did.data?.did.toString());
  const test = api.did.connectTiktok.useQuery(
    {
      did: did.data?.did.toString() ?? "",
    },
    {
      enabled: !!did.data?.did.toString(),
    }
  );

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Tiktok;
