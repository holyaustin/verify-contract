# verify-contract

How to verify smart contracts using **Etherscan V2 API**

---

## Overview

This repository provides a sample project using **Hardhat** + **Etherscan V2 API** to deploy and verify smart contracts on Etherscan. It includes scripts and configuration needed to automatically submit your contract's source code, compiler settings, etc., for verification.

---

## Features

- Sample Solidity contracts under `contracts/`
- Deployment scripts
- Verification script using Etherscan V2 API
- Configuration for networks / Etherscan API key
- Contract address tracking (`contract-addresses.txt`)

---

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn or pnpm
- Hardhat
- An Etherscan API key
- Network(s) configured in Hardhat to target (e.g. Ethereum mainnet, testnets, or others)

---

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/holyaustin/verify-contract.git
   cd verify-contract
Install dependencies:

```sh
Copy code
npm install
# or
yarn
Create .env file from .env copy and fill in the required variables:

```text
Copy code
ETHERSCAN_API_KEY=your_etherscan_api_key
# other network keys or RPC endpoints if needed
Configure hardhat.config.js to include the networks you plan to deploy & verify to.

# Usage
Deploy
```sh
Copy code
npx hardhat run scripts/deploy.js --network <your_network>
This will deploy your contract and record the address into contract-addresses.txt.

Verify
```sh
Copy code
npx hardhat run scripts/verify.js --network <your_network> --contract <ContractName> --address <contract_address>
Alternatively, you can configure your verification script to read from the contract-addresses.txt and automatically pick up the addresses.

### Etherscan V2 API
Etherscan V2 API

This project uses Etherscan V2 API for verification, which allows submitting:

contract source code

compiler version

optimizer settings

license type

constructor arguments (if any)

Make sure your Hardhat build output matches exactly what you submit for verification (contract name, solidity version, etc.)

Troubleshooting

API rate limits: The Etherscan API has limits. If you get rate-limited, you may need to wait or upgrade your plan.

Mismatched compiler settings: If verification fails, double-check that the compiler version/optimizer settings in your Hardhat config are exactly what you used in the contract.

Flattened contracts or imports: If you have multiple files or imports, ensure the source file structure matches what Etherscan expects (or use a standard flattening process).

Constructor args: If your contract constructor takes arguments, you’ll need to pass them (in ABI/encoded form) during verification.

Contributing

Feel free to open issues or pull requests. Some ideas:

Add examples for different networks (Polygon, BSC, etc.)

Support more Etherscan-like block explorers

Better error handling / retries