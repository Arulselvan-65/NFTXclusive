// app/discover/page.tsx
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
        <div className="min-h-screen bg-[#121212] flex">
            <Navbar />

            <div className="flex-1 flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 mt-2 md:mt-16">
                <div className="w-full max-w-7xl">

                    <div className="flex flex-col items-center mb-9">
                        <h1 className="text-4xl font-bold text-white mb-4">Discover NFTs</h1>
                        <p className="text-gray-400 text-center max-w-3xl text-sm md:text-base">
                            Convert fungible tokens into exclusive NFTs and explore unique digital assets in the evolving NFT space!
                        </p>
                    </div>

                    <NftCard nfts={mockNFTs} />
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;