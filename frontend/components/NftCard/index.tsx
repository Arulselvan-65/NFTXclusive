'use client';
import { FC } from 'react';

interface NFT {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
}

interface NftCardProps {
    nfts: NFT[];
}

const NftCard: FC<NftCardProps> = ({ nfts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nfts.map((nft) => (
               
               <div
                    key={nft.id}
                    className="bg-[#2a2a2a]/50 rounded-xl overflow-hidden border border-gray-800/50 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    <div className="relative aspect-square">
                        <img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{nft.name}</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Price</span>
                            <span className="text-white font-medium">
                                {nft.price} {nft.currency}
                            </span>
                        </div>
                        <button className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer rounded-lg hover:shadow-md hover:shadow-purple-500/25">
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NftCard;