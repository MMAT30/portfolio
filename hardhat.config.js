require("@nomicfoundation/hardhat-toolbox");

// loads env file
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: process.env.ETHER_SCAN,
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.GOERLI_INFURA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.MAINNET_INFURA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts"
  }
};
