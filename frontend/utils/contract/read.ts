import { useReadContract } from 'wagmi';
import { wagmiContractConfig } from './contracts';

export const useReadTokenData = (id: bigint) => {

  const { data: totalSupply, isLoading: isTotalSupplyLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getTotalSupply',
    args: [id],
  });

  const { data: currentSupply, isLoading: isCurrentSupplyLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getCurrentSupply',
    args: [id],
  });

  return { 
    totalSupply: totalSupply?.toString() ||  undefined, 
    currentSupply: currentSupply?.toString() || '0', 
    isLoading: isTotalSupplyLoading || isCurrentSupplyLoading 
  };
};