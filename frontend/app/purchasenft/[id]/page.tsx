// app/purchasenft/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import NFTDetailsPage from '@/components/NFTDetailsPage'; // Adjust the import based on your file structure
import axios from 'axios';

const PurchaseNftPage = ({ params }) => {
  const { id } = params;
  const [nft, setNft] = useState(null);

  console.log(id);

  useEffect(() => {
    if (id) {
      axios.get(`https://bafybeicn7ztytun3vp4zptuocxj4g4twf4kmzxdq7dxufpumvjmox3eqim.ipfs.dweb.link/${id}.json`)
        .then((response) => {
          setNft(response.data);
          console.log("Fetched NFT data:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching NFT data:", error);
        });
    }
  }, [id]);

  if (!nft) {
    return <p>Loading...</p>; // Show a loading state while fetching the NFT
  }

  return <NFTDetailsPage nft={nft} />;
};

export default PurchaseNftPage;