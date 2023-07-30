import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { bsc, mainnet, polygon } from "wagmi/chains";
import { configureChains, createConfig } from "wagmi";
import { ethers } from "ethers";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

export const walletConnectProjectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [bsc, mainnet, polygon];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId: walletConnectProjectId })]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: walletConnectProjectId, chains }),
  publicClient,
});

export const blockchainClient = new EthereumClient(wagmiConfig, chains);
export const ethersProvider = new ethers.BrowserProvider(blockchainClient);
