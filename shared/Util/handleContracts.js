import { ethers } from "ethers";
import { mainNetContract, testNetContract } from "../Constants/contractAddress";
import contractAbi from "../../public/assets/contractApi.json";
import { deveCost } from "../Constants/deveCost";
import { getSecondCoinContractAddress } from "./handleNetworkProvider";

export const getSecondCoinContract = (provider, network) => {
  return new ethers.Contract(
    getSecondCoinContractAddress(network),
    ["function balanceOf(address) view returns (uint)", "function approve(address, uint256) external returns (bool)"],
    provider
  );
};

export const getWalletBalance = async (provider, walletAddress) => {
  const walletContract = new ethers.Contract(testNetContract, contractAbi, provider);

  //Fetch deve balance
  const DEVEBalance = Number(
    ethers.utils.formatEther((await walletContract._contributions(walletAddress)).toString())
  ).toFixed(2);

  const DEVEBalanceValue = (DEVEBalance * deveCost).toFixed(2);

  //Fetch Tokens to claim
  const tokensToClaim = (await walletContract.getRefPer(walletAddress)).toString();

  //Fetch Referrals to claim
  const referralsToClaim = Number(
    ethers.utils.formatEther((await walletContract._RefAmount(walletAddress)).toString())
  ).toFixed(5);

  // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]

  return {
    deveBalance: { amount: DEVEBalance, value: DEVEBalanceValue },
    tokensToClaim: { amount: tokensToClaim, value: tokensToClaim },
    referralsToClaim,
  };
};
