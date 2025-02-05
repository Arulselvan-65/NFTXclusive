import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    polygonAmoy
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'NftXclusive',
    projectId: '11e0fa8fea92c93f48493a5cdfffec59',
    chains: [polygonAmoy],
    ssr: true,
});
