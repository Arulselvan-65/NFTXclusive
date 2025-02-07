import React, { useState } from 'react';
import { Coins, ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';

const TokenMintingPage = () => {
  const [hoveredTokenId, setHoveredTokenId] = useState(null);

  const tokens = [
    { 
      id: 1,
      name: 'ART',
      description: 'Artisan Governance Token',
      maxSupply: '1,000,000',
      currentSupply: '250,000',
      mintPrice: '0.1 MATIC'
    },
    {
      id: 2,
      name: 'CRAFT',
      description: 'Crafters Community Token',
      maxSupply: '500,000',
      currentSupply: '100,000',
      mintPrice: '0.15 MATIC'
    },
    {
      id: 3,
      name: 'FORGE',
      description: 'Forgers Utility Token',
      maxSupply: '750,000',
      currentSupply: '180,000',
      mintPrice: '0.12 MATIC'
    },
    {
      id: 4,
      name: 'GUILD',
      description: 'Guild Membership Token',
      maxSupply: '250,000',
      currentSupply: '75,000',
      mintPrice: '0.2 MATIC'
    }
  ];

  const handleMint = (token) => {
    console.log(`Minting ${token.name} tokens`);
   
  };

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 md:pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mint <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tokens</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mint fungible tokens that can be exchanged for unique NFTs in our marketplace. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokens.map((token) => (
            <div 
              key={token.id}
              className={`bg-[#2a2a2a]/30 rounded-xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden
                ${hoveredTokenId === token.id 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 max-h-[500px]' 
                  : 'border-gray-800/50 max-h-64'}`}
              onMouseEnter={() => setHoveredTokenId(token.id)} 
              onMouseLeave={() => setHoveredTokenId(null)} 
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Coins className="text-purple-400" size={24} />
                  <h3 className="text-xl font-bold">{token.name}</h3>
                </div>
                {hoveredTokenId === token.id && (
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                )}
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{token.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Max Supply:</span>
                  <span className="text-gray-200">{token.maxSupply}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current Supply:</span>
                  <span className="text-gray-200">{token.currentSupply}</span>
                </div>
              </div>

      
              <div className={'mt-6 transition-opacity duration-300 opacity-100'}>
                <button
                  onClick={() => handleMint(token)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  Mint Tokens
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block mt-8 text-center md:mb-0 mb-10">
          <a href="/discover" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2">
            View Available NFTs
            <ArrowRight size={16} />
          </a>
        </div>
        <div className='md:hidden mb-6'></div>
      </div>
    </div>
  );
};

export default TokenMintingPage;