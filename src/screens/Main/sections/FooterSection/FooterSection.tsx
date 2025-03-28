import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#141619] py-24">
      <div className="container relative mx-auto max-w-[1056px]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[766px] h-[698px] top-[-125px] right-0 bg-[url(/div-3.png)] bg-[100%_100%]">
            <img
              className="absolute w-[344px] h-[336px] top-[89px] left-[17px]"
              alt="Decorative element"
              src="/div-4.png"
            />
            <img
              className="absolute w-[324px] h-[314px] top-[229px] left-[306px]"
              alt="Decorative element"
              src="/div-6.png"
            />
          </div>
          <img
            className="absolute w-[528px] h-[372px] top-[51px] left-[-167px]"
            alt="Decorative element"
            src="/div-5.png"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-[56px] font-medium text-white leading-[78px] font-['Inter',Helvetica] mb-6">
            Contact Us
          </h2>

          <p className="max-w-[624px] text-lg text-neutral-200 leading-[30px] font-['Inter',Helvetica] mb-10">
            We are always open to discuss new value-adding partnerships. Do
            reach out if you are an exchange or a project looking for liquidity;
            an algorithmic trader or a software developer looking to improve the
            markets with us or just have a great idea you can&apos;t wait to
            share with us!
          </p>

          <Button className="text-[19px] font-medium text-white px-7 py-5 h-auto rounded-sm bg-gradient-to-br from-[rgba(102,93,205,1)] via-[rgba(95,164,230,1)] to-[rgba(210,171,103,1)]">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};
