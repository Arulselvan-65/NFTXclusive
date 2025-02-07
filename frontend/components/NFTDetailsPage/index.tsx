import React, { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';
import Navbar from '../Navbar';

const NFTDetailsPage = ({ nft }) => {
  const [selectedToken, setSelectedToken] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nftId = nft.attributes.find(item => item.trait_type === "Token ID").value;
  const currency = nft.attributes.find(i => i.trait_type === "Linked Token").value;

  const tokens = [
    { name: 'USDT', price: '500' },
    { name: 'USDC', price: '500' },
    { name: 'DAI', price: '500' },
    { name: 'BUSD', price: '500' }
  ];

  const defaultNFT = {
    details: [
      { label: 'Contract Address', value: 'Artisan' },
      { label: 'Token ID', value: `${nftId}` },
      { label: 'Token Standard', value: 'ERC1155' },
      { label: 'Chain', value: 'Amoy' }
    ]
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white p-6 md:p-8">
        <Navbar />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-14">
          
          <div className="w-full lg:w-2/5 lg:sticky lg:top-8 lg:self-start">
            <div className="group bg-[#2a2a2a]/50 rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm">
              <div className="relative aspect-square">
                <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">{nft.name}</h1>
                <div className="flex justify-between items-center bg-[#1a1a1a]/50 rounded-lg p-3 border border-gray-800/50">
                  <span className="text-gray-400">Linked Token</span>
                  <span className="font-semibold text-purple-400">{currency}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 space-y-6">
            <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{nft.description}</p>
            </div>

            <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-3.5">Details</h2>
              <div className="space-y-3">
                {defaultNFT.details.map((detail, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-700/50 last:border-b-0">
                    <span className="text-gray-400">{detail.label}</span>
                    <span className="text-white font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Wallet size={20} className="text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Current Price</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {selectedToken ? selectedToken.price : "500"} {selectedToken ? selectedToken.name : currency}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-gray-800/50 flex items-center justify-between text-left"
                  >
                    <span className="text-gray-300">
                      {selectedToken ? `Pay with ${selectedToken.name}` : 'Select payment token'}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute w-full mt-2 bg-[#1a1a1a] rounded-lg border border-gray-800/50 overflow-hidden z-10">
                      {tokens.map((token, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedToken(token);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full p-3 text-left hover:bg-purple-500/10 transition-colors text-gray-300"
                        >
                          {token.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  className={`w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:shadow-purple-500/25 ${!selectedToken ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!selectedToken}
                >
                  {selectedToken ? 'Buy Now' : 'Select a token to continue'}
                </button>
              </div>
              <p className="text-sm text-gray-400 text-center mt-4">Gas fees will be calculated at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;