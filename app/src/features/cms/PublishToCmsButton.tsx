import { api } from "../../utils/api";
import { useCredentialStore } from "../CredentialStore";
import { useConnect, useContractWrite } from "wagmi";
import { CmsAbi } from "./CmsAbi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { base58 } from "ethers/lib/utils";

export function PublishVCsButton() {
  const ipfs = api.ipfsRouter.uploadIpfs.useMutation();
  const { data: connector, connectAsync } = useConnect();
  const creds = useCredentialStore((state) => state.credentials);
  const cms = useContractWrite({
    abi: CmsAbi,
    address: "0xD779A710c2d58A3CC25B2bC9ec3A2e4Cc1132EcE",
    functionName: "stateChange",
  });

  const handleUpload = async () => {
    if (!connector?.account) {
      const connected = connectAsync({
        connector: new MetaMaskConnector(),
        chainId: 80001,
      });
      if (!connected) {
        throw new Error("Could not connect to wallet");
      }
    }
    const data = await ipfs.mutateAsync({
      creds: creds,
    });
    const tx = await cms.writeAsync({
      args: [[data.IpfsHash]],
    });
    console.log("tx", tx);
    return tx;
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
