// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MultiToken is ERC1155, ReentrancyGuard {
    
    constructor(string memory baseURI) ERC1155(baseURI) payable {}

    event TokensMinted(address indexed to, uint256 tokenId, uint256 amount);
    event ExchangeCompleted(address indexed user, uint256 fungibleTokenId, uint256 fungibleAmount, uint256 nonFungibleTokenId);

    error NotTokenOwner(address caller, address requiredOwner);
    error InsufficientTokenBalance(uint256 requiredBalance);

    function mint(uint256 id, uint256 amount, bytes memory data) external {
        _mint(msg.sender, id, amount, data);
        emit TokensMinted(msg.sender, id, amount);
    }

    // Function to exchange fungible tokens for non-fungible tokens
    function exchangeFungibleForNonFungible(
        address from, 
        uint256 fungibleTokenId, 
        uint256 fungibleAmount, 
        uint256 nonFungibleTokenId,
        bytes memory data
    ) external  nonReentrant{
        require(msg.sender == from, NotTokenOwner(msg.sender, from));
        require(balanceOf(from, fungibleTokenId) > fungibleAmount-1, InsufficientTokenBalance(fungibleAmount));
        _burn(from, fungibleTokenId, fungibleAmount);
        _mint(from, nonFungibleTokenId, 1, data);
        emit ExchangeCompleted(from, fungibleTokenId, fungibleAmount, nonFungibleTokenId);
    }   
}