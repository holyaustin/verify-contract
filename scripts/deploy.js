const hre = require("hardhat");

async function main() {
  console.log("Deploying Contract to Base Mainnet...");

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld"); 
  const hello = await HelloWorld.deploy(); // No constructor args

  await hello.waitForDeployment();
  const address = await hello.getAddress();

  console.log("✅ Contract deployed to:", address);

  console.log("\n📝 To verify on BaseScan:");
  console.log(`npx hardhat verify --network base ${address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error deploying contract:", error);
    process.exit(1);
  });



