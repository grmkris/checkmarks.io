import { Clerk } from "../features/Clerk";
import { ConnectWithSismo } from "../features/ConnectWithSismo";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ConnectWithLens } from "../features/ConnectWithLens";
import { ConnectWithAirStack } from "../features/ConnectWithAirStack";

function Web3Creds() {
  return (
    <div className={"flex flex-col space-y-4"}>
      <ConnectWithLens />
      <ConnectWithSismo />
      <ConnectWithAirStack />
    </div>
  );
}

export default function Connections() {
  const router = useRouter();
  const selectedTab = router.query.tab || "web3";

  const web2Classes = clsx(
    "tab-lifted tab",
    selectedTab === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-lifted tab",
    selectedTab === "web3" ? "tab-active" : ""
  );

  const handleTabChange = (tab: string) => {
    void router.push({
      pathname: router.pathname,
      query: { ...router.query, tab },
    });
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="tabs">
          <a
            className={web2Classes}
            onClick={() => {
              handleTabChange("web2");
            }}
          >
            <span
              className={
                (selectedTab === "web2" && "text-accent") || "text-secondary"
              }
            >
              web 2
            </span>
          </a>
          <a
            className={web3Classes}
            onClick={() => {
              handleTabChange("web3");
            }}
          >
            <span
              className={
                (selectedTab === "web3" && "text-accent") || "text-secondary"
              }
            >
              web 3
            </span>
          </a>
        </div>
      </div>
      {selectedTab === "web2" && <Clerk />}
      {selectedTab === "web3" && <Web3Creds />}
    </div>
  );
}