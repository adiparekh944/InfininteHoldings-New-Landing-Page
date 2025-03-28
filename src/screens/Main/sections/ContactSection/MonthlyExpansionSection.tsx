import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const MonthlyExpansionSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center gap-16 w-full max-w-[1200px] mx-auto px-4 pt-32 bg-black">
      <div className="grid grid-cols-2 gap-8 w-full">
        {/* Right side - Card with content */}
        <Card className="w-full border-0 bg-transparent">
          <CardContent className="flex flex-col gap-6 p-8">
            <h2 className="font-medium text-white text-[40px] leading-[1.2] font-['Inter',Helvetica]">
              How Vecaid Ensures 15% Monthly Expansion
            </h2>
            <p className="text-neutral-200 text-lg leading-relaxed">
            At Vecaid, we are strategically positioned for consistent month-over-month growth, leveraging data-driven insights and targeted outreach to expand our user base. With a projected revenue of $3.17 million in Year 1 and $15.64 million in Year 2, our focus remains on maximizing adoption while maintaining strong capital efficiency.
            </p>
            <Button
              onClick={() => navigate('/vecaid')}
              className="w-fit mt-4 rounded-sm px-7 py-5 h-auto text-[19px] font-medium leading-[22px] bg-transparent text-white"
              style={{
                background: "linear-gradient(135deg, rgb(212, 193, 69) 0%, rgb(162, 110, 12) 45%, rgb(68, 43, 0) 100%)",
              }}
            >
              Learn More About Vecaid
            </Button>
          </CardContent>
        </Card>

        {/* Right side - Image placeholder */}
        <div 
          className="w-full h-[500px] bg-neutral-800 rounded-3xl flex items-center justify-center relative"
          style={{
            boxShadow: `
              0px 0px 50px 8px rgba(212, 193, 69, 0.5),
              0px 0px 50px 8px rgba(162, 110, 12, 0.3),
              0px 0px 50px 8px rgba(68, 43, 0, 0.2)
            `
          }}
        >
          <span className="text-neutral-400">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
};
