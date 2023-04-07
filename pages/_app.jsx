import "../styles/index.css";
import Layout from "../shared/Components/Layout";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { arbitrum, avalanche, bsc, bscTestnet, fantom, gnosis, mainnet, optimism, polygon } from "wagmi/chains";
import { Toaster } from "react-hot-toast";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [mainnet, polygon, avalanche, arbitrum, bsc, bscTestnet, optimism, gnosis, fantom, goerli];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  console.log(chains);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <Layout>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      </Layout>
      <Toaster />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
