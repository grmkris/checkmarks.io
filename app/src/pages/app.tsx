import { ToggleTheme } from "../features/ToggleTheme";
import { useUser } from "@clerk/nextjs";
import { useIden3DID } from "../features/iden3/useIden3DID";
import { api } from "../utils/api";
import { useCredentialStore } from "../features/CredentialStore";

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

function IpfsUploadButton() {
  const ipfs = api.ipfsRouter.uploadIpfs.useMutation();
  const creds = useCredentialStore((state) => state.credentials);

  const handleUpload = async () => {
    const data = await ipfs.mutateAsync({
      creds: creds,
    });
    console.log("data", data);
  };

  return (
    <div>
      <button className={"btn"} onClick={handleUpload}>
        Upload to IPFS
      </button>
      {ipfs.data && <div>{JSON.stringify(ipfs.data)}</div>}
    </div>
  );
}

export default function App() {
  const did = useIden3DID();

  console.log(did.data?.did.toString());
  return (
    <div>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <ConnectedAccounts />
          <IpfsUploadButton />
          Imagine lots of cool stuff here
        </div>
      </div>
    </div>
  );
}
