// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying Contract to Base Mainnet...");

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy(); // No constructor args

  // Wait for the deployment transaction to be mined and confirmed 5 times
  const deploymentTx = await hello.deploymentTransaction();
  console.log(`⏳ Waiting for 5 confirmations of deployment transaction: ${deploymentTx.hash}`);
  await deploymentTx.wait(5); // ⬅️ Ensures 5 confirmations

  const address = await hello.getAddress();

  console.log("✅ Contract deployed to:", address);

  console.log("\n📝 Verifying on BaseScan...");
  try {
    await hre.run("verify:verify", {
      address,
      constructorArguments: [],
    });
    console.log("🎉 Contract verified successfully!");
  } catch (error) {
    console.error("❌ Verification failed:", error.message || error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error deploying contract:", error);
    process.exit(1);
  });
