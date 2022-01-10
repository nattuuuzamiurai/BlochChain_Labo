const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contrat', () => {
    let Token, token, owner, address1, address2;

    beforeEach(async () => {
        Token = await ethers.getContractFactory('BlockChain');
        token = await Token.deploy();
        [owner, address1, address2, _] = await ethers.getSigners();
    });


    describe('Deployment', () => {
        it('name', async () => {
            expect(await token.name()).to.equal('natou');
        })
        it('should set the right owner', async () => {
            expect(await token.owner()).to.equal(owner.address);
        });

        it('shoud assign the total supply of tokens to the owner', async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe('Transactions', () => {
        it('should transfer tokens between accounts', async () => {
            await token.transfer(address1.address, 50);
            const address1Balance = await token.balanceOf(address1.address);
            expect(address1.address).to.equal(50);

            await token.connect(address1).transfer(address2.address, 50);
            const address2Balance = await token.balanceOf(address2.address);
            expect(address2.address).to.equal(50);
        });

        it('should fail if sender doesnt have enought tokens', async () => {
            const initiaBalanceOwner = await token.balanceOf(owner.address);

            await expect(token.connect(address1).transfer(owner.address, 1)).to.be.reverted;

            expect(await token.balanceOf(owner.address)).to.equal(initiaBalanceOwner);
        });

        it('should update balance after transfer', async () => {
        const initiaOwnerBalance = await token.balanceOf(owner.address);

        await token.transfer(address1.address, 50);
        await token.transfer(address2.address, 50);

        const finalOwnerBalanse = await token.balanceOf(owner.address);
        expect(finalOwnerBalanse).to.equal(initiaOwnerBalance - 100);

        const address1Balance = await token.balanceOf(address1.address);
        expect(address1Balance).to.equal(50);

        const address2Balance = await token.balanceOf(address2.address);
        expect(address2Balance).to.equal(50);


        });
    });
});
