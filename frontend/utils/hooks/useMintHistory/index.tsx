import { useEffect, useState } from 'react';
import { usePublicClient, useAccount } from 'wagmi';
import { parseAbiItem } from 'viem';

export const useMintHistory = (tokenId: number) => {
  const [hasMinted, setHasMinted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const publicClient = usePublicClient();
  const { address } = useAccount();

  useEffect(() => {
    const checkMintHistory = async () => {
      if (!address) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        
        // Get mint events for this specific token and user
        const logs = await publicClient.getLogs({
          address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
          event: parseAbiItem('event TokensMinted(address indexed to, uint256 indexed tokenId, uint256 amount)'),
          args: {
            to: address,
            tokenId: BigInt(tokenId),
          },
          fromBlock: BigInt(0),
          toBlock: 'latest'
        });

        // User has minted if there are any logs for this token ID
        setHasMinted(logs.length > 0);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking mint history:', error);
        setIsLoading(false);
      }
    };

    checkMintHistory();
  }, [address, tokenId, publicClient]);

  return {
    hasMinted,
    isLoading,
    canMint: !hasMinted && !isLoading
  };
};