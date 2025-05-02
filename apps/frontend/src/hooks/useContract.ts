import { useReadContract, useWriteContract } from "wagmi";
import { ContractName, CONTRACT_ADDRESSES } from "../config/contracts";

export function useContract(contractName: ContractName) {
  const address = CONTRACT_ADDRESSES.localhost[contractName];

  return {
    read: useReadContract,
    write: useWriteContract,
    address,
  };
}
