// import { useWriteContract, useAccount } from 'wagmi';
// import { hardhat } from 'wagmi/chains';
// import { parseEther } from 'viem';
// import contractABI from '../../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json';

// interface ExchangeProps {
//     from: string;
//     nonFungibleTokenId: number;
//     price: number;
//     data?: string;
// }

// export const useExchangeToken = () => {
//     const { writeContract } = useWriteContract();
//     const account = useAccount();


//     const exchangeFungibleForNonFungible = async ({ from, nonFungibleTokenId, price, data = '0x' }: ExchangeProps) => {
//         try {
//             await writeContract({
//                 address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
//                 abi: contractABI.abi,
//                 functionName: 'exchangeFungibleForNonFungible',
//                 args: [from, nonFungibleTokenId, price, data],
//                 chain: hardhat,
//                 account: account.address, 
//             });
//         } catch (error) {
//             console.error('Error exchanging tokens:', error);
//             throw error;
//         }
//     };

//     return { exchangeFungibleForNonFungible };
// };