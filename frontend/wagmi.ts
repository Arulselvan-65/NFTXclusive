import { http } from "wagmi";
import { hardhat } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID,
    chains: [hardhat],
    transports: {
      [hardhat.id]: http("http://127.0.0.1:8545"),
    },
    ssr: false, 
  });

export default config;