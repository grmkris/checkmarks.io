import { Layout } from "../features/Layout";
import { ToggleTheme } from "../features/ToggleTheme";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { getUserDID } from "../features/user-did-iden3";

const ConnectedAccounts = () => {
  const { user } = useUser();
  if (!user?.externalAccounts) return <div>No accounts</div>;
  return (
    <div>
      {user?.externalAccounts.map((acc, index) => {
        return <div key={index}>{JSON.stringify(acc)}</div>;
      })}
    </div>
  );
};

export default function App() {
  const identity = useQuery({
    queryKey: ["identity"],
    queryFn: async () => {
      return getUserDID({
        username: "test",
      });
    },
  });
  return (
    <Layout>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <ConnectedAccounts />
          <ToggleTheme />
          Imagine lots of cool stuff here
        </div>
      </div>
    </Layout>
  );
}
