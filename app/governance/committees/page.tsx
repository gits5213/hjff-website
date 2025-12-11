import Card from "@/components/Card";
import { Users, Shield, Heart } from "lucide-react";

export default function Committees() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Executive Board & Committees
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Leadership structure that guides HJFF's operations and mission
          </p>
        </div>

        {/* Executive Board */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mr-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
                  Executive Board
                </h2>
                <p className="text-base md:text-lg text-[#6B7280] mb-6 leading-relaxed">
                  Provides strategic leadership and oversight for all organizational activities, 
                  ensuring alignment with HJFF's mission, bylaws, and long-term goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#166534] mb-2">Key Roles:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-[#6B7280] ml-2">
                      <li>President</li>
                      <li>Vice President</li>
                      <li>General Secretary</li>
                      <li>Treasurer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#166534] mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-[#6B7280] ml-2">
                      <li>Policy development</li>
                      <li>Financial oversight</li>
                      <li>Strategic planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <div className="flex items-start mb-4">
              <Users className="w-8 h-8 text-[#166534] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#166534] mb-2">
                  Steering Committee
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  Coordinates day-to-day operations, event planning, and community engagement initiatives.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="flex items-start mb-4">
              <Heart className="w-8 h-8 text-[#166534] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#166534] mb-2">
                  WLIBSC
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  Welfare, Life Insurance & Bereavement Support Committee manages our comprehensive 
                  welfare system and ensures families receive timely support.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
