import { useReadContract } from 'wagmi';
import contractABI from '../../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json';

export const useReadTokenData = (id: number) => {
  const { data: totalSupply, isLoading: isTotalSupplyLoading } = useReadContract({
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3', 
    abi: contractABI.abi,
    functionName: 'getTotalSupply',
    args: [id],
  });

  const { data: currentSupply, isLoading: isCurrentSupplyLoading } = useReadContract({
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3', 
    abi: contractABI.abi,
    functionName: 'getCurrentSupply',
    args: [id],
  });

  return { 
    totalSupply: totalSupply as number | undefined, 
    currentSupply: currentSupply as number | undefined, 
    isLoading: isTotalSupplyLoading || isCurrentSupplyLoading 
  };
};