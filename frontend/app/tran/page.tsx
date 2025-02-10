"use client"

import { useReadContract } from 'wagmi'
import contractABI from "../../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json";
import { hardhat } from 'wagmi/chains';

import { useReadTokenData } from '@/utils/contract/read';

function SendTransaction() {

  const { totalSupply, currentSupply, isLoading } = useReadTokenData(1);


  console.log(totalSupply, currentSupply, isLoading); 

  return (
    <div>
      <div>Total Supply: {totalSupply.toString()}</div>
    </div>
  );
}


export default SendTransaction;