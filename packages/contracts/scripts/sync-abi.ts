import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

async function main() {
  try {
    // Get all contract files
    const contractFiles = glob.sync("contracts/**/*.sol");

    // Create the abi directory if it doesn't exist
    const abiDir = path.join(__dirname, "../../apps/frontend/src/contracts");
    if (!fs.existsSync(abiDir)) {
      fs.mkdirSync(abiDir, { recursive: true });
    }

    // Process each contract
    for (const contractFile of contractFiles) {
      // Get contract name from file path
      const contractName = path.basename(contractFile, ".sol");

      try {
        // Get the contract factory
        const Contract = await ethers.getContractFactory(contractName);
        const abi = Contract.interface.formatJson();

        // Write the ABI to a file
        const abiPath = path.join(abiDir, `${contractName}.json`);
        fs.writeFileSync(abiPath, JSON.stringify({ abi }, null, 2));

        console.log(`✅ ABI synced for ${contractName} to ${abiPath}`);
      } catch (error: any) {
        console.warn(
          `⚠️ Skipping ${contractName}: ${error.message || "Unknown error"}`,
        );
      }
    }

    console.log("\n✨ ABI sync completed!");
  } catch (error: any) {
    console.error("❌ Error syncing ABIs:", error.message || "Unknown error");
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: any) => {
    console.error(error.message || "Unknown error");
    process.exit(1);
  });
