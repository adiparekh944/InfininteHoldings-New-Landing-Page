import React from 'react';
import { VecaidCountdown } from '../screens/Main/sections/VecaidCountdown/VecaidCountdown';
import { FooterSection } from '../screens/Main/sections/FooterSection/FooterSection';
import "../index.css";
export const Vecaid = () => {
  const features = [
    {
      title: "Detail your services",
      description: "Vecaid provides AI-powered risk assessment and market insights for venture capital and early-stage investors. Our platform analyzes market trends, startup viability, and investment risks to help investors make smarter, data-driven decisions.",
      icon: "📊"
    },
    {
      title: "Announce coming events",
      description: "Stay updated on exclusive investor briefings, product updates, and AI-powered investment insights. Join our upcoming webinars and live demonstrations to see Vecaid in action.",
      icon: "📅"
    },
    {
      title: "Display real testimonials",
      description: "Vecaid is transforming how investors assess early-stage opportunities. Hear from venture capitalists, angel investors, and fund managers who have leveraged Vecaid to enhance their decision-making.",
      icon: "💬"
    },
    {
      title: "Promote current deals",
      description: "Take advantage of limited-time subscription offers for early adopters. Sign up now and get exclusive access to premium features designed to enhance your investment strategy.",
      icon: "🏷️"
    },
    {
      title: "Share the big news",
      description: "We are constantly improving Vecaid to deliver next-generation investment intelligence. Stay informed about new feature launches, strategic partnerships, and industry insights.",
      icon: "📰"
    },
    {
      title: "Display their FAQs",
      description: "Have questions? We have answers. Learn more about Vecaid's AI-driven investment analysis, pricing, and platform capabilities through our frequently asked questions section.",
      icon: "❓"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Countdown Section */}
      <VecaidCountdown />

      {/* Features Section */}
      <div className="container mx-auto px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300" style={{ fontFamily: 'Furore' }}>
            Vecaid - Patent Pending
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-yellow-600/50 transition-all duration-500 shadow-[0_4px_20px_rgba(234,179,8,0.15)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.3)] hover:transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-yellow-600/10 flex items-center justify-center group-hover:bg-yellow-600/20 transition-colors text-3xl" style={{ fontFamily: 'Manolo' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Manolo' }}>
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed" style={{ fontFamily: 'Manolo' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};