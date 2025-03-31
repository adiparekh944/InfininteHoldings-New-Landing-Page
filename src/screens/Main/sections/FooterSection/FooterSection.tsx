import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import "../../../../index.css";

export const FooterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        alert('Successfully subscribed!');
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="relative w-full bg-black py-24">
      <div className="container relative mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 text-white">
          {/* Company Info */}
          <div className="mb-10 md:mb-0 max-w-[400px]">
            <h2 className="text-[36px] font-bold leading-[48px] mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent" style={{ fontFamily: 'Furore' }}>
              INFINITE HOLDINGS GROUP
            </h2>
            <p className="text-md leading-[20px] text-neutral-300 hover:text-white transition-colors" style={{ fontFamily: 'Manolo' }}>
              Our team of young professionals and advisors combines industry expertise with Microsoft Azure
              Machine Learning applications to deliver comprehensive investment strategies that maximize
              growth while mitigating risks.
            </p>
            <div className="flex gap-6 mt-8">
              <SocialIcon 
                url="https://facebook.com/infiniteholdings"
                className="!h-12 !w-12 transition-transform hover:scale-110"
                target="_blank"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon 
                url="https://instagram.com/infiniteholdings"
                className="!h-12 !w-12 transition-transform hover:scale-110"
                target="_blank"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon 
                url="https://linkedin.com/company/infiniteholdings"
                className="!h-12 !w-12 transition-transform hover:scale-110"
                target="_blank"
                bgColor="transparent"
                fgColor="white"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'Furore' }}>QuickLinks</h3>
            <ul className="text-lg space-y-3" style={{ fontFamily: 'Manolo' }}>
              {[
                { to: "/about", text: "About" },
                { to: "/vecaid", text: "Vecaid" },
                { to: "/services", text: "Services Offered" },
                { to: "/contact", text: "Contact Us" },
                { to: "/privacy", text: "Privacy Policy" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-neutral-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'Furore' }}>Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-lg text-neutral-300 hover:text-white transition-colors flex items-center gap-2" style={{ fontFamily: 'Manolo' }}>
                <span className="w-5 h-5 inline-block bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></span>
                8609977106
              </p>
              <p className="text-lg text-neutral-300 hover:text-white transition-colors flex items-center gap-2" style={{ fontFamily: 'Manolo' }}>
                <span className="w-5 h-5 inline-block bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></span>
                1301 3rd Street, West Lafayette,<br />Indiana 47906, United States
              </p>
              <p className="text-lg text-neutral-300 hover:text-white transition-colors flex items-center gap-2" style={{ fontFamily: 'Manolo' }}>
                <span className="w-5 h-5 inline-block bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></span>
                info@infiniteholdingsgroup.com
              </p>
            </div>
          </div>

          {/* Subscribe Now */}
          <div className="mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'Furore' }}>Subscribe Now</h3>
            <p className="text-lg mb-6 text-neutral-300" style={{ fontFamily: 'Manolo' }}>
              Don't miss our future updates!<br />Get Subscribed Today!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:border-white/40 transition-colors"
                style={{ fontFamily: 'Manolo' }}
                required
              />
              <Button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-[1.02]"
                style={{ fontFamily: 'Manolo' }}
              >
                Subscribe →
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-neutral-400" style={{ fontFamily: 'Manolo' }}>
          © {new Date().getFullYear()} Infinite Holdings Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
