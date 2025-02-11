import React from 'react';
import {MintTransactionHandler, MintButton} from '@/components/mintTransactionHandler';

const TokenCard = ({ tokens }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="group relative bg-[#1E1E1E]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
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

              <MintTransactionHandler id={token.id} amount={500}>
                {({ handleMint, isPending }) => (
                  <MintButton 
                    onClick={handleMint}
                    isPending={isPending}
                    className="w-full"
                  />
                )}
              </MintTransactionHandler>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TokenCard;
