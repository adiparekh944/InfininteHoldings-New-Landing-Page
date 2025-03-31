import React, { useState } from 'react';
import { FooterSection } from '../screens/Main/sections/FooterSection/FooterSection';
import "../index.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const workingHours = [
    { day: 'Monday', hours: '09:30 am – 04:00 pm' },
    { day: 'Tuesday', hours: '09:30 am – 04:00 pm' },
    { day: 'Wednesday', hours: '09:30 am – 04:00 pm' },
    { day: 'Thursday', hours: '09:30 am – 04:00 pm' },
    { day: 'Friday', hours: '09:30 am – 04:00 pm' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative bg-[url('/backgrounds/pattern-dark.jpg')] bg-cover bg-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Furore' }}>
            CONTACT US
          </h1>
          <div className="w-32 h-1 bg-yellow-600 mx-auto"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-yellow-600 text-lg mb-2" style={{ fontFamily: 'Manolo' }}
                >Better yet, see us in person!</h3>
                
                <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Furore' }}>Contact Our Support</h2>
                <p className="text-neutral-300" style={{ fontFamily: 'Manolo' }}>
                  It is never too early to get started on your venture's investment plans and SMB
                  scaling. Tell us more about your goals, and we will get you started on a plan to
                  achieve them.
                </p>
              </div>

              <div className="space-y-4" style={{ fontFamily: 'Manolo' }}>
                <a href="tel:(860) 997-7106" className="flex items-center text-neutral-300 hover:text-yellow-600 transition-colors">
                  <span className="text-yellow-600 mr-2">(860) 997-7106</span>
                </a>
                
                <a href="mailto:contact@infiniteholdingsgroup.com" className="flex items-center text-neutral-300 hover:text-yellow-600 transition-colors">
                  <span className="text-yellow-600 mr-2">contact@infiniteholdingsgroup.com</span>
                </a>

                <div className="flex items-start text-neutral-300">
                  <span className="text-yellow-600 mr-2">1301 3rd Street, West Lafayette, Indiana 47906, United States</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-600" style={{ fontFamily: 'Furore' }}>Our Working Hours:</h3>
                <div className="space-y-2" style={{ fontFamily: 'Manolo' }}>
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-neutral-800 py-2">
                      <span className={schedule.hours === 'Closed' ? 'text-yellow-600' : 'text-neutral-300'}>
                        {schedule.day}
                      </span>
                      <span className={schedule.hours === 'Closed' ? 'text-yellow-600' : 'text-neutral-300'}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-neutral-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Furore' }}>Connect With Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-600 focus:outline-none transition-colors"
                    required
                    style={{ fontFamily: 'Manolo' }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-600 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Manolo' }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-600 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Manolo' }}
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-600 focus:outline-none transition-colors resize-none"
                    required
                    style={{ fontFamily: 'Manolo' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-medium rounded-lg bg-[linear-gradient(135deg,rgb(212,193,69)_0%,rgb(162,110,12)_45%,rgb(68,43,0)_100%)] hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Furore' }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};