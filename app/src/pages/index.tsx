import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignInButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  if (user.isSignedIn) router.push("/socials");

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/background_mobile.png")`,
        backgroundSize: "auto 125%",
        backgroundPosition: "bottom ",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-accent">
            One check, <br></br> infinite trust{" "}
          </h1>
          <SignInButton mode="modal">
            <button className="btn-primary btn  space-y-2 p-3 px-10">
              {" "}
              connect <br></br>your wallet
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default Home;