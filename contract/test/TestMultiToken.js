const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiToken", function () {
  let multiToken;
  let addr1;
  let addr2;

  // Setup function to deploy the MultiToken contract before each test
  beforeEach(async function () {
    [_, addr1, addr2, ...addrs] = await ethers.getSigners();
    const MultiToken = await ethers.getContractFactory("MultiToken");
    multiToken = await MultiToken.deploy("https://example.com/token/{id}.json");
  });

  describe("Deployment", function () {
    it("Should deploy with the correct base URI", async function () {
      expect(await multiToken.uri(1)).to.equal("https://example.com/token/{id}.json");
    });
  });

  describe("Minting", function () {
    it("Should mint tokens to an address", async function () {
      await multiToken.connect(addr1).mint(1, 100, "0x");
      const balance = await multiToken.balanceOf(addr1.address, 1);
      expect(balance).to.equal(100);
    });

    it("Should emit TokensMinted event when minting", async function () {
      await expect(multiToken.connect(addr1).mint(2, 500, "0x"))
        .to.emit(multiToken, "TokensMinted")
        .withArgs(addr1.address, 2, 500);
    });

    // Performance check: Gas cost for minting
    it("Should check gas cost for minting", async function () {
      const tx = await multiToken.connect(addr1).mint(1, 100, "0x");
      const receipt = await tx.wait();
      console.log("Gas used for minting 100 tokens:", receipt.gasUsed.toString());
    });
  });

  describe("Exchange", function () {
    beforeEach(async function () {
      // Mint some tokens to addr1 for testing exchange
      await multiToken.connect(addr1).mint(1, 1000, "0x");
    });

    it("Should exchange fungible tokens for non-fungible tokens", async function () {
      await multiToken.connect(addr1).exchangeFungibleForNonFungible(addr1, 1, 1000, 11, "0x");

      const fungibleBalance = await multiToken.balanceOf(addr1, 1);
      const nonFungibleBalance = await multiToken.balanceOf(addr1, 11);

      expect(fungibleBalance).to.equal(0);
      expect(nonFungibleBalance).to.equal(1);
    });

    it("Should emit ExchangeCompleted event when exchanging", async function () {
      await expect(multiToken.connect(addr1).exchangeFungibleForNonFungible(addr1, 1, 1000, 11, "0x"))
        .to.emit(multiToken, "ExchangeCompleted")
        .withArgs(addr1, 1, 1000, 11);
    });

    it("Should revert if not the token owner", async function () {
      await expect(multiToken.exchangeFungibleForNonFungible(addr1, 1, 1000, 11, "0x"))
        .to.be.revertedWithCustomError(multiToken, "NotTokenOwner")
        .withArgs(_, addr1);
    });

    it("Should revert if insufficient balance", async function () {
      await expect(multiToken.connect(addr1).exchangeFungibleForNonFungible(addr1, 1, 1001, 11, "0x"))
        .to.be.revertedWithCustomError(multiToken, "InsufficientTokenBalance")
        .withArgs(1001);
    });

    // Performance check: Gas cost for exchange
    it("Should check gas cost for exchange", async function () {
      await multiToken.connect(addr1).setApprovalForAll(multiToken, true);
      const tx = await multiToken.connect(addr1).exchangeFungibleForNonFungible(addr1, 1, 1000, 11, "0x");
      const receipt = await tx.wait();
      console.log("Gas used for exchange:", receipt.gasUsed.toString());
    });
  });

});
