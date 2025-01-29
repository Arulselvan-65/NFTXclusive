import type { NextPage } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

const LandingPage: NextPage = () => {
  return (
      <div className="overflow-hidden">
          <div className="neon-circle circle-1">
          </div>
          <div className="neon-circle circle-2">
          </div>
          <div className="neon-circle circle-3">
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16 relative z-10">
              <div className="text-center mb-8 mt-10 md:mt-0">
                  <h2 className="text-5xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">
                    NFTXclusive
                  </h2>
              </div>
              <div className="text-center mt-8 md:mt-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                  Transform Your Token Strategy
                  </h1>
                  <p className="text-gray-400 mb-6 text-sm md:text-lg">
                  Transform fungible tokens into unique NFTs seamlessly and unlock new possibilities in digital ownership!
                  </p>
                  <Link href={"/discover"}>
                      <button
                          className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
                          Get Started
                          <i className="fas fa-arrow-right ml-2">
                          </i>
                      </button>
                  </Link>
              </div>

              <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl text-white">
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-globe text-3xl mb-4 text-purple-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                      Token Innovation
                      </h2>
                      <p className="text-gray-400">
                      Exchange specific fungible tokens for unique NFTs, enriching your ecosystem.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-plane text-3xl mb-4 text-indigo-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                      Smooth Transition 
                      </h2>
                      <p className="text-gray-400">
                      Seamlessly convert fungible to non-fungible tokens with minimal setup.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-arrows-alt text-3xl mb-4 text-green-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                      Scalable Exchanges
                      </h2>
                      <p className="text-gray-400">
                      Our platform scales with your community for efficient token exchanges.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-tools text-3xl mb-4 text-red-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                          Focus on Content
                      </h2>
                      <p className="text-gray-400">
                          Zero maintenance. Spend your time creating, while we handle the infrastructure for you.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default LandingPage;