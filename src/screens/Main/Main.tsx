import React from "react";
import { VecaidCountdown } from "./sections/VecaidCountdown/VecaidCountdown";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { JoinSection } from "./sections/JoinSection";
import { OurServices } from "./sections/OurServices";
import { RevenueByMonth } from "./sections/RevenueByMonth/RevenueByMonth";

export const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black">
      <HeroSection />
      <OurServices />
      <RevenueByMonth />
      <VecaidCountdown />
      <JoinSection />
      <FooterSection />
    </div>
  );
};
