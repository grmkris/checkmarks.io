import { Clerk } from "../features/Clerk";
import { ConnectWithSismo } from "../features/ConnectWithSismo";
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
  const { selected, setSelected } = useWeb2Web3Selector((state) => state);

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay mt-6 min-h-screen bg-base-100"></div>
      <div className="hero-content min-h-screen text-center text-neutral-content">
        <div className="mt-6 flex min-h-screen flex-col">
          {selected === "web2" && <Clerk />}
          {selected === "web3" && <Web3Creds />}
        </div>
      </div>
    </div>
  );
}