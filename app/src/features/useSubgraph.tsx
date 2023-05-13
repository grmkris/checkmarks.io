import { execute } from "../../.graphclient";
import { useQuery } from "@tanstack/react-query";
import gql from "graphql-tag";

const stateChanges = (address: string) => {
  return gql`
    query pairs {
      stateChanges(
        where: { author: "${address}" }
      ) {
        id
        author
        data
        transactionHash
        blockTimestamp
      }
    }
  `;
};

export const useCheckmarksCmsSubgraph = (props: { account?: string }) => {
  const account = props.account;
  return useQuery({
    queryKey: ["stateChanges", account],
    queryFn: () => {
      if (!account) throw new Error("No account");
      return execute(stateChanges(account));
    },
    enabled: !!account,
  });
};
