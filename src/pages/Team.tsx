import React from 'react';
import { FooterSection } from '../screens/Main/sections/FooterSection/FooterSection';
import "../index.css";

export const Team = () => {
  const teamMembers = [
    {
      name: "Adhi Balaji",
      title: "Founder, CEO",
      image: "/team/adhi-balaji.jpg", // Make sure to add this image to your public folder
      description: `Adithya Balaji is the Founder and CEO of Infinite Holdings Group LLC, a venture capital firm 
      specializing in AI-powered investment strategies and risk assessment. Under his leadership, the 
      firm is developing Vecaid, an innovative AI-driven platform designed to revolutionize pre-seed 
      and venture capital decision-making.`,
      extendedDescription: `With a background in economics, marketing, and strategic investment, Adithya blends financial 
      expertise with data-driven insights to create tailored investment solutions. His diverse 
      experience spans entrepreneurship, content creation, and digital marketing, having founded and 
      scaled businesses like Dalgona Whipped Coffee and successfully managed social media 
      campaigns generating over 50M+ impressions.`,
      vision: `His leadership is defined by a commitment to financial empowerment, SMB scalability, and AI-driven 
      wealth management, leveraging cutting-edge technology to drive smarter investment 
      decisions. Adithya's vision for Infinite Holdings and Vecaid is to provide investors with market-driven 
      insights, AI-enhanced risk analysis, and hyper-personalized wealth strategies.`,
      tagline: "🚀 Driving Innovation | AI-Powered Investment | Scalable Wealth Strategies",
      linkedIn: "https://www.linkedin.com/in/adithya-balaji/"
    },
    {
      name: "Aadi Awasthi",
      title: "COO",
      image: "/team/placeholder.jpg",
      description: "Aadi Awasthi is the Chief Operating Officer (COO) of Infinite Holdings Group LLC, overseeing strategic operations, business development, and organizational efficiency. As a key leader, he plays a vital role in scaling Vecaid, the firm's AI-powered venture capital risk assessment platform, ensuring seamless execution from product development to market expansion.",
      extendedDescription: "With a background in leadership, technology, and operational strategy, Aadi has successfully managed large-scale projects, including co-developing an iOS application to optimize IT infrastructure at a community center. His tenure as Vice President of HOSA refined his skills in event management, resource allocation, and team leadership, while his experience in customer engagement and digital strategy has strengthened his ability to drive growth and operational efficiency.",
      vision: "Aadi's expertise lies in process optimization, cross-functional leadership, and business scalability, making him instrumental in Infinite Holdings' mission to transform venture capital decision-making with AI-driven insights.",
      tagline: "🚀 Operational Strategy | Business Scalability | AI-Driven Innovation",
      linkedIn: "#"
    },
    {
      name: "Bryant Cochran",
      title: "CMO & Idea Generation Lead",
      image: "/team/placeholder.jpg",
      description: "Bryant Cochran serves as the Chief Marketing Officer (CMO) of Infinite Holdings Group LLC and Vecaid, leading brand strategy, growth initiatives, and market positioning for our cutting-edge AI-powered risk assessment platform. As Idea Generation Lead for Vecaid, he drives innovation, identifying key opportunities to enhance AI-driven investment insights.",
      extendedDescription: "Bryant Cochran serves as the Chief Marketing Officer (CMO) of Infinite Holdings Group LLC and Vecaid, leading brand strategy, growth initiatives, and market positioning for our cutting-edge AI-powered risk assessment platform. As Idea Generation Lead for Vecaid, he drives innovation, identifying key opportunities to enhance AI-driven investment insights.",
      vision: "His dedication to excellence is recognized through numerous academic and athletic honors, including IBVCA Academic All-State and a Top 100 national ranking in high school men's volleyball kills. With a strong foundation in business development and strategic leadership, [Name] is at the forefront of shaping Vecaid's market presence and long-term vision.",
      tagline: "�� Driving Innovation. Elevating Growth. Shaping the Future of AI in Venture Capital.",
      linkedIn: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Pattern */}
      <div className="relative bg-[url('/backgrounds/pattern-dark.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Furore' }}>
            MEET THE TEAM
          </h1>
          <div className="w-32 h-1 bg-yellow-600 mx-auto"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-32">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-12 py-8 relative">
              {/* Add subtle radial gradient behind each team member */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent)] pointer-events-none"></div>
              {/* Image Section */}
              <div className="w-full md:w-1/3">
                <div className="aspect-square overflow-hidden rounded-lg bg-yellow-600/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Furore' }}>{member.name}</h2>
                  <h3 className="text-xl text-yellow-600 mb-6" style={{ fontFamily: 'Manolo' }}>{member.title}</h3>
                </div>

                <div className="space-y-4 text-neutral-300">
                  <p style={{ fontFamily: 'Manolo' }}>{member.description}</p>
                  <p style={{ fontFamily: 'Manolo' }}>{member.extendedDescription}</p>
                  <p style={{ fontFamily: 'Manolo' }}>{member.vision}</p>
                </div>

                <div className="pt-4">
                  <p className="text-neutral-400" style={{ fontFamily: 'Manolo' }}>{member.tagline}</p>
                  <div className="mt-4">
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="inline-block bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-600 px-6 py-2 rounded-lg transition-colors"
                      style={{ fontFamily: 'Manolo' }}
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
};