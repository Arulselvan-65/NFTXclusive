"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import ConnectButtonC from "@/components/ConnectButton";
import type { NextPage } from 'next';
import NftCard from '@/components/NftCard';

interface NFTCard {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
}

const mockNFTs: NFTCard[] = [
    {
        id: 1,
        name: "Cosmic Drift #1",
        price: "0.5",
        currency: "ETH",
        image: "",
    },
    {
        id: 2,
        name: "Digital Dreams #7",
        price: "0.8",
        currency: "ETH",
        image: "",
    },
    {
        id: 3,
        name: "Neon Genesis #4",
        price: "1.2",
        currency: "ETH",
        image: "",
    },
    {
        id: 4,
        name: "Virtual Visions #2",
        price: "0.6",
        currency: "ETH",
        image: "",
    },
];

const DiscoverPage: NextPage = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#121212]">

            <div className="hidden md:block absolute top-5 right-3">
                <ConnectButtonC />
            </div>

            <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12">
                <h1 className="text-4xl font-bold text-white mb-8">Discover NFTs</h1>
                <NftCard nfts={mockNFTs}/>
            </div>
        </div>
    );
};

export default DiscoverPage;












