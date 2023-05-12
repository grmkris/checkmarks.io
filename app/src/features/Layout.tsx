import type { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import { ToggleTheme } from "./ToggleTheme";
import { AppModals } from "./modals/AppModals";
import { useRouter } from "next/router";

export const NAVIGATION_ITEMS = [
  <Link href="/app" key={0}>
    <HomeIcon className={"h-5 w-5"} />{" "}
  </Link>,
  <Link href="/connections" key={1}>
    <InboxStackIcon className={"h-5 w-5"} />
  </Link>,
];

export const Layout = (props: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <main className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
      <AppModals />
      {props.children}
      {router.pathname !== "/" && <NavigationBottom />}
    </main>
  );
};

const NavigationBottom = () => {
  return (
    <>
      <nav className="btm-nav">{NAVIGATION_ITEMS.map((item) => item)}</nav>
    </>
  );
};
