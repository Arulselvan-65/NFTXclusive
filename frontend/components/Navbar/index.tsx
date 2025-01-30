'use client';
import { FC } from 'react';
import ConnectButtonC from '@/components/ConnectButton'; 

const Navbar: FC = () => {
  return (
    <div className="w-screen bg-[#121212] p-4 fixed top-0 left-0  z-50">
      <div className="flex items-center justify-between h-16">
        <h2 className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          NftXclusive
        </h2>
        <ConnectButtonC /> 
      </div>
    </div>
  );
};

export default Navbar;