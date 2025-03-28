import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const RevenueByMonth = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative bg-[#2A2B2A]">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">Revenue Growth By Month</h2>
          <div className="h-1 w-32 bg-[#B87E3C] mx-auto mb-6"></div>
          <p className="text-neutral-200 text-lg leading-relaxed">
            Our disciplined investment strategy drives consistent monthly revenue growth across a diverse portfolio, 
            ensuring robust returns for our investors. By combining financial expertise with market insights, 
            we deliver sustainable success and lasting value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {/* Month 1 */}
          <Card className="bg-gradient-to-b from-[#8B5E34] to-[#5C3D21] border-none text-white p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold mb-2">Month 1</h3>
              <p className="text-xl mb-6">10 SUBSCRIBERS</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Monthly Revenue:</p>
                  <p className="text-2xl font-bold">${(15990).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm">Annualized Revenue:</p>
                  <p className="text-2xl font-bold">${(191880).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 2 */}
          <Card className="bg-gradient-to-b from-[#8B5E34] to-[#5C3D21] border-none text-white p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold mb-2">Month 2</h3>
              <p className="text-xl mb-6">11 SUBSCRIBERS</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Monthly Revenue:</p>
                  <p className="text-2xl font-bold">${(17589).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm">Annualized Revenue:</p>
                  <p className="text-2xl font-bold">${(211068).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 3 */}
          <Card className="bg-gradient-to-b from-[#8B5E34] to-[#5C3D21] border-none text-white p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold mb-2">Month 3</h3>
              <p className="text-xl mb-6">12 SUBSCRIBERS</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Monthly Revenue:</p>
                  <p className="text-2xl font-bold">${(19188).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm">Annualized Revenue:</p>
                  <p className="text-2xl font-bold">${(230256).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month 4 */}
          <Card className="bg-gradient-to-b from-[#8B5E34] to-[#5C3D21] border-none text-white p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold mb-2">Month 4</h3>
              <p className="text-xl mb-6">13 SUBSCRIBERS</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Monthly Revenue:</p>
                  <p className="text-2xl font-bold">${(20787).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm">Annualized Revenue:</p>
                  <p className="text-2xl font-bold">${(249444).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View All Plans Link */}
        <div className="mt-8">
          <p className="text-white text-lg italic">VIEW ALL OUR PLANS →</p>
        </div>
      </div>
    </section>
  );
};