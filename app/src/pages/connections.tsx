import { Clerk } from "../features/Clerk";
import { ConnectWithSismo } from "../features/ConnectWithSismo";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ConnectWithLens } from "../features/ConnectWithLens";
import { ConnectWithAirStack } from "../features/ConnectWithAirStack";
import { useWeb2Web3Selector } from "../features/web2Web3SelectorStore";

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
  const { selected, setSelected } = useWeb2Web3Selector((state) => state);

  const web2Classes = clsx(
    "tab-lifted tab",
    selected === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-lifted tab",
    selected === "web3" ? "tab-active" : ""
  );

  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {selected === "web2" && <Clerk />}
        {selected === "web3" && <Web3Creds />}
      </div>
    </div>
  );
}
