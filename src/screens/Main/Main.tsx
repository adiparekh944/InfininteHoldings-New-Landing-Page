import React from "react";
import { VecaidCountdown } from "./sections/VecaidCountdown/VecaidCountdown";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { OurServices } from "./sections/OurServices";
import { RevenueByMonth } from "./sections/RevenueByMonth/RevenueByMonth";
import { MonthlyExpansion } from "./sections/MonthlyExpansion/MonthlyExpansion";

export const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black">
      <HeroSection />
      <MonthlyExpansion />
      <OurServices />
      <RevenueByMonth />
      <VecaidCountdown />
      <FooterSection />
    </div>
  );
};
