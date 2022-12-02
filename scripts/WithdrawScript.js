const hre = require("hardhat")
const { exit } = require("process");

const { abi: ABI } = require("../src/artifacts/contracts/BuyMeTacos.sol/BuyMeTacos.json");
const data = require("../src/BuyMeTacos.json")


const contractAddress = data.hardhat.contractAddress
const networkName = hre.network.name
const chainID = hre.network.config.chainId
let signer, provider, BuyMeTacos


const getBalance = async (provider, address) => {
  const balanceBigInt = await provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}



const main = async () => {

  
  if (networkName === "mainnet") {
    // connnecting to provider node, creating signer based on private key, then connectiong signer to the contract
    console.log(`Withdrawing from [${networkName}:${chainID}] from Contract Address: ${contractAddress}`)
    provider = new hre.ethers.providers.InfuraProvider(networkName, process.env.MAINNET_INFURA_API_KEY)
    signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    BuyMeTacos = new hre.ethers.Contract(contractAddress, ABI, signer)

  } else if (networkName === "goerli") {

    // connnecting to provider node, creating signer based on private key, then connectiong signer to the contract
    console.log(`Withdrawing from [${networkName}:${chainID}] from Contract Address: ${contractAddress}`)
    provider = new hre.ethers.providers.InfuraProvider(networkName, process.env.GOERLI_INFURA_API_KEY)
    signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    BuyMeTacos = new hre.ethers.Contract(contractAddress, ABI, signer)

  } else {
    console.log("Can not withdraw funds from Development Network!")
    exit()
  }





  // checking balance of owner and contract
  console.log("Starting Balance Of Owner:\t", await getBalance(provider, signer.address), "ETH");
  console.log("Starting Balance Of Contract:\t", await getBalance(provider, BuyMeTacos.address), "ETH")




  // withdraw funds if there are funds to withdraw
  if (await getBalance(provider, BuyMeTacos.address) !== "0.0") {
    console.log("\n### Withdrawing Funds ###\n")
    const withdrawTxn = await BuyMeTacos.withdrawFunds();
    await withdrawTxn.wait();
  } else {
    console.log("\n### No Funds To Withdraw ###\n");
  }



  // check ending balance
  console.log("Current Balance Of Owner:\t", await getBalance(provider, signer.address), "ETH");
  console.log("Current Balance Of Contract:\t", await getBalance(provider, BuyMeTacos.address), "ETH")
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});