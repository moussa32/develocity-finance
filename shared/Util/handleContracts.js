import { ethers } from "ethers";
import { mainNetContract, testNetContract } from "../Constants/contractAddress";
import contractAbi from "../../public/assets/contractApi.json";
import { deveCost } from "../Constants/deveCost";
import { getSecondCoinContractAddress, getMainCoinContractAddress } from "./handleNetworkProvider";

export const getSecondCoinContract = (provider, network) => {
  return new ethers.Contract(
    getSecondCoinContractAddress(network),
    ["function balanceOf(address) view returns (uint)", "function approve(address, uint256) external returns (bool)"],
    provider
  );
};

export const getWalletBalance = async (network, provider, walletAddress) => {
  console.log(getSecondCoinContractAddress(network))
  const walletContract = new ethers.Contract(getMainCoinContractAddress(network) , contractAbi, provider);

  //Fetch deve balance
  const DEVEBalance = Number(
    ethers.utils.formatEther((await walletContract._contributions(walletAddress)).toString())
  ).toFixed(2);

  //Fetch Tokens to claim
  const tokensToClaim = (await walletContract.getRefPer(walletAddress)).toString();

  //Fetch Referrals to claim
  const referralsToClaim = Number(
    ethers.utils.formatEther((await walletContract._RefAmount(walletAddress)).toString())
  ).toFixed(2);
  
  let referralsBalanceAmount,DEVEBalanceAmount = 0;

  if(network === "bsc"){
    const walletContract2 = new ethers.Contract("0x124Ab16d98d71dd95C5F57Ed6123bD06f00EA803" , contractAbi, provider);
    const referralsToClaim2 = Number(
      ethers.utils.formatEther((await walletContract2._RefAmount(walletAddress)).toString())
    ).toFixed(2);

    const DEVEBalance2 = Number(
      ethers.utils.formatEther((await walletContract2._contributions(walletAddress)).toString())
    ).toFixed(2);
  
    DEVEBalanceAmount = Number(DEVEBalance2) + Number(DEVEBalance);
    referralsBalanceAmount = Number(referralsToClaim2) + Number(referralsToClaim);

  }else{
    referralsBalanceAmount = referralsToClaim;

  }

  const referralsBalanceValue = (referralsBalanceAmount * deveCost).toFixed(2);

  const DEVEBalanceValue = (DEVEBalanceAmount * deveCost).toFixed(2);

  // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]

  return {
    deveBalance: { amount: DEVEBalanceAmount, value: DEVEBalanceValue },
    tokensToClaim: { amount: tokensToClaim, value: tokensToClaim },
    referralsToClaim: { amount: referralsBalanceAmount, value: referralsBalanceValue },
  };
};
