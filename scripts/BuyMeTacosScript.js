const hre = require("hardhat")
const fs = require("fs")
const networkName = hre.network.name
const chainID = hre.network.config.chainId
const data = require("../src/BuyMeTacos.json")




const main = async () => {

  // deploping contract
  const contract = await hre.ethers.getContractFactory("BuyMeTacos")
  const BuyMeTacos = await contract.deploy()
  await BuyMeTacos.deployed()

  // output
  console.log(`[${networkName}:${chainID}]\tBuyMeTacos deployed to:\t${BuyMeTacos.address}\n`)



  // write to log file
  if (networkName === "hardhat") {
    try {
      data.hardhat.network = networkName
      data.hardhat.networkID = chainID
      data.hardhat.contractAddress = BuyMeTacos.address
      writeJSON(data)
    } catch (error) {
      console.log(error);
    }
  }
  else if (networkName === "mainnet") {
    try {
      data.mainnet.network = networkName
      data.mainnet.networkID = chainID
      data.mainnet.contractAddress = BuyMeTacos.address
      writeJSON(data)
    } catch (error) {
      console.log(error);
    }
  } else if (networkName === "goerli") {
    try {
      data.goerli.network = networkName
      data.goerli.networkID = chainID
      data.goerli.contractAddress = BuyMeTacos.address
      writeJSON(data)
    } catch (error) {
      console.log(error);
    }
  }

}



const writeJSON = (data) => {
  fs.writeFile("./src/BuyMeTacos.json", JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log(error)
    }
  })
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
