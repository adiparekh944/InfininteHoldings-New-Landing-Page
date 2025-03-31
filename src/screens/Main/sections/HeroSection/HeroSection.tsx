import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen">
      {/* Gradient background effect */}
        <div className="w-screen h-screen bg-background items-center">
            <Spline
              scene="https://prod.spline.design/RSTsXobW-tIQ6Z4n/scene.splinecode"
            />
        </div>
        {/* CTA Button 
        <div className="flex justify-center mt-[42px]">
          <Button
            className="rounded-sm px-7 py-5 h-auto text-[19px] font-medium leading-[22px] bg-transparent text-white"
            style={{
              background:
                "linear-gradient(135deg, rgb(212, 193, 69) 0%, rgb(162, 110, 12) 45%, rgb(68, 43, 0) 100%)",
            }}
          >
            FREE CONSULTATION
          </Button>
        </div>*/}
    </section>
  );
};
