import React from 'react';
import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Coins, Wallet } from 'lucide-react';
import ConnectButtonC from '@/components/ConnectButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccount } from 'wagmi';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isConnected } = useAccount();

  const navigation = [
    { name: 'Discover NFTs', href: '/discover', icon: Wallet },
    { name: 'Mint Tokens', href: '/mint-tokens', icon: Coins },
  ];

  const isActivePath = (path: string) => pathname === path;

  const handleWalletToast = () => {
    const toastId = 'connect-wallet';
    if (!toast.isActive(toastId)) {
      toast.error("Please connect your wallet to proceed", {
        toastId: toastId,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="w-screen bg-[#121212] bg-opacity-60 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
      
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

        
            <div className="hidden md:flex md:items-center md:space-x-4 flex-1">
              <Link href="/" className="flex-shrink-0">
                <h2 className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                  NftXclusive
                </h2>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="flex space-x-4 mr-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href === '/mint-tokens' && !isConnected ? '#' : item.href}
                      onClick={(e) => {
                        if (item.href === '/mint-tokens' && !isConnected) {
                          e.preventDefault();
                          handleWalletToast();
                        }
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                        isActivePath(item.href)
                          ? 'text-purple-400 bg-purple-500/10'
                          : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <ConnectButtonC />
          </div>
        </div>

   
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden border-t border-gray-800/50`}
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href === '/mint-tokens' && !isConnected ? '#' : item.href}
                  onClick={(e) => {
                    if (item.href === '/mint-tokens' && !isConnected) {
                      e.preventDefault();
                      handleWalletToast();
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActivePath(item.href)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;