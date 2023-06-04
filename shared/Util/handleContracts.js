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
    await walletContract._RefAmount(walletAddress)
  ).toFixed(2);
  let referralsBalanceAmount= 0,
  DEVEBalanceAmount = 0;

  if(network === "bsc"){
    const walletContract2 = new ethers.Contract("0x124Ab16d98d71dd95C5F57Ed6123bD06f00EA803" , contractAbi, provider);
    const walletContract3 = new ethers.Contract("0x2F3a22b69aB00D3adF383b1f62281337e1f38bF0" , contractAbi, provider);
    const walletContract4 = new ethers.Contract("0x981342751d7b08e704a4b208F9e4c720b981B4E1" , contractAbi, provider);
    const referralsToClaim2 = Number(
      await walletContract2._RefAmount(walletAddress)
    ).toFixed(2);

    const DEVEBalance2 = Number(
      ethers.utils.formatEther((await walletContract2._contributions(walletAddress)).toString())
    ).toFixed(2);
    let DEVEBalance3 = 0;
    if(walletAddress != "0xf19b273961C3087033F69de79C20f87c37e7713A"){
     DEVEBalance3 = Number(
      ethers.utils.formatEther((await walletContract3._contributions(walletAddress)).toString())
    ).toFixed(2);
    }
    let DEVEBalance4 = Number(
      ethers.utils.formatEther((await walletContract4._contributions(walletAddress)).toString())
    ).toFixed(2);
    DEVEBalanceAmount = (Number(DEVEBalance3) + Number(DEVEBalance2) + Number(DEVEBalance) + Number(DEVEBalance4)).toFixed(2);
    referralsBalanceAmount = (Number(referralsToClaim)).toFixed(2);
 
  }else{
    referralsBalanceAmount = referralsToClaim;
    DEVEBalanceAmount = DEVEBalance;
  }
  let finalRefbalance = referralsBalanceAmount/10**6;
  const referralsBalanceValue = (finalRefbalance * deveCost).toFixed(2);

  const DEVEBalanceValue = (DEVEBalanceAmount * deveCost).toFixed(2);

  // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]

  return {
    deveBalance: { amount: DEVEBalanceAmount, value: DEVEBalanceValue },
    tokensToClaim: { amount: Number(tokensToClaim) === 8 ? 7.5: tokensToClaim, value: Number(tokensToClaim) === 8 ? 7.5: tokensToClaim },
    referralsToClaim: { amount: Number(finalRefbalance).toFixed(2).toString(), value: referralsBalanceValue },
  };
};
