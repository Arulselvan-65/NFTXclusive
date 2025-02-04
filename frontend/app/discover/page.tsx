'use client';
import { FC } from 'react';
import NftCard from '@/components/NftCard';
import Navbar from '@/components/Navbar';
import mockNFTs from '@/utils/nft-data/nfts.json';

const DiscoverPage: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center px-4 py-5 mt-8 md:mt-12 lg:px-20">
                <div className="w-full max-w-7xl">
                    <div className="flex flex-col items-center mb-7 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl mt-11 md:mt-2 font-bold text-white mb-4 text-center relative">
                            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">NFTs</span>
                        </h1>
                        <p className="text-gray-300 text-center max-w-2xl text-sm md:text-lg lg:text-xl mb-6 relative">
                            Convert fungible tokens into exclusive NFTs and explore unique digital assets in the evolving NFT space!
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-3xl rounded-full" />
                        <NftCard nfts={mockNFTs} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;