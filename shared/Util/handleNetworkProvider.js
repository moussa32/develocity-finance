import EtherumImage from "@/images/Ethereum-icon.png";
import TetherImage from "@/images/Tether-icon.png";
import binanceUSD from "@/images/binance_USD.png";
import binanceCoin from "@/images/binance-coin.png";
import MaticCoinImage from "@/images/matic-icon.png";

export const convertNewNetworkName = oldNetwork => {
  switch (oldNetwork) {
    case "homestead":
      return "mainnet";
  }
};

export const networkSupportedCoins = network => {
  switch (network) {
    case "homestead":
      return [
        { id: 1, name: "Etherum Coin", ticker: "ETH", image: EtherumImage },
        { id: 2, name: "Tether USD", ticker: "USDT", image: TetherImage },
      ];
    case "bsc":
      return [
        { id: 1, name: "Binance Coin", ticker: "BNB", image: binanceCoin },
        { id: 2, name: "Binance USD", ticker: "BUSD", image: binanceUSD },
      ];

    case "bsc-testnet":
      return [
        { id: 1, name: "Binance Coin", ticker: "BNB", image: binanceCoin },
        { id: 2, name: "Binance USD", ticker: "BUSD", image: binanceUSD },
      ];
    case "matic":
      return [
        { id: 1, name: "Matic Coin", ticker: "MATIC", image: MaticCoinImage },
        { id: 2, name: "Tether USD", ticker: "USDT", image: TetherImage },
      ];
  }
};

// const convertOldNetworkNameToNew = oldNetwork = {
//   switch(network){
//     case "house":
//       return ""
//   }
// }

export const getSecondCoinContractAddress = networkName => {
  switch (networkName) {
    case "mainnet":
      return "0xdac17f958d2ee523a2206206994597c13d831ec7";
    case "binance":
      return "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";
    case "matic":
      return "0xc2132d05d31c914a87c6611c10748aeb04b58e8f";
  }
};
