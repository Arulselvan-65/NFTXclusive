// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract XCLToken is ERC20 {

    address public nftxAddr;

    constructor(address initialOwner, address _nftxAddr)
    ERC20("XCLToken", "XCL")
    {
        _mint(initialOwner, 1000);
        nftxAddr = _nftxAddr;
    }

    event TokenMinted(address indexed to, uint256 amount);

    modifier OnlyNFTX() {
        require(msg.sender == nftxAddr, "Only NFTXclusive Contract can mint");
        _;
    }

    function mint(address to) public OnlyNFTX {
        _mint(to, 500);
        emit TokenMinted(to, 500);
    }

}