import Card from "@/components/Card";
import { GraduationCap, HeartHandshake, Users } from "lucide-react";

export default function CommunityServices() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Community & Social Programs
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Strengthening our community through education, culture, and charitable initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card variant="elevated" hover>
            <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
              Education Programs
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Educational initiatives and youth development programs that empower the next generation 
              and strengthen our community's future.
            </p>
          </Card>

          <Card variant="elevated" hover>
            <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
              Cultural Events
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Celebrating our heritage through multicultural events, festivals, and cultural 
              programs that bring families together.
            </p>
          </Card>

          <Card variant="elevated" hover>
            <div className="w-16 h-16 bg-[#0D9488] rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
              Charity Drives
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Community-driven charitable initiatives that provide assistance to those in need 
              and strengthen our bonds of care and support.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
