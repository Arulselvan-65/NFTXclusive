import React from 'react';
import Navbar from '../Navbar';
import TokenCard from '../TokenCard';
import mockTokens from "@/utils/token-data/tokens.json";

const TokenMintingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-5 mt-6 sm:mt-8 md:mt-12 lg:px-20">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col items-center mb-8 sm:mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center relative">
              Mint <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Tokens</span>
            </h1>

            <p className="text-gray-300 text-center max-w-2xl text-sm md:text-lg lg:text-xl mb-4 sm:mb-6 relative px-4 sm:px-0">
              Mint fungible tokens that can be exchanged for unique NFTs in our marketplace.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-3xl rounded-full" />
            <TokenCard tokens={mockTokens} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenMintingPage;