import { useQuery } from "@tanstack/react-query";

export const useFetchIpfsFile = (props: { ipfsHash?: string }) => {
  return useQuery({
    queryKey: ["ipfs", props.ipfsHash],
    queryFn: async () => {
      if (!props.ipfsHash) throw new Error("No ipfs hash");
      const response = await fetch(
        `https://bear.mypinata.cloud/ipfs/${props.ipfsHash}`
      );
      return response.json();
    },
    enabled: !!props.ipfsHash,
  });
};
