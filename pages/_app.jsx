import "../styles/index.css";
import Layout from "../shared/Components/Layout";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { Toaster } from "react-hot-toast";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { blockchainClient, wagmiConfig, walletConnectProjectId } from "@/shared/Util/blockchainMethods";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <WagmiConfig config={wagmiConfig}>
              <Component {...pageProps} />
            </WagmiConfig>
          </Layout>
        </Hydrate>
      </QueryClientProvider>
      <Toaster />
      <Web3Modal projectId={walletConnectProjectId} ethereumClient={blockchainClient} />
    </>
  );
}
