import {createInterface} from "readline";
import "../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json";
import {abi} from "../../contract/artifacts/contracts/MultiToken.sol/MultiToken.json";
import { handleContractErrors } from "./blockchain/contractErrors";
import {ethers} from "ethers";


const contractAddress = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
const privateKey = "";
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);
contract.connect(provider);

async function getPastEvents(userAddress: string, tokenId: number) {
    const mintEventFilter = contract.filters.TokensMinted();
    const fromBlock = 0; 
    const toBlock = 'latest'; 

    const events = await contract.queryFilter(mintEventFilter, fromBlock, toBlock);

    let hasMinited = false;

    events.forEach((event :any) => {
        const mintedAddress = event.args[0]; 
        const _tokenId = event.args[1];

        if (mintedAddress.toLowerCase() === userAddress.toLowerCase() && _tokenId === tokenId) {
            hasMinited = true; 
        }
    });

    return hasMinited;
}


async function mintNft() { 
    const toAddress = signer.address; 
    const tokenId = 11; 
    const amount = 100;
    const data = '0x'; 

    const res = await getPastEvents(toAddress,tokenId);
    
    if(res === false) {
        try{
        const tx = await contract.exchangeFungibleForNonFungible(toAddress,tokenId, amount, data, {gasLimit: 3000000});
        console.log("Transaction hash:", tx.hash);
        console.log("Miniting NFT ......")

        await tx.wait();
        console.log("Token minted successfully");

        const balance = await contract.balanceOf(toAddress, tokenId);
        console.log("Balance of tokenId:", balance.toString());
        } catch (err) {
            await handleContractErrors(err);
        }
    } else{
        console.log("You have already minited this NFT");
    }
}

async function mintFt() {
    const toAddress = signer.address; 
    const tokenId = 4; 
    const amount = 100;
    const data = '0x'; 

    const tx = await contract.mint(tokenId, amount, data, {gasLimit: 3000000});
    console.log("Transaction hash:", tx.hash);
    console.log("Miniting Token ......")

    await tx.wait();
    console.log("Token minted successfully");

     const balance = await contract.balanceOf(toAddress, tokenId);
     console.log("Balance of tokenId:", balance.toString());
}


async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    while (true) {
        console.log("Choose an option:");
        console.log("1. Mint FT");
        console.log("2. Mint NFT");
        console.log("3. Exit");

        const option = await new Promise<string>((resolve) => {
            rl.question('Enter your choice: ', (answer: string) => {
                resolve(answer);
            });
        });

        switch (option) {
            case '1':
                await mintFt();
                break;
            case '2':
                await mintNft();
                break;
            case '3':
                console.log("Exiting...");
                rl.close();
                return;
            default:
                console.log("Invalid option. Please choose 1, 2, or 3.");
        }
    }
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});