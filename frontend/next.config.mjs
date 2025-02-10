/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bafybeigm4o2z67cphws4srdij4q3vsfl2hyt6kahtr7m3z2n2ingrhjbse.ipfs.dweb.link',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'bafybeia6o5ec4jfte2p5xvnpuia4wx4ax75ht6sum7t2ttercxppynn5we.ipfs.dweb.link',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'bafybeihrulkqwlfbumgrscev3kps2ia2r3pwpfkw4hjhmcdo5ouii4adaa.ipfs.dweb.link',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'bafybeiapgqtknu66kai5ixg7pfxv3o3de5lb6vnvye7wjvj67a6cfvsc4q.ipfs.dweb.link',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;