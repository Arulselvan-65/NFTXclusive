// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MultiToken is ERC1155, ReentrancyGuard {

    mapping(uint256 => uint256) private tokenIds;
    
    constructor(string memory baseURI) ERC1155(baseURI) payable {
        tokenIds[11] = 1;
        tokenIds[22] = 2;
        tokenIds[33] = 3;
        tokenIds[44] = 4;
    }

    event TokensMinted(address indexed to, uint256 tokenId, uint256 amount);
    event ExchangeCompleted(address indexed user, uint256 fungibleTokenId, uint256 fungibleAmount, uint256 nonFungibleTokenId);

    error InsufficientTokenBalance(uint256 requiredBalance);
    error InvalidTokenId(uint256 tokenId);
    error NotTokenOwner(address required, address current);

    function mint(uint256 id, uint256 amount, bytes memory data) external 
    {   require(id < 5, InvalidTokenId(id));
        _mint(msg.sender, id, amount, data);
        emit TokensMinted(msg.sender, id, amount);
    }

    // Function to exchange fungible tokens for non-fungible tokensS
    function exchangeFungibleForNonFungible(
        address from, 
        uint256 nonFungibleTokenId,
        uint256 price, 
        bytes memory data
    ) external  nonReentrant{
        require(msg.sender == from, NotTokenOwner(msg.sender, from));

        uint256 fungibleTokenId = tokenIds[nonFungibleTokenId];
        require(fungibleTokenId != 0, InvalidTokenId(nonFungibleTokenId));
        require(balanceOf(from, fungibleTokenId) > (price-1), InsufficientTokenBalance(price));

        _burn(from, fungibleTokenId, price);
        _mint(from, nonFungibleTokenId, 1, data);

        emit ExchangeCompleted(from, fungibleTokenId, price, nonFungibleTokenId);
    }   
}