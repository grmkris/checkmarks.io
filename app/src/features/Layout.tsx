import type { ReactNode } from "react";
import { AppModals } from "./modals/AppModals";
import Head from "next/head";
import { CheckmarkIcon } from "../components/svg/CheckmarkIcon";
import { ProfileSVG } from "../components/svg/ProfileSVG";
import { MenuButtonSVG } from "../components/svg/MenuButtonSVG";
import { useWeb2Web3Selector } from "./web2Web3SelectorStore";
import clsx from "clsx";
import { usePublishVCs } from "./cms/PublishToCmsButton";
import { useRouter } from "next/router";

const Header = () => {
  const { selected, setSelected } = useWeb2Web3Selector((state) => state);
  const router = useRouter();

  const web2Classes = clsx(
    "tab-bordered tab text-2xl",
    selected === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-bordered tab text-2xl",
    selected === "web3" ? "tab-active" : ""
  );
  return (
    <>
      <div className="flex flex-col flex-nowrap content-center justify-center text-center">
        <h1 className="mt-8 align-middle text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <CheckmarkIcon></CheckmarkIcon>
        </h1>
      </div>
      {router.pathname !== "/" && (
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
  const router = useRouter();

  return (
    <div className="b h-90 btm-nav min-h-max border-t-2 py-2">
      {router.pathname !== "/" && (
        <>
          <div>
            <a
              className="link-accent link text-2xl hover:link-warning"
              onClick={() => {
                publishVCs.mutate();
              }}
            >
              save
            </a>
          </div>
          <div>
            <ProfileSVG></ProfileSVG>
          </div>
          <div>
            <MenuButtonSVG></MenuButtonSVG>
          </div>
        </>
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