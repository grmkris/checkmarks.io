import { ToggleTheme } from "../features/ToggleTheme";
import { Clerk } from "../features/Clerk";
import { Layout } from "../features/Layout";

export default function Connections() {
  return (
    <Layout>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <ToggleTheme />
          <Clerk />
        </div>
      </div>
    </Layout>
  );
}
