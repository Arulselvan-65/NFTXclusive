'use client';
import React from 'react';
import NFTDetailsPage from '@/components/NFTDetailsPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box } from 'lucide-react';

const PurchaseNftPage = ({ params }) => {
  const { id } = params;
  const [nft, setNft] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get(`https://bafybeifkuq2wqficlw54xqvjy3nfjnexerkmp3yslf4wtb3w642e5rcvoe.ipfs.dweb.link/${id}.json`)
        .then((response) => {
          setNft(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching NFT data:", error);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex flex-col items-center justify-center p-4">
        <div className="relative">
          <Box size={48} className="text-purple-500 animate-bounce" />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Loading NFT Data
          </h2>
          <p className="text-gray-400 max-w-sm">
            Fetching your digital asset from the decentralized network...
          </p>
        </div>
        
        <div className="flex gap-2 mt-8">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-sm bg-purple-500/30 border border-purple-500/50"
              style={{
                animation: `pulse 1.5s ease-in-out ${index * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return <NFTDetailsPage nft={nft} />;
};

export default PurchaseNftPage;