import { type NextPage } from "next";
import Head from "next/head";

import { ConnectWallet } from "../features/ConnectWallet";
import { Clerk } from "../features/Clerk";
import { Layout } from "../features/Layout";
import { SignIn } from "@clerk/nextjs";
import { useModalStore } from "../features/modals/useModalStore";

const Home: NextPage = () => {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <>
      <Head>
        <title>Hackhaton starter</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hackathon<span className="text-accent">Starter</span> Kit
          </h1>
        </div>
        <Clerk />
        <SignIn />
        <ConnectWallet />
        <button
          className={"btn-primary btn"}
          onClick={() =>
            openModal({
              view: "HelloWorldView1",
              data: { HelloWorldView1: { name: "Kris" } },
            })
          }
        >
          Open modal 1
        </button>

        <button
          className={"btn-primary btn"}
          onClick={() =>
            openModal({
              view: "HelloWorldView2",
              data: { HelloWorldView2: { name: "Kris2" } },
            })
          }
        >
          Open modal 2
        </button>
      </Layout>
    </>
  );
};

export default Home;
