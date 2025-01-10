// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import {XCLNft} from "./XCLNft.sol";
import {XCLToken} from "./XCLToken.sol";

contract NFTXclusive {

    XCLNft public nft;
    XCLToken public token;

    function mintErc20(address to) public {
        token.mint(to);
    }

    function mintNft(address to, string memory uri) public {
        require(token.balanceOf(msg.sender) >= 0, "Insufficient XCLToken balance to mint NFT");

        token.transferFrom(msg.sender, address(this), 0);
        nft.safeMint(to, uri);
    }


}
