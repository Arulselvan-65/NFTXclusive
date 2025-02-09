import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    polygonAmoy
} from 'wagmi/chains';

const project_id = process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID;

export const config = getDefaultConfig({
    appName: 'NftXclusive',
    projectId: project_id,
    chains: [polygonAmoy],
    ssr: true,
});
