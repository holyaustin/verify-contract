# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

Deploying OmniLend to ZetaChain Testnet...
✅ OmniLend deployed to: 0x589C1494089889C077d7AbBA17B40575E961cC8c



Deploying OmniLend to Base mainnet...
✅ OmniLend deployed to: 0x08f3fe12B7c79D9e618BD41212b1246d7141B47B
Successfully submitted source code for contract
contracts/OmniLend.sol:OmniLend at 0x08f3fe12B7c79D9e618BD41212b1246d7141B47B
for verification on the block explorer. Waiting for verification result...

Successfully verified contract OmniLend on the block explorer.
https://basescan.org/address/0x08f3fe12B7c79D9e618BD41212b1246d7141B47B#code

Successfully verified contract OmniLend on Sourcify.
https://repo.sourcify.dev/contracts/full_match/8453/0x08f3fe12B7c79D9e618BD41212b1246d7141B47B/



Deploying ConnectedContract to base...
✅ ConnectedContract deployed to base: 0x706fe559D3Cabb4213F39Afa7e67B740B09F5084

📝 To verify on Base Explorer:
npx hardhat verify --network base 0x706fe559D3Cabb4213F39Afa7e67B740B09F5084
Successfully submitted source code for contract
contracts/ConnectedContract.sol:ConnectedContract at 0x706fe559D3Cabb4213F39Afa7e67B740B09F5084
for verification on the block explorer. Waiting for verification result...

Successfully verified contract ConnectedContract on the block explorer.
https://basescan.org/address/0x706fe559D3Cabb4213F39Afa7e67B740B09F5084#code

The contract 0x706fe559D3Cabb4213F39Afa7e67B740B09F5084 has already been verified on Sourcify.
https://repo.sourcify.dev/contracts/full_match/8453/0x706fe559D3Cabb4213F39Afa7e67B740B09F5084/

Verification successful