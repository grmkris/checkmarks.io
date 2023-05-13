import { api } from "../utils/api";
import { useIden3DID } from "../features/iden3/useIden3DID";
import { useCredentialStore } from "../features/CredentialStore";
import { useEffect, useState } from "react";

const Discord = () => {
  const did = useIden3DID();
  const addCredential = useCredentialStore((state) => state.addCredential);
  const creds = useCredentialStore((state) => state.credentials);
  const test = api.did.connectDiscord.useMutation({
    onSuccess: (data) => {
      console.log("data", data);
      addCredential({ credential: data, provider: "discord" });
    },
  });
  const [added, setAdded] = useState(false);

  useEffect(() => {
    console.log("twitter did", did.data?.did.toString());
    if (did.data?.did.toString() && !added) {
      if (creds.find((c) => c.provider === "discord")) {
        console.log("already have twitter");
        return;
      }
      test.mutateAsync({
        did: did.data?.did.toString(),
      });
      setAdded(true);
    }
  }, [test, did, creds]);

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Discord;
