import type { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import { AppModals } from "./modals/AppModals";
import Head from "next/head";
import { CheckmarkIcon } from "../components/svg/CheckmarkIcon";
import { ProfileSVG } from "../components/svg/ProfileSVG";
import { MenuButtonSVG } from "../components/svg/MenuButtonSVG";

const Header = () => {
  return (
    <div className="flex flex-nowrap ">
      <h1 className="mt-8 align-middle text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        <CheckmarkIcon></CheckmarkIcon>
      </h1>
    </div>
  );
};

export const NAVIGATION_ITEMS = [
  <Link href="/app" key={0}>
    <HomeIcon className={"h-5 w-5"} />{" "}
  </Link>,
  <Link href="/connections" key={1}>
    <InboxStackIcon className={"h-5 w-5"} />
  </Link>,
];

const Footer = () => {
  return (
    <div className="btm-nav bg-accent p-2">
      <div>
        <a className="link-accent link  text-2xl">save</a>
      </div>
      <div>
        <ProfileSVG></ProfileSVG>
      </div>
      <div>
        <MenuButtonSVG></MenuButtonSVG>
      </div>
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
