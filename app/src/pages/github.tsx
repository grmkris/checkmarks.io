import { api } from "../utils/api";
import { useIden3DID } from "../features/iden3/useIden3DID";
import { useCredentialStore } from "../features/CredentialStore";
import { useEffect } from "react";

const Github = () => {
  const did = useIden3DID();
  const addCredential = useCredentialStore((state) => state.addCredential);
  const creds = useCredentialStore((state) => state.credentials);
  const test = api.did.connectGithub.useMutation({
    onSuccess: (data) => {
      console.log("data", data);
      addCredential({ credential: data, provider: "github" });
    },
  });

  useEffect(() => {
    console.log("twitter did", did.data?.did.toString());
    if (did.data?.did.toString()) {
      if (creds.find((c) => c.provider === "github")) {
        console.log("already have twitter");
        return;
      }
      test.mutate({
        did: did.data?.did.toString(),
      });
    }
  }, [test, did, creds]);

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Github;
