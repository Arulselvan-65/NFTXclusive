import { http } from "wagmi";
import { hardhat } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID,
    chains: [hardhat],
    transports: {
      [hardhat.id]: http("https://orange-barnacle-g9rvjr9rvpxf95pv-8545.app.github.dev/"),
    },
    ssr: false, 
  });

export default config;
