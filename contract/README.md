
# NFTXclusive MultiToken Contract

This repository contains the implementation of a MultiToken contract based on the ERC1155 standard. The contract supports minting and exchanging both fungible and non-fungible tokens within a single contract.

## Brief Overview of the MultiToken Contract
The MultiToken contract is an implementation of the ERC1155 standard, which allows for the creation and management of both fungible and non-fungible tokens within a single contract. Key features include:

1. **Minting Tokens**: Users can mint fungible tokens by specifying the token ID and amount.
2. **Token Exchange**: Users can exchange a specified amount of fungible tokens for a non-fungible token, facilitating a trade mechanism within the contract.
3. **Events**: The contract emits events for minting and exchanging tokens, providing transparency and traceability of actions.
4. **Security**: The contract employs the `ReentrancyGuard` to protect against reentrancy attacks, ensuring that critical functions cannot be called multiple times in a single transaction.

This contract is designed to be flexible and secure, making it suitable for various applications in the decentralized finance (DeFi) and non-fungible token (NFT) spaces.


## Instructions to Clone and Test the MultiToken Contract

### 1. Cloning the Repository
1. Open your terminal.
2. Clone the repository:
   ```bash
   git clone https://github.com/Arulselvan-65/NFTXclusive.git
   ```
3. Navigate into the cloned directory:
   ```bash
   cd contract
   ```

### 2. Installing Dependencies
Install the required dependencies:
```bash
npm install
```

### 3. Compiling the Contract
Compile the contract:
```bash
npx hardhat compile
```

### 4. Create an Account and Get an API Key
To deploy and interact with the contract on the Polygon Amoy testnet, you’ll need an API key from a provider like Infura or Alchemy:

1. Visit the [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/) website.
2. Sign up for an account.
3. Create a new project in the dashboard to obtain your API key.

### 5. Configure `hardhat.config.js` for Polygon Amoy
Open your `hardhat.config.js` file and ensure it includes the following configuration for the Polygon Amoy testnet:

```javascript
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    polygon_amoy: {
      url: "https://polygon-amoy.infura.io/v3/{API_KEY}", // Replace {API_KEY} with your actual Infura API key
      accounts: ['PRIVATE_KEY'] // Replace 'PRIVATE_KEY' with your wallet's private key
    }
  }
};
```

- Replace `{API_KEY}` with your actual API key from Infura or Alchemy.
- Replace `PRIVATE_KEY` with your wallet’s private key. **Ensure you keep your private key secure and do not share it publicly.**


### 6. Deploying the Contract
Deploy the contract to the Polygon Amoy testnet:
1. Ensure you have some testnet MATIC for gas. You can get it from a Polygon Amoy faucet.
2. Run the following command:
   ```bash
   npx hardhat run scripts/deploy.js --network polygon_amoy
   ```

### 7. Testing the Contract
Run the tests:
```bash
npx hardhat test --network polygon_amoy
```


---

**Happy coding!**