
const {ethers} = require("ethers");
const contract = require("./contractAbi.json");

const provider = new ethers.JsonRpcProvider("https://polygon-amoy.infura.io/v3/");

async function mintNft() {
    const contractAddress = "0x64Ba43c539306AF3d3c425433623179BAfd6baEb";
    const privateKey = ""

    const signer = new ethers.Wallet(privateKey, provider);

    const nftXclusiveContract = new ethers.Contract(contractAddress, contract.abi, signer);


    const tx = nftXclusiveContract.safeMint("0x660Bb2888422519316be7fBb27B4EFEdED891734","ipfs://bafkreiddbm2f4nhcp4amiwnnmey2hoawwjbqhnsnpaekewbo5fzjky7igm");

    console.log("Transaction Hash:", await tx);




}

mintNft();