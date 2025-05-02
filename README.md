# Ethereum Hackathon Template

A comprehensive template for Ethereum-based hackathons, featuring a modular monorepo structure with frontend, backend, and smart contracts. Built with modern tools and best practices for rapid Web3 development.

## Features

- 🚀 **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- 🔗 **Web3 Integration**: Wagmi v2, Viem, RainbowKit
- 📦 **Monorepo**: Turborepo for efficient development
- 🏗️ **Modular Architecture**: Separate packages for frontend, backend, and contracts
- 🔒 **Type Safety**: Full TypeScript support across all packages
- 🎨 **Beautiful UI**: Modern dark theme with responsive design
- 🔄 **Smart Contract Integration**: Seamless contract interaction with type safety
- 📱 **Mobile First**: Fully responsive design for all devices

## Project Structure

```
hackathon-template/
├── apps/
│   ├── frontend/                 # Next.js 14 frontend application
│   │   ├── src/
│   │   │   ├── app/             # Next.js app router
│   │   │   │   ├── layout.tsx   # Root layout with providers
│   │   │   │   ├── page.tsx     # Landing page
│   │   │   │   └── metadata.ts  # SEO metadata
│   │   │   ├── components/      # React components
│   │   │   │   └── TokenBalance.tsx
│   │   │   ├── config/          # Configuration files
│   │   │   │   ├── contracts.ts # Contract addresses and ABIs
│   │   │   │   └── wagmi.ts     # Wagmi configuration
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   │   └── useContract.ts
│   │   │   └── contracts/       # Contract artifacts
│   │   └── public/              # Static assets
│   └── backend/                 # Express.js API (optional)
├── packages/
│   ├── contracts/               # Hardhat smart contracts
│   │   ├── contracts/          # Solidity contracts
│   │   ├── scripts/            # Deployment scripts
│   │   ├── test/               # Contract tests
│   │   └── hardhat.config.ts   # Hardhat configuration
│   ├── ui/                     # Shared UI components
│   └── utils/                  # Shared utilities
└── package.json                # Root package.json
```

## Tech Stack

### Frontend

- **Framework**: Next.js 14 with App Router
- **State Management**: React Query
- **Web3**: Wagmi v2, Viem, RainbowKit
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Type Safety**: TypeScript

### Smart Contracts

- **Framework**: Hardhat
- **Language**: Solidity
- **Testing**: Hardhat Testing Framework
- **Libraries**: OpenZeppelin Contracts
- **Type Generation**: TypeChain

### Development Tools

- **Package Manager**: pnpm
- **Monorepo**: Turborepo
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky
- **Commit Linting**: commitlint

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hackathon-template
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create the following files:

   - `apps/frontend/.env.local`:
     ```
     NEXT_PUBLIC_CHAIN_ID=11155111  # Sepolia testnet
     ```
   - `packages/contracts/.env`:
     ```
     PRIVATE_KEY=your_private_key
     SEPOLIA_RPC_URL=your_sepolia_rpc_url
     ```

4. **Start development servers**

   ```bash
   # Start all services
   pnpm dev

   # Or start specific services
   pnpm dev --filter frontend
   pnpm dev --filter contracts
   ```

## Available Scripts

### Root

- `pnpm dev` - Start all services in development mode
- `pnpm build` - Build all packages
- `pnpm test` - Run tests across all packages
- `pnpm lint` - Run linting across all packages
- `pnpm format` - Format all files with Prettier

### Frontend

- `pnpm dev --filter frontend` - Start frontend development server
- `pnpm build --filter frontend` - Build frontend for production
- `pnpm lint --filter frontend` - Run frontend linting

### Contracts

- `pnpm dev --filter contracts` - Start contract development
- `pnpm test --filter contracts` - Run contract tests
- `pnpm deploy --filter contracts` - Deploy contracts

## Development Workflow

1. **Smart Contract Development**

   - Write and test contracts in `packages/contracts`
   - Deploy contracts to testnet
   - Update contract addresses in frontend config

2. **Frontend Development**

   - Develop UI components in `apps/frontend/src/components`
   - Integrate with contracts using Wagmi hooks
   - Test wallet connection and contract interactions

3. **Testing**
   - Run contract tests: `pnpm test --filter contracts`
   - Run frontend tests: `pnpm test --filter frontend`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT
