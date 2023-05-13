import { type NextPage } from "next";
import { useModalStore } from "../features/modals/useModalStore";
import Link from "next/link";

const Home: NextPage = () => {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Link
            href={"/app"}
            className="cursor-pointer text-2xl font-extrabold tracking-tight text-accent underline hover:text-primary sm:text-[2rem]"
          >
            Check tha app
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;