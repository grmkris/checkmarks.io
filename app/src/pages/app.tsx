import { useUser } from "@clerk/nextjs";
import { useIden3DID } from "../features/iden3/useIden3DID";

import { PublishVCsButton } from "../features/cms/PublishToCmsButton";
import { useCheckmarksCmsSubgraph } from "../features/cms/useSubgraph";
import { useFetchIpfsFile } from "../features/cms/useFetchIpfsFile";
import { api } from "../utils/api";

const ConnectedAccounts = () => {
  const { user } = useUser();
  console.log("username", user?.username);
  if (!user?.externalAccounts) return <div>No accounts</div>;
  return (
    <div>
      {user?.externalAccounts.map((acc, index) => {
        return <div key={index}>{JSON.stringify(acc.provider)}</div>;
      })}
    </div>
  );
};

export default function App() {
  const did = useIden3DID();
  const user = useUser();
  const sg = useCheckmarksCmsSubgraph({
    account: user?.user?.web3Wallets[0].web3Wallet,
  });

  const ipfs = useFetchIpfsFile({
    ipfsHash: sg.data?.data.stateChanges[0].data,
  });

  const airStack = api.airstack.checkAirStack.useQuery(
    {
      address: user?.user?.web3Wallets[0].web3Wallet || "",
      did: did.data?.did.toString() || "",
    },
    {
      enabled:
        !!user?.user?.web3Wallets[0].web3Wallet && !!did.data?.did.toString(),
    }
  );

  console.log(did.data?.did.toString());
  return (
    <div>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <ConnectedAccounts />
          <PublishVCsButton />
          Imagine lots of cool stuff here
        </div>
      </div>
    </div>
  );
}
