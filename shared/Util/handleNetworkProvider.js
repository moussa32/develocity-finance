import EtherumImage from "@/images/Ethereum-icon.png";
import TetherImage from "@/images/Tether-icon.png";
import binanceUSD from "@/images/binance_USD.png";
import binanceCoin from "@/images/binance-coin.png";
import MaticCoinImage from "@/images/matic-icon.png";

export const networkSupportedCoins = network => {
  switch (network) {
    case "homestead":
      return [
        { id: 1, name: "Etherum Coin", ticker: "ETH", image: EtherumImage , decimals: '18'},
        { id: 2, name: "USDT", ticker: "USDT", image: TetherImage , decimals: '6'},
      ];
    case "bsc":
      return [
        { id: 1, name: "BNB Smart Chain", ticker: "BNB", image: binanceCoin , decimals: "18"},
        { id: 2, name: "BUSD", ticker: "BUSD", image: binanceUSD , decimals: "18"},
      ];

    case "bsc-testnet":
      return [
        { id: 1, name: "Binance Coin", ticker: "BNB", image: binanceCoin , decimals: "18"},
        { id: 2, name: "Binance USD", ticker: "BUSD", image: binanceUSD , decimals: "18"},
      ];
    case "matic":
      return [
        { id: 1, name: "Matic Coin", ticker: "MATIC", image: MaticCoinImage , decimals: "18"},
        { id: 2, name: "USDT", ticker: "USDT", image: TetherImage , decimals: "6"},
      ];
  }
};

export const getSecondCoinContractAddress = network => {
  switch (network) {
    case "homestead":
      return "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    case "bsc":
      return "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    case "bsc-testnet":
      return "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    case "matic":
      return "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
  }
};

export const getMainCoinContractAddress = network => {
  switch (network) {
    case "homestead":
      return "0x981342751d7b08e704a4b208F9e4c720b981B4E1";
    case "bsc":
      return "0x2F7f89d52131c3cd24eD1bb59042A16BCf123d5C";
    case "matic":
      return "0x2F7f89d52131c3cd24eD1bb59042A16BCf123d5C";
  }
};
