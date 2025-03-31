import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import "../../../../index.css";

export const OurServices = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 pt-32">
      <div className="relative w-full h-full bg-black">
        <div className="container mx-auto flex flex-col items-center gap-24">
          {/* Heading Section */}
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-medium text-white mb-8" style={{ fontFamily: 'Furore' }}>
              Our Services
            </h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Manolo' }}>
            Infinite Holdings Group offers a suite of services designed to fuel growth across diverse industries. 
            From small business development and AI-driven solutions to expert marketing strategies, we empower businesses to thrive.
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-wrap justify-between gap-16 w-full max-w-5xl">
            {/* Left Column - Text Content */}
            <Card className="bg-transparent border-none w-full md:w-[422px]">
              <CardContent className="p-0">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-7 h-7 text-[#FFD700] flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-neutral-200 text-xl" style={{ fontFamily: 'Manolo' }}>Small Business Development and Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-7 h-7 text-[#FFD700] flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-neutral-200 text-xl" style={{ fontFamily: 'Manolo' }}>AI Backed Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-7 h-7 text-[#FFD700] flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-neutral-200 text-xl" style={{ fontFamily: 'Manolo' }}>Expert Market Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Right Column - Image */}
            <Card className="bg-transparent border-none w-full md:w-[422px] relative">
              <CardContent className="p-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    className="w-full max-w-[514px] h-auto"
                    alt="Exchange screens"
                    src="/exchange-screens-new-png.png"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
