import { Clerk } from "../features/Clerk";
import { useState } from "react";
import { Sismo } from "../features/Sismo";
import clsx from "clsx";

export default function Connections() {
  const [selectedTab, setSelectedTab] = useState<"web2" | "web3">("web2");

  const web2Classes = clsx(
    "tab-lifted tab",
    selectedTab === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-lifted tab",
    selectedTab === "web3" ? "tab-active" : ""
  );

  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="tabs">
          <a
            className={web2Classes}
            onClick={() => {
              console.log("clicked");
              setSelectedTab("web2");
            }}
          >
            Web2
          </a>
          <a
            className={web3Classes}
            onClick={() => {
              console.log("clicked");
              setSelectedTab("web3");
            }}
          >
            Web3
          </a>
        </div>
      </div>
      {selectedTab === "web2" && <Clerk />}
      {selectedTab === "web3" && <Sismo />}
    </div>
  );
}