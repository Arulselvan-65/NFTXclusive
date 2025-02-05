'use client';
import React from 'react';
import { Wallet } from 'lucide-react';

// Default NFT data for demonstration
const defaultNFT = {
  id: 1,
  name: 'Cosmic Horizon #247',
  price: '2.5',
  currency: 'ETH',
  image: 'https://bafybeigm4o2z67cphws4srdij4q3vsfl2hyt6kahtr7m3z2n2ingrhjbse.ipfs.dweb.link/',
  description: 'A unique digital masterpiece that explores the boundaries of space and time. This NFT represents a convergence of digital art and blockchain technology.',
  details: [
    { label: 'Contract Address', value: 'Artisan' },
    { label: 'Token ID', value: 'Cosmic Series' },
    { label: 'Token Standard', value: '#247' },
    { label: 'Chain', value: 'Ethereum' }
  ]
};

const NFTDetailsPage = ({ nft = defaultNFT }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">
        {/* NFT Image Section */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-8 lg:self-start">
          <div className="group bg-[#2a2a2a]/50 rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm">
            <div className="relative aspect-square">
              <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h1 className="text-2xl font-bold mb-4">{nft.name}</h1>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Current Price</p>
                  <div className="flex items-center gap-2">
                    <Wallet size={20} className="text-purple-400" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {"nft.price"} {"btc"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 space-y-6">
          {/* Description Section */}
          <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-300 leading-relaxed">{nft.description}</p>
          </div>

          {/* Details Section */}
          <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4">Details</h2>
            <div className="space-y-3">
              {defaultNFT.details.map((detail, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-700/50 last:border-b-0">
                  <span className="text-gray-400">{detail.label}</span>
                  <span className="text-white font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Section */}
          <div className="bg-[#2a2a2a]/30 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Current Price</p>
                <p className="text-2xl font-bold">78 BTC</p>
              </div>
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Buy Now
              </button>
            </div>
            <p className="text-sm text-gray-400 text-center">Gas fees will be calculated at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;