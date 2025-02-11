'use client';
import { FC } from 'react';
import Link from "next/link";
import { ShoppingCart, Zap } from 'lucide-react';
import { toast } from 'react-toastify'; 
import { useAccount } from 'wagmi'; 

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
    const { isConnected } = useAccount(); 

    const handleWalletToast = () => {
      const toastId = 'connect-wallet-nft';
      if (!toast.isActive(toastId)) {
        toast.error("Please connect your wallet to proceed", {
          toastId: toastId,
          autoClose: 2000,
        });
      }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nfts.map((nft) => (
                <div
                    key={nft.id}
                    className="group relative bg-[#1e1e1e] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                    <div className="relative">
                        <img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-64 object-cover" 
                        />
                    </div>

                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-white mb-3 truncate">{nft.name}</h3>
                        
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Price</p>
                                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                    {nft.price} {nft.currency}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Zap className="text-yellow-400" size={20} />
                                <span className="text-sm text-gray-300">Trending</span>
                            </div>
                        </div>

                        <Link 
                            href={isConnected ? `/purchasenft/${nft.id}` : '#'} 
                            onClick={(e) => {
                                if (!isConnected) {
                                    e.preventDefault();
                                    handleWalletToast();
                                }
                            }}
                            className="block"
                        >
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:shadow-sm hover:shadow-purple-500/30 transition transform hover:scale-105">
                                <ShoppingCart size={18} />
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NftCard;
