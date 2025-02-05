'use client';
import { FC } from 'react';
import ConnectButtonC from '@/components/ConnectButton'; 

const Navbar: FC = () => {
  return (
    <div className="w-screen bg-[#121212] bg-opacity-60 backdrop-blur-md p-4 fixed top-0 left-0 z-50 md:px-10">
      <div className="flex items-center justify-between h-7">
        <h2 className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          NftXclusive
        </h2>
        <ConnectButtonC /> 
      </div>
    </div>
  );
};

export default Navbar;