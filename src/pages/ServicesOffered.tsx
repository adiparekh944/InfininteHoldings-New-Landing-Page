import React from 'react';
import { FooterSection } from '../screens/Main/sections/FooterSection/FooterSection';
import { Link } from 'react-router-dom';
import "../index.css";
export const ServicesOffered = () => {
  const services = [
    {
      title: "Expert Marketing Planning",
      image: "/services/marketing.jpg",
      description: "Strategic marketing solutions tailored for startups and small businesses, leveraging our expertise in digital marketing and social media management."
    },
    {
      title: "Small Business Development and Management",
      image: "/services/business.jpg",
      description: "Comprehensive business development services to help small businesses scale and thrive in today's competitive market."
    },
    {
      title: "AI Backed Solutions",
      image: "/services/ai-solutions.jpg",
      description: "Cutting-edge AI-powered tools and analytics to drive smarter business decisions and optimize operations."
    }
  ];

  const consultationPackages = [
    {
      title: "Startup Accelerator",
      duration: "Duration: 4-6 weeks",
      features: [
        "Business Model Development",
        "Refining value proposition, revenue streams, and market positioning",
        "Financial Planning & Risk Assessment",
        "Budgeting, cost analysis, and risk mitigation strategies",
        "Market Research & AI-Driven Insights",
        "Using Microsoft Azure ML for customer and competitor analysis",
        "Go-to-Market Strategy",
        "Tailored launch and marketing strategies"
      ]
    },
    {
      title: "Growth & Scaling",
      duration: "Duration: 6-8 weeks",
      features: [
        "Scaling Strategy",
        "Identifying growth opportunities, partnerships, and funding options",
        "Financial Optimization",
        "Cost efficiency, revenue forecasting, and funding allocation",
        "AI-Powered Market & Consumer Analytics",
        "Data-driven insights to refine product/service offerings",
        "Operational Efficiency & Automation",
        "Streamlining workflows with tech-driven solutions"
      ]
    },
    {
      title: "VC Readiness",
      duration: "Duration: 8-10 weeks",
      features: [
        "Investor Pitch & Valuation Strategy",
        "Crafting compelling investment proposals and valuation models",
        "Financial & Market Due Diligence",
        "Preparing reports on financials, risks, and growth potential",
        "Risk Mitigation & AI-Powered Predictive Modeling",
        "Leveraging Microsoft Azure ML to enhance decision-making",
        "Exit Strategy Planning",
        "Maximizing long-term ROI and preparing for acquisition or IPO"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900">
      {/* Hero Section with Background Pattern */}
      <div className="relative bg-[url('/backgrounds/pattern-dark.jpg')] bg-cover bg-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Furore' }}>
            OUR SERVICES
          </h1>
          <div className="w-32 h-1 bg-yellow-600 mx-auto"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="relative">
          {/* Services Cards */}
          <div className="grid md:grid-cols-3 gap-8" style={{ fontFamily: 'Manolo' }}>
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Packages Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Furore' }}>
            Consultation Packages
          </h2>
          <div className="w-32 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {consultationPackages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-8 transition-all duration-300 hover:transform hover:scale-[1.02] relative"
              style={{
                boxShadow: `
                  0 0 30px rgba(255, 255, 255, 0.05),
                  0 0 80px rgba(184, 126, 60, 0.15),
                  0 0 120px rgba(212, 193, 69, 0.1),
                  inset 0 0 80px rgba(162, 110, 12, 0.05)
                `
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Furore' }}>
                {pkg.title}
              </h3>
              <p className="text-yellow-600 mb-8 text-center" style={{ fontFamily: 'Manolo' }}>
                {pkg.duration}
              </p>
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className={idx % 2 === 0 ? "text-white font-semibold" : "text-neutral-400 text-sm mb-6"}
                  style={{ fontFamily: 'Manolo' }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <Link 
                to="/contact"
                className="block w-full text-center py-3 px-6 text-black font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgb(212, 193, 69) 0%, rgb(162, 110, 12) 45%, rgb(68, 43, 0) 100%)',
                  fontFamily: 'Manolo'
                }}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};