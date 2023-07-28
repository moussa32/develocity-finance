import { ethers } from "ethers";
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
  walletAddress = walletAddress;
  const walletContract = new ethers.Contract(getMainCoinContractAddress(network) , contractAbi, provider);

  //Fetch deve balance
  const DEVEBalance = Number(
    ethers.utils.formatEther((await walletContract._contributions(walletAddress)).toString())
  ).toFixed(2);
  //Fetch Tokens to claim

  const tokensToClaim = (await walletContract.getRefPer(walletAddress)).toString();

  const claimedRefAmount = (await walletContract._claimedRefAmount(walletAddress)).toString();

  //Fetch Referrals to claim
  const referralsToClaim = Number(
    await walletContract._RefAmount(walletAddress)
  ).toFixed(2);
  let referralsBalanceAmount= 0,
  DEVEBalanceAmount = 0,
  claimedRefAmountB = 0;

  if(network === "bsc"){
    const walletContract2 = new ethers.Contract("0x124Ab16d98d71dd95C5F57Ed6123bD06f00EA803" , contractAbi, provider);
    const walletContract3 = new ethers.Contract("0x2F3a22b69aB00D3adF383b1f62281337e1f38bF0" , contractAbi, provider);
    const walletContract4 = new ethers.Contract("0x981342751d7b08e704a4b208F9e4c720b981B4E1" , contractAbi, provider);
    const walletContract5 = new ethers.Contract("0x9314964Cf5b1054DE50B5a87b832732272aeE00f" , contractAbi, provider);
    
    const referralsToClaim2 = Number(
      await walletContract5._RefAmount(walletAddress)
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

    let DEVEBalance5 = Number(
      ethers.utils.formatEther((await walletContract5._contributions(walletAddress)).toString())
    ).toFixed(2);

    const claimedRefAmount2 = (await walletContract5._claimedRefAmount(walletAddress)).toString();

    claimedRefAmountB = (Number(claimedRefAmount) + Number(claimedRefAmount2)).toFixed(2);
    DEVEBalanceAmount = (Number(DEVEBalance3) + Number(DEVEBalance2) + Number(DEVEBalance) + Number(DEVEBalance4) + Number(DEVEBalance5)).toFixed(2);
    referralsBalanceAmount = Number(referralsToClaim)  + Number(referralsToClaim2);

  }else if(network === "matic"){

    const walletContract2 = new ethers.Contract("0x8c23F7CC7c720dFF6aBf7E83271762a985092Ab5" , contractAbi, provider);
    const walletContract3 = new ethers.Contract("0x2F7f89d52131c3cd24eD1bb59042A16BCf123d5C" , contractAbi, provider);

    const referralsToClaim2 = Number(
      await walletContract3._RefAmount(walletAddress)
    ).toFixed(2);

    const DEVEBalance2 = Number(
      ethers.utils.formatEther((await walletContract2._contributions(walletAddress)).toString())
    ).toFixed(2);

    const DEVEBalance3 = Number(
      ethers.utils.formatEther((await walletContract3._contributions(walletAddress)).toString())
    ).toFixed(2);

    const claimedRefAmount2 = (await walletContract3._claimedRefAmount(walletAddress)).toString();

    claimedRefAmountB = (Number(claimedRefAmount) + Number(claimedRefAmount2)).toFixed(2);

    DEVEBalanceAmount = (Number(DEVEBalance2) + Number(DEVEBalance) +  Number(DEVEBalance3)).toFixed(2);
    referralsBalanceAmount = Number(referralsToClaim)  + Number(referralsToClaim2) 

  }else{
    DEVEBalanceAmount = DEVEBalance;
  }

  referralsBalanceAmount = (referralsBalanceAmount).toFixed(2);
  let finalRefbalance = referralsBalanceAmount/10**6 - claimedRefAmountB/10**6;
  const referralsBalanceValue = (finalRefbalance * deveCost).toFixed(2);

  const DEVEBalanceValue = (DEVEBalanceAmount * deveCost).toFixed(2);

  // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]

  return {
    deveBalance: { amount: DEVEBalanceAmount, value: DEVEBalanceValue },
    tokensToClaim: { amount: Number(tokensToClaim) === 8 ? 7.5: tokensToClaim, value: Number(tokensToClaim) === 8 ? 7.5: tokensToClaim },
    referralsToClaim: { amount: Number(finalRefbalance).toFixed(2).toString(), value: referralsBalanceValue },
  };
};
