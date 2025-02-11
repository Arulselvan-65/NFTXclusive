"use client"

import React, { useState, useEffect } from 'react';
import { useMintToken } from '@/utils/contract';
import { useAccount, usePublicClient } from 'wagmi';
import { parseAbiItem } from 'viem';
import { toast } from 'react-toastify';
import TransactionModal from '../TransactionModal';


const useModalState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const openModal = (status) => {
    setIsModalOpen(true);
    setTransactionStatus(status);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionStatus(null);
    window.location.reload();
  };

  return {
    isModalOpen,
    transactionStatus,
    openModal,
    closeModal,
    setTransactionStatus
  };
};

const useMintTransaction = ({ id, amount = 500 }) => {
  const { address } = useAccount();
  const { mintToken, isPending, isConfirmed, isError } = useMintToken();
  const publicClient = usePublicClient();
  const {
    openModal,
    closeModal,
    setTransactionStatus
  } = useGlobalModalState();

  useEffect(() => {
    if (isPending) setTransactionStatus('loading');
    else if (isConfirmed) {
      setTransactionStatus('success');
      setTimeout(() => closeModal(), 1500);
    }
    else if (isError) {
      setTransactionStatus('error');
      closeModal();
    }
  }, [isPending, isConfirmed, isError]);

  const handleMint = async () => {
    try {
      const logs = await publicClient.getLogs({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        event: parseAbiItem('event TokensMinted(address indexed to, uint256 indexed tokenId, uint256 amount)'),
        args: {
          to: address,
          tokenId: BigInt(id),
        },
        fromBlock: BigInt(0),
        toBlock: 'latest'
      });

      if (logs.length > 0) {
        toast.error("You have already minted this token", {
          toastId: 'token-already-minted',
          autoClose: 2000,
        });
        return;
      }

      openModal('loading');
      await mintToken({ id, amount });
    } catch (error) {
      console.error('Error:', error);
      setTransactionStatus('error');
    }
  };

  return {
    handleMint,
    isPending
  };
};

const MintButton = ({ onClick, isPending, className = "" }) => (
  <button
    onClick={onClick}
    disabled={isPending}
    className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg py-2.5 flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    <span>{isPending ? 'Minting...' : 'Mint Now'}</span>
  </button>
);


const GlobalModalState = {
  isModalOpen: false,
  transactionStatus: null,
  openModal: (status) => {},
  closeModal: () => {},
  setTransactionStatus: (status) => {}
};

export const GlobalModalContext = React.createContext(GlobalModalState);

export const useGlobalModalState = () => React.useContext(GlobalModalContext);

export const GlobalModalProvider = ({ children }) => {
  const modalState = useModalState();

  return (
    <GlobalModalContext.Provider value={modalState}>
      {children}
      <TransactionModal
        isOpen={modalState.isModalOpen}
        status={modalState.transactionStatus}
        onClose={modalState.closeModal}
      />
    </GlobalModalContext.Provider>
  );
};

const MintTransactionHandler = ({ id, amount, children }) => {
  const { handleMint, isPending } = useMintTransaction({ id, amount });

  return children({ handleMint, isPending });
};

export { MintTransactionHandler, MintButton, useMintTransaction };