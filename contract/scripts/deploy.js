const { ethers } = require("hardhat");

async function main() {
    const multiTokenFactory = await ethers.getContractFactory("MultiToken");
    console.log("Deploying MultiToken...");
    const multiToken = await multiTokenFactory.deploy("https://ipfs.io/ipfs/bafybeidfqqmxi6a47exrqj6rrm36fdltzr2rcbnsfncca5knjvboummsqq/{id}.json");
    console.log("MultiToken deployed to:", multiToken.target);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
}  );