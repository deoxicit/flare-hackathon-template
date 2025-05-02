"use client";

import { useEffect, useState } from "react";
import { useContract } from "../hooks/useContract";
import { useAccount } from "wagmi";
import { formatUnits } from "viem";
import { CONTRACT_ABIS } from "../config/contracts";

export function TokenBalance() {
  const { address, isConnecting } = useAccount();
  const { read, address: contractAddress } = useContract("HackathonToken");
  const [balance, setBalance] = useState<string>("0");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBalance() {
      if (!address || !contractAddress) {
        setIsLoading(false);
        return;
      }
      try {
        const { data } = await read({
          address: contractAddress,
          abi: CONTRACT_ABIS.HackathonToken,
          functionName: "balanceOf",
          args: [address],
        });
        if (data) {
          setBalance(formatUnits(data as bigint, 18));
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBalance();
  }, [read, address, contractAddress]);

  if (isConnecting || isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Your Token Balance
        </h2>
        <div className="h-8 w-32 bg-gray-700 rounded animate-pulse" />
      </div>
    );
  }

  if (!address) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Your Token Balance
        </h2>
        <p className="text-2xl font-bold text-gray-400">Connect your wallet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-300">
        Your Token Balance
      </h2>
      <p className="text-4xl font-bold text-white">
        {balance} <span className="text-blue-500">HTK</span>
      </p>
    </div>
  );
}
