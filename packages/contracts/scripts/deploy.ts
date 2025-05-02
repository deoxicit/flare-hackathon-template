import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const HackathonToken = await ethers.getContractFactory("HackathonToken");
  const token = await HackathonToken.deploy();

  await token.waitForDeployment();

  console.log("HackathonToken deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
