import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "../../../../index.css";
export const RevenueByMonth = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 relative bg-black pb-16">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Furore' }}>Revenue Growth By Month</h2>
          <div className="h-1 w-32 bg-[#B87E3C] mx-auto mb-6"></div>
          <p className="text-neutral-200 text-lg leading-relaxed" style={{ fontFamily: 'Manolo' }}>
            Our disciplined investment strategy drives consistent monthly revenue growth across a diverse portfolio, 
            ensuring robust returns for our investors. By combining financial expertise with market insights, 
            we deliver sustainable success and lasting value.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl" >
          {/* Month 1 */}
          <div className="opacity-0 translate-x-full section-visible:animate-slide-in" style={{ '--slide-delay': '0s' } as React.CSSProperties}>
            <Card className="bg-[linear-gradient(135deg,rgb(207,161,61)_0%,rgb(162,110,12)_45%,rgb(68,43,0)_100%)] border-none text-white p-6">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Furore' }}>Month 1</h3>
                <p className="text-xl mb-6" style={{ fontFamily: 'Manolo' }}>10 SUBSCRIBERS</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Monthly Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(15990).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Annualized Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(191880).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Month 2 */}
          <div className="opacity-0 translate-x-full section-visible:animate-slide-in" style={{ '--slide-delay': '0.2s' } as React.CSSProperties}>
            <Card className="bg-[linear-gradient(135deg,rgb(207,161,61)_0%,rgb(162,110,12)_45%,rgb(68,43,0)_100%)] border-none text-white p-6">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Furore' }}>Month 2</h3>
                <p className="text-xl mb-6" style={{ fontFamily: 'Manolo' }}>11 SUBSCRIBERS</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Monthly Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(17589).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Annualized Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(211068).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Month 3 */}
          <div className="opacity-0 translate-x-full section-visible:animate-slide-in" style={{ '--slide-delay': '0.4s' } as React.CSSProperties}>
            <Card className="bg-[linear-gradient(135deg,rgb(207,161,61)_0%,rgb(162,110,12)_45%,rgb(68,43,0)_100%)] border-none text-white p-6">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Furore' }}>Month 3</h3>
                <p className="text-xl mb-6" style={{ fontFamily: 'Manolo' }}    >12 SUBSCRIBERS</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Monthly Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(19188).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Annualized Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(230256).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Month 4 */}
          <div className="opacity-0 translate-x-full section-visible:animate-slide-in" style={{ '--slide-delay': '0.6s' } as React.CSSProperties}>
            <Card className="bg-[linear-gradient(135deg,rgb(207,161,61)_0%,rgb(162,110,12)_45%,rgb(68,43,0)_100%)] border-none text-white p-6">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Furore' }}>Month 4</h3>
                <p className="text-xl mb-6" style={{ fontFamily: 'Manolo' }}>13 SUBSCRIBERS</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Monthly Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(20787).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'Manolo' }}>Annualized Revenue:</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Manolo' }}>${(249444).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};