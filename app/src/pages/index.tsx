import { type NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-accent">
            Get your verified credentials here
          </h1>

          <button
            className="btn-primary btn"
            onClick={() => router.push("/connections#/web3-wallet ")}
          >
            connect your wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;