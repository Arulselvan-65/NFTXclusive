import type { NextPage } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

const LandingPage: NextPage = () => {
  return (
    <div className="overflow-hidden bg-black relative min-h-screen">
      <div className="neon-circle circle-1 fixed top-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full 
        bg-purple-500/20 animate-pulse filter blur-xl"></div>
      <div className="neon-circle circle-2 fixed bottom-[-150px] right-[-150px] w-[300px] h-[300px] rounded-full 
        bg-indigo-500/20 animate-pulse filter blur-xl"></div>
      <div className="neon-circle circle-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[400px] h-[400px] rounded-full bg-blue-500/10 animate-pulse filter blur-xl"></div>

      <div className="flex flex-col items-center justify-start min-h-screen px-4 md:px-8 lg:px-16 relative z-10 py-8 md:py-0">
        <div className="text-center mb-4 md:mb-8 mt-4 md:mt-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-500 to-indigo-500 px-2">
            NFTXclusive
          </h2>
        </div>

        <div className="text-center mt-4 md:mt-12 px-2">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight text-white">
            Transform Your Token Strategy
          </h1>
          <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto px-2">
            Transform fungible tokens into unique NFTs seamlessly and unlock new possibilities in digital ownership!
          </p>
          <Link href="/discover">
            <button className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 md:px-8 py-3 
              rounded-full font-semibold shadow-xl hover:shadow-purple-500/20 
              transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
              Get Started
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Link>
        </div>

        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-2">
          {[
            {
              icon: "fa-globe",
              color: "text-purple-500",
              title: "Token Innovation",
              desc: "Exchange specific fungible tokens for unique NFTs, enriching your ecosystem."
            },
            {
              icon: "fa-plane",
              color: "text-indigo-500",
              title: "Smooth Transition",
              desc: "Seamlessly convert fungible to non-fungible tokens with minimal setup."
            },
            {
              icon: "fa-arrows-alt",
              color: "text-green-500",
              title: "Scalable Exchanges",
              desc: "Our platform scales with your community for efficient token exchanges."
            },
            {
              icon: "fa-tools",
              color: "text-red-500",
              title: "Focus on Content",
              desc: "Zero maintenance. Spend your time creating, while we handle the infrastructure."
            }
          ].map((feature, index) => (
            <div key={index} 
              className="bg-gray-800/80 backdrop-blur p-4 md:p-6 rounded-xl text-center transform hover:scale-105 
                transition-all duration-300 shadow-lg hover:shadow-purple-500/20 border border-gray-700/50">
              <i className={`fas ${feature.icon} text-2xl md:text-3xl mb-3 md:mb-4 ${feature.color}`}></i>
              <h2 className="font-semibold mb-2 text-lg md:text-xl text-white">{feature.title}</h2>
              <p className="text-gray-300 text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;