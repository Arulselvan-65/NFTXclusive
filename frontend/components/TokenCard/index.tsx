import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TokenCard = ({ tokens }) => {
  const [hoveredTokenId, setHoveredTokenId] = useState(null);

  const handleMint = (token) => {
    console.log(`Minting ${token.name} tokens`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tokens.map((token) => (
        <div
          key={token.id}
          className="group relative bg-[#1E1E1E]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
          onMouseEnter={() => setHoveredTokenId(token.id)}
          onMouseLeave={() => setHoveredTokenId(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E1E1E] z-10" />
            <img
              src={token.image}
              alt={token.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{token.name}</h3>
            
              </div>
              <div className="flex flex-col items-end">
                <span className="text-purple-400 text-sm font-medium">Supply</span>
                <span className="text-white text-sm">{token.currentSupply}/{token.maxSupply}</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {token.description}
            </p>

            <div className="pt-4 border-t border-gray-800">
              <button
                onClick={() => handleMint(token)}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
              >
                <span>Mint Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenCard;