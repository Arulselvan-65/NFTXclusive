import { useWriteContract, useAccount } from 'wagmi';
import { parseEther } from 'viem';
import {hardhat} from 'wagmi/chains';
import contractABI from '../../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json';

interface MintProps {
  id: number;
  amount: number;
  data?: string;
}

export const useMintToken = () => {
  const { writeContract } = useWriteContract();
  const account = useAccount();

  const mintToken = async ({ id, amount, data = '0x' }: MintProps) => {
    try {
      await writeContract({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Replace with your contract address
        abi: contractABI.abi,
        functionName: 'mint',
        args: [id, amount, data],
        chain: hardhat,
        account: account.address, 
      });
    } catch (error) {
      console.error('Error minting token:', error);
      throw error;
    }
  };

  return { mintToken };
};