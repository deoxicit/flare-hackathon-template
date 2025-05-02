import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { defineChain } from "viem";

// Define Flare Networks
export const flareMainnet = defineChain({
  id: 14,
  name: "Flare Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flare",
    symbol: "FLR",
  },
  rpcUrls: {
    default: {
      http: ["https://flare-api.flare.network/ext/C/rpc"],
    },
    public: {
      http: ["https://flare-api.flare.network/ext/C/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://flarescan.com",
    },
  },
});

export const flareCoston2 = defineChain({
  id: 114,
  name: "Flare Coston2 Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Coston2 Flare",
    symbol: "C2FLR",
  },
  rpcUrls: {
    default: {
      http: ["https://coston2-api.flare.network/ext/C/rpc"],
    },
    public: {
      http: ["https://coston2-api.flare.network/ext/C/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2.testnet.flarescan.com",
    },
  },
  testnet: true,
});

export const config = createConfig({
  chains: [flareMainnet, flareCoston2],
  transports: {
    [flareMainnet.id]: http(),
    [flareCoston2.id]: http(),
  },
});
