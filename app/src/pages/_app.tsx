import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { createPublicClient, http } from "viem";
import { dark } from "@clerk/themes";
import { Layout } from "../features/Layout";

const queryClient = new QueryClient();

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider
          afterSignUpUrl="/socials"
          afterSignInUrl={"/socials"}
          appearance={{
            baseTheme: dark,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClerkProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);