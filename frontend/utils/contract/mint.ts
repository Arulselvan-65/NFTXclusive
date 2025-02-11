import { useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { wagmiContractConfig } from './contracts';

interface MintProps {
  id: number;
  amount: number;
}

export const useMintToken = () => {
  const { writeContract, data: hash, isPending, isError,error: Error } = useWriteContract();
  const { address } = useAccount();

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  });

  const mintToken = async ({ id, amount }: MintProps) => {
    try {
      writeContract({
        ...wagmiContractConfig,
        functionName: 'mint',
        args: [BigInt(id), BigInt(amount), '0x'],
        chain: hardhat,
        account: address,
      });

    } catch (error) {
      console.log('Error minting token:', error);
      throw error;
    }
  };

  return {
    mintToken,
    hash,
    isPending,
    isError,
    isConfirmed,
    Error
  };
};