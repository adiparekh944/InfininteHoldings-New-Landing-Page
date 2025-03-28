import React, { useEffect, useState } from "react";
import { Card } from "../../../../components/ui/card";
import Spline from '@splinetool/react-spline';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const VecaidCountdown = (): JSX.Element => {
  const calculateTimeLeft = () => {
    // Set your target date here
    const targetDate = new Date('2025-03-29'); // change date according to the date of the launch
    const difference = targetDate.getTime() - new Date().getTime();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-.7*screen overflow-hidden py-32">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/tV7wQi3dwAbKwvwD/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              Vecaid Beta Is Almost Here!
            </h2>
            <p className="text-xl text-neutral-200">
              The date is approaching fast and we're making preparations. Don't miss out!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-white">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-white text-sm uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};