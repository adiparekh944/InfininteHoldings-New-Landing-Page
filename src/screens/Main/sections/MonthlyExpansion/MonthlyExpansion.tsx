import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const MonthlyExpansion = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center gap-16 w-full max-w-[1200px] mx-auto px-4 pt-32 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left side - Content */}
        <Card className="w-full border-0 bg-transparent">
          <CardContent className="flex flex-col gap-6 p-8">
            <p className="text-[#B87E3C] text-lg font-medium">Driving Growth</p>
            <h2 className="font-medium text-white text-[40px] leading-[1.2]">
              How Vecaid Ensures 15% Monthly Expansion
            </h2>
            <p className="text-neutral-200 text-lg leading-relaxed">
              At Vecaid, we are strategically positioned for consistent month-over-month growth, 
              leveraging data-driven insights and targeted outreach to expand our user base. 
              With a projected revenue of $3.17 million in Year 1 and $15.64 million in Year 2, 
              our focus remains on maximizing adoption while maintaining strong capital efficiency.
            </p>
            <Button
              onClick={() => navigate('/vecaid')}
              className="w-fit mt-4 rounded-sm px-7 py-5 h-auto text-[19px] font-medium leading-[22px] bg-transparent text-white"
              style={{
                background: "linear-gradient(135deg, rgb(212, 193, 69) 0%, rgb(162, 110, 12) 45%, rgb(68, 43, 0) 100%)",
              }}
            >
              READ MORE →
            </Button>
          </CardContent>
        </Card>

        {/* Right side - Image */}
        <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
          <img
            src="/handshake-image.jpg"
            alt="Business handshake"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};