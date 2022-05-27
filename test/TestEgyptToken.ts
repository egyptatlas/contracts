import {expect} from "chai";
import {ethers} from "hardhat";

describe("TestEgyptToken", function () {
    it("Contract", async function () {
        const [owner] = await ethers.getSigners();
        const ownerAddr = await owner.getAddress();

        const egyptTokenFactory = await ethers.getContractFactory(
            "EgyptToken"
        );
        const egyptToken = await egyptTokenFactory.deploy();
        await egyptToken.deployed();

        expect(await egyptToken.name()).to.equal("Egypt Atlas");

        expect(await egyptToken.symbol()).to.equal("EVAS");

        await egyptToken.mint(
            ownerAddr,
            ethers.utils.parseEther("10000000000")
        );

        expect(await egyptToken.totalSupply()).to.equal(
            ethers.utils.parseEther("10000000000")
        );
    });
});
