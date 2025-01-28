
const {ethers} = require("ethers");
const contract = require("./contractAbi.json");

const provider = new ethers.JsonRpcProvider("https://polygon-amoy.infura.io/v3/82f598bc010f4885a34e038de3ea0248");

async function mintNft() {
    const contractAddress = "0xb70f613516F9cBf1db316E70c651f263ebD8735D";
    const privateKey = "9870df999eaff92099bdebe4d38789f1f1f1b4042f692e6a1dab9172a33d03b8"

    const signer = new ethers.Wallet(privateKey, provider);

    const multiToken = new ethers.Contract(contractAddress, contract.abi, signer);


    const toAddress = signer.address; // or any valid Ethereum address
    const tokenId = 44; // or any valid token ID you want to mint
    const amount = 1; // amount to mint
    const data = '0x'; // empty bytes array, or use ethers.utils.toUtf8Bytes("") if you need to pass some data

    // Call the mint function with increased gas limit
    const tx = await multiToken.mint(toAddress, tokenId, amount, data, { gasLimit: 200000 });
    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Token minted successfully");

}

mintNft();