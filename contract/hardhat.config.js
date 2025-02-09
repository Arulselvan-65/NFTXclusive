require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    
    polygon_amoy: {
      url: "https://polygon-amoy.infura.io/v3/{}",
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};
