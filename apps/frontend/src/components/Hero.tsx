import { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Hero: FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 animate-gradient"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Welcome to <span className="gradient-text">dApp</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          Build your next decentralized application with our powerful and
          flexible template. Get started in minutes with our pre-configured
          setup.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <ConnectButton />
          <a
            href="/docs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus-ring hover-scale"
          >
            View Documentation
          </a>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
