import { FC } from "react";

const features = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS for a modern development experience.",
    icon: "🚀",
  },
  {
    title: "Web3 Ready",
    description:
      "Integrated with Wagmi and Viem for seamless blockchain interactions.",
    icon: "🔗",
  },
  {
    title: "Smart Contracts",
    description:
      "Hardhat setup with TypeScript support and testing framework included.",
    icon: "📝",
  },
  {
    title: "Modular Architecture",
    description: "Organized as a monorepo with clear separation of concerns.",
    icon: "🏗️",
  },
  {
    title: "Type Safety",
    description:
      "Full TypeScript support across all packages for better development experience.",
    icon: "🔒",
  },
  {
    title: "Fast Development",
    description:
      "Hot reloading and efficient build system powered by Turborepo.",
    icon: "⚡",
  },
];

export const Features: FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Everything you need to build your{" "}
            <span className="gradient-text">dApp</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start building your next blockchain project with our comprehensive
            template
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group glass p-6 focus-ring hover-scale"
            >
              <div>
                <span className="text-4xl hover-scale inline-block">
                  {feature.icon}
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
