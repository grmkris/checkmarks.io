import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignInButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  if (user.isSignedIn) router.push("/socials");

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-accent">
            Get your verified credentials here
          </h1>

          <SignInButton mode="modal">
            <button className="btn-primary btn">Connect your wallet</button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
