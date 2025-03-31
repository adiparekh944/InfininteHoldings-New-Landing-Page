import React from 'react';
import { BsCheckCircleFill as CheckIcon } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { FooterSection } from '../screens/Main/sections/FooterSection';
import "../index.css";

export const About = () => {
  const growthApproaches = [
    "Targeted Acquisition: We utilize precise digital marketing and direct outreach to engage venture capitalists and investors.",
    "Strategic Partnerships: Collaborating with key industry players to expand market reach and enhance platform value.",
    "Optimized User Experience: Continuous improvements in AI-driven insights and platform functionality ensure user retention.",
    "Scalable Expansion Model: A structured approach to subscriber growth and long-term adoption in the VC space."
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <img 
          src="/handshake-image.jpg" 
          alt="Business handshake" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300" style={{ fontFamily: 'Furore' }}>
              Transforming Venture Capital
            </h1>
            <p className="text-xl text-neutral-300 mb-8" style={{ fontFamily: 'Manolo' }}>
              Empowering investors with AI-driven insights and data-backed decision making
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-24">
        {/* Our Approach To Growth Section */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300" style={{ fontFamily: 'Furore' }}>
                Our Approach To Growth
              </h2>
              <div className="space-y-6">
                {growthApproaches.map((approach, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-800/50 transition-colors"
                  >
                    <CheckIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-neutral-300" style={{ fontFamily: 'Manolo' }}>{approach}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-neutral-400" style={{ fontFamily: 'Manolo' }}>
                Vecaid is built for investors seeking data-backed decision-making and risk mitigation. As we continue growing, our priority remains delivering cutting-edge investment intelligence with measurable impact. Discover how Vecaid is transforming venture capital today.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg" />
              <img 
                src="/handshake-image.jpg" 
                alt="Business handshake" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>  

        {/* Empowering Local Small Businesses Section */}
        <section className="bg-black py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300" style={{ fontFamily: 'Furore' }}>
                Empowering Local Small Businesses
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg" style={{ fontFamily: 'Manolo' }}>
                We strive to grow small businesses in the greater Lafayette area and beyond by providing the capital and strategic guidance they need to succeed. Our approach focuses on creating new job opportunities and driving local economic growth—positioning us as a partner, not an enterprise. By leveraging modern Machine Learning practices, we gather actionable insights that help micro and small businesses refine their marketing efforts and reduce residual risk.
              </p>
            </div>
          </div>
        </section>

        {/* Vecaid Section */}
        <section className="py-14 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-yellow-500 italic mb-4 text-lg" style={{ fontFamily: 'Manolo' }}>Invest Smarter, Reduce Risk, Maximize Potential</p>
              <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300" style={{ fontFamily: 'Furore' }}>
                Vecaid
              </h2>
              <div className="space-y-8 text-neutral-300 text-lg">
                <p style={{ fontFamily: 'Manolo' }}>
                  Vecaid is an AI-driven platform designed to revolutionize investing through personalized insights and real-time data. By combining advanced analytics with a user-friendly interface, Vecaid helps investors navigate global market trends, identify key risk factors, and optimize their portfolios.
                </p>
                <p style={{ fontFamily: 'Manolo' }}>
                  From the start, we forge strong industry connections, collaborating with financial leaders, founders, and capital providers. We continuously enhance our model's capabilities to accommodate new markets, industries, and user needs. Whether you're a first-time investor, a venture capitalist, or a seasoned fund manager, Vecaid stands at the forefront of machine learning – helping you make informed decisions in an ever-changing financial landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};