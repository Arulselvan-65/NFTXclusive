'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NFT {
    id: number;
    name: string;
    image: string;
    price: string;
    currency: string;
}

interface NftCardProps {
    nfts: NFT[];
}

const NftCard: React.FC<NftCardProps> = ({ nfts }) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nfts.map((nft) => (
                    <div
                        key={nft.id}
                        className="bg-[#202020] rounded-2xl shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                        onMouseEnter={() => setHoveredCard(nft.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="relative aspect-square rounded-t-2xl overflow-hidden">
                            <Image
                                src={nft.image}
                                alt={nft.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-white font-semibold mb-2">{nft.name}</h3>

                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-[#B3B3B3]">Current Price</span>
                                <div className="flex items-center">
                                    <span className="text-lg font-bold text-white">{nft.price}</span>
                                    <span className="text-sm text-[#B3B3B3] ml-1">{nft.currency}</span>
                                </div>
                            </div>

                            <button
                                className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors duration-300 ${hoveredCard === nft.id
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-purple-500 text-white'
                                    }`}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NftCard;