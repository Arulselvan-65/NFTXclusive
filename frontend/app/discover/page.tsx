'use client';
import { FC } from 'react';
import NftCard from '@/components/NftCard';
import Navbar from '@/components/Navbar';

interface NFT {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
}

const mockNFTs: NFT[] = [
    {
        id: 1,
        name: "Cosmic Drift #1",
        price: "0.5",
        currency: "ETH",
        image: "https://bafybeigm4o2z67cphws4srdij4q3vsfl2hyt6kahtr7m3z2n2ingrhjbse.ipfs.dweb.link/",
    },
    {
        id: 2,
        name: "Digital Dreams #7",
        price: "0.8",
        currency: "ETH",
        image: "https://bafybeia6o5ec4jfte2p5xvnpuia4wx4ax75ht6sum7t2ttercxppynn5we.ipfs.dweb.link/",
    },
    {
        id: 3,
        name: "Neon Genesis #4",
        price: "1.2",
        currency: "ETH",
        image: "https://bafybeihrulkqwlfbumgrscev3kps2ia2r3pwpfkw4hjhmcdo5ouii4adaa.ipfs.dweb.link/",
    },
    {
        id: 4,
        name: "Virtual Visions #2",
        price: "0.6",
        currency: "ETH",
        image: "https://bafybeiapgqtknu66kai5ixg7pfxv3o3de5lb6vnvye7wjvj67a6cfvsc4q.ipfs.dweb.link",
    },
];

const DiscoverPage: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center px-4 py-5 mt-8 md:mt-12 lg:px-20">
                <div className="w-full max-w-7xl">
                    <div className="flex flex-col items-center mb-7 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl mt-2 font-bold text-white mb-4 text-center relative">
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