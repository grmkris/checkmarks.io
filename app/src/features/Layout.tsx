import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AppModals } from "./modals/AppModals";
import Head from "next/head";
import { CheckmarkIcon } from "../components/svg/CheckmarkIcon";
import { ProfileSVG } from "../components/svg/ProfileSVG";
import { MenuButtonSVG } from "../components/svg/MenuButtonSVG";
import { useWeb2Web3Selector } from "./web2Web3SelectorStore";
import clsx from "clsx";
import { usePublishVCs } from "./cms/PublishToCmsButton";
import { useCredentialStore } from "./CredentialStore";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { selected, setSelected } = useWeb2Web3Selector((state) => state);
  const router = useRouter();
  const user = useUser();

  const isPublicPage = router.pathname.includes("public");

  const web2Classes = clsx(
    "tab-bordered tab text-2xl",
    selected === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-bordered tab text-2xl",
    selected === "web3" ? "tab-active" : ""
  );

  const showTabs = router.pathname !== "/" && !isPublicPage;

  return (
    <>
      <div className="flex flex-col flex-nowrap content-center justify-center text-center">
        <h1 className="mt-8 align-middle text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <div onClick={() => router.push("/")}>
            <CheckmarkIcon />
          </div>
        </h1>
      </div>
      {showTabs && (
        <div className="tabs">
          <a
            className={web2Classes}
            onClick={() => {
              setSelected("web2");
            }}
          >
            <span
              className={
                (selected === "web2" && "text-accent") || "text-secondary"
              }
            >
              web 2
            </span>
          </a>
          <a
            className={web3Classes}
            onClick={() => {
              setSelected("web3");
            }}
          >
            <span
              className={
                (selected === "web3" && "text-accent") || "text-secondary"
              }
            >
              web 3
            </span>
          </a>
        </div>
      )}
    </>
  );
};

const Footer = () => {
  const publishVCs = usePublishVCs();

  const [showSave, setShowSave] = useState(true);
  const creds = useCredentialStore((state) => state.credentials);

  const router = useRouter();
  const isPublicPage = router.pathname.includes("public");

  useEffect(() => {
    // for demo purposes I want to display save button everytime we change creds stored in device storage
    console.log("useEffect");
    setShowSave(true);
  }, [creds]);

  if (isPublicPage) {
    return null;
  }

  return (
    <div>
      {router.pathname !== "/" && (
        <div className="b h-90 btm-nav min-h-max border-t-2">
          {showSave && (
            <div>
              <a
                className="link-accent link text-2xl hover:link-warning"
                onClick={() => {
                  publishVCs.mutate();
                  setShowSave(false);
                }}
              >
                save
              </a>
            </div>
          )}
          <div>
            <ProfileSVG></ProfileSVG>
          </div>
          <div>
            <MenuButtonSVG></MenuButtonSVG>
          </div>
        </div>
      )}
    </div>
  );
};

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Checkmarks.io</title>
        <meta name="description" content="Decentralized checkmarks" />
        {/* <link rel="icon" href="/logo.png" />*/}
      </Head>
      <main className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <Header />
        <AppModals />
        {props.children}
        {<Footer />}
      </main>
    </>
  );
};