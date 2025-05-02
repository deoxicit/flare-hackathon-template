"use client";

import { Button } from "@/components/ui/button";
import { TokenBalance } from "../components/TokenBalance";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold">Hackathon Template</h1>
          <ConnectButton />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Build Your Next <span className="text-blue-500">Web3</span>{" "}
              Project
            </h2>
            <p className="text-xl text-gray-300">
              A modern full-stack dApp template for hackathons. Get started
              quickly with our pre-configured setup.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <TokenBalance />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Built with Next.js</h3>
            <p className="text-gray-300">
              Modern React framework for building full-stack web applications.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
            <p className="text-gray-300">
              Pre-configured Hardhat setup with TypeScript and OpenZeppelin.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Web3 Integration</h3>
            <p className="text-gray-300">
              Seamless wallet connection with RainbowKit and Wagmi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
