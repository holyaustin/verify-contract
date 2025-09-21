require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

if (!process.env.PRIVATE_KEY || !process.env.ETHERSCAN_API_KEY) {
  console.warn("⚠️  Missing PRIVATE_KEY or ETHERSCAN_API_KEY in .env");
}
//console.log("ETHERSCAN_API_KEY = ", process.env.ETHERSCAN_API_KEY);

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {
      chainId: 7000,
      allowUnlimitedContractSize: true,
    },

    // 🔹 Base Sepolia Testnet
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 84532,
    },

    // 🔹 Base Mainnet
    base: {
      url: "https://mainnet.base.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 8453,
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  verify: {
    blockscout: {
      enabled: false,
    },
  },


  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};