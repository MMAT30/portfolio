const { ethers } = require("hardhat")
const { expect } = require("chai");


// helpers
const toEth = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether")
}



describe("BuyMeTacos", () => {

  // globals
  let BuyMeTacos, accounts, owner, donater


  beforeEach(async () => {
    // deploy token to chain with parameters
    const contract = await ethers.getContractFactory("BuyMeTacos")
    BuyMeTacos = await contract.deploy()

    // creating deployer and receiver accounts from hardhat
    accounts = await ethers.getSigners()
    owner = accounts[0]
    donater = accounts[1]
  })



  describe("Deployement", () => {

    it("owner address to be deployer", async () => {
      const ownerAddress = await BuyMeTacos.deployTransaction.from
      expect(ownerAddress).to.equal(owner.address)
    })

    it("memos to be empty", async () => {
      const contractMemos = await BuyMeTacos.getMemos()
      expect(contractMemos.length).to.equal(0)
    })
  })



  describe("Receive Donation", () => {

    let donation, transaction, result

    describe("Success", () => {
      it("allow donaters to buy taco", async () => {
        donation = toEth(1)
        transaction = await BuyMeTacos.connect(donater).buyTaco("donater", "Awesome!", { value: donation })
        result = await transaction.wait()
      })

      it("emits a NewMemo event", async () => {
        const event = result.events[0].event
        expect(event).to.equal("NewMemo")

        const args = result.events[0].args
        expect(args.from).to.equal(donater.address)
        expect(args.name).to.equal("donater")
        expect(args.message).to.equal("Awesome!")
      })
    })

    describe("Failure", () => {
      it("rejects insufficient balance", async () => {
        // transfer more tokens that exist - 100,000,000
        donation = toEth("0")
        await expect(BuyMeTacos.connect(donater).buyTaco("donater1", "Great!", { value: donation })).to.reverted
      })
    })
  })


  describe("Get Memos", () => {

    let donation, transaction, memos

    it("allows for memos to be retrieved", async () => {
      donation = toEth(1)
      transaction = await BuyMeTacos.connect(donater).buyTaco("donater", "Awesome!", { value: donation })
      await transaction.wait()
      
      memos = await BuyMeTacos.getMemos()
      expect(memos.length).to.equal(1)
      expect(memos[0].from).to.equal(donater.address)
      expect(memos[0].name).to.equal("donater")
      expect(memos[0].message).to.equal("Awesome!")
    })
  })

  describe("", () => { 
    describe('Success', () => {
      it("allows withdraw when owner", async () => {
        
      })
     })

     describe('Failure', () => { 
      it("rejects withdraw when not owner", async () => {

      })
      })
   })
});
