// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MultiToken is ERC1155, ReentrancyGuard {

    mapping(uint256 => uint256) private tokenIds;
    mapping(uint256 => uint256) private totalSupply; 
    mapping(uint256 => uint256) private currentSupply; 
    
    constructor(string memory baseURI) ERC1155(baseURI) payable {
        tokenIds[11] = 1;
        tokenIds[22] = 2;
        tokenIds[33] = 3;
        tokenIds[44] = 4;
        totalSupply[1] = 1000000; 
        totalSupply[2] = 500000;  
        totalSupply[3] = 750000;  
        totalSupply[4] = 250000;  
    }

    event TokensMinted(address indexed to, uint256 tokenId, uint256 amount);
    event ExchangeCompleted(address indexed user, uint256 fungibleTokenId, uint256 fungibleAmount, uint256 nonFungibleTokenId);

    error InsufficientTokenBalance(uint256 requiredBalance);
    error InvalidTokenId(uint256 tokenId);
    error NotTokenOwner(address required, address current);
    error ExceedsTotalSupply(uint256 requested, uint256 total);

    function mint(uint256 id, uint256 amount, bytes memory data) external 
    {   
        require(id < 5, InvalidTokenId(id));
        require(currentSupply[id] + amount <= totalSupply[id], ExceedsTotalSupply(currentSupply[id] + amount, totalSupply[id]));

        _mint(msg.sender, id, amount, data);
        currentSupply[id] += amount; 
        emit TokensMinted(msg.sender, id, amount);
    }

    // Function to exchange fungible tokens for non-fungible tokens
    function exchangeFungibleForNonFungible(
        address from, 
        uint256 nonFungibleTokenId,
        uint256 price, 
        bytes memory data
    ) external nonReentrant {
        require(msg.sender == from, NotTokenOwner(msg.sender, from));

        uint256 fungibleTokenId = tokenIds[nonFungibleTokenId];
        require(fungibleTokenId != 0, InvalidTokenId(nonFungibleTokenId));
        require(balanceOf(from, fungibleTokenId) > (price - 1), InsufficientTokenBalance(price));

        _burn(from, fungibleTokenId, price);
        _mint(from, nonFungibleTokenId, 1, data);

        emit ExchangeCompleted(from, fungibleTokenId, price, nonFungibleTokenId);
    }

    // Function to get the total supply of a token ID
    function getTotalSupply(uint256 id) external view returns (uint256) {
        require(id < 5, InvalidTokenId(id));
        return totalSupply[id];
    }

    // Function to get the current supply of a token ID
    function getCurrentSupply(uint256 id) external view returns (uint256) {
        require(id < 5, InvalidTokenId(id));
        return currentSupply[id];
    }
}