import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const JoinSection = (): JSX.Element => {
  return (
    <section className="flex flex-row items-start gap-[132px] w-full py-16">
      <div className="relative flex items-start pr-[59px]">
        <div className="relative w-[408px] h-[156px]">
          <div className="relative w-[631px] h-[403px] -top-[102px] -left-[132px]">
            <img
              className="absolute w-[568px] h-[403px] top-0 left-0"
              alt="Decorative background element"
              src="/div-1.png"
            />
            <img
              className="absolute w-[342px] h-[329px] top-0.5 left-[289px]"
              alt="Decorative background element"
              src="/div-2.png"
            />
          </div>
        </div>

        <h2 className="relative w-fit font-medium text-white text-[53px] leading-[78px] font-['Inter',Helvetica]">
          Join
          <br /> Gravity Team
        </h2>
      </div>

      <div className="flex flex-col items-start gap-[39px]">
        <div className="flex flex-col items-start gap-6 pr-[10.33px]">
          <p className="w-[505.67px] font-['Inter',Helvetica] font-normal text-neutral-200 text-[19px] leading-[30px]">
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
          </p>

          <p className="w-[504.54px] font-['Inter',Helvetica] font-normal text-neutral-200 text-[19px] leading-[30px]">
            As we emphasize it in our name – Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff and have fun whilst doing so!
          </p>
        </div>

        <div className="relative flex items-start pr-[26px]">
          <div className="relative pr-[7.61px]">
            <div className="absolute w-[298px] h-0.5 top-[29px] left-0 bg-gradient-to-r from-[rgba(102,93,205,1)] via-[rgba(95,164,230,1)] to-[rgba(210,171,103,1)]" />
            <a
              href="#"
              className="relative w-fit font-['Inter',Helvetica] font-normal text-white text-lg leading-[30px] whitespace-nowrap"
            >
              Learn more about working with us
            </a>
          </div>
          <div className="absolute left-[304px] w-5 h-5 top-2">
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
