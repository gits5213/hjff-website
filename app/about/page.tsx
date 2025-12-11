import Card from "@/components/Card";
import { Heart, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            About HJFF
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Learn about our mission, history, and the dedicated leaders who guide our community
          </p>
        </div>

        {/* Story */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                Hollis Jamaica Friends & Family Inc. (HJFF) was founded by a group of dedicated 
                community members who recognized the need for a formal organization to support 
                families and strengthen community ties in the Hollis & Jamaica area.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Over the years, we have grown from a small group of friends and family to a 
                comprehensive organization with structured governance, active committees, and 
                programs that serve hundreds of members and their families.
              </p>
            </div>
          </Card>
        </section>

        {/* Mission & Purpose */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <div className="flex items-start mb-6">
              <Heart className="w-8 h-8 text-[#166534] mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
                  Mission & Purpose
                </h2>
                <p className="text-base md:text-lg text-[#6B7280] mb-4 leading-relaxed">
                  Hollis Jamaica Friends & Family Inc. is a 501(c)(3) non-profit organization 
                  dedicated to serving our community through faith, care, and unity.
                </p>
                <p className="text-base md:text-lg text-[#6B7280] mb-4 leading-relaxed">
                  Our mission is to strengthen community bonds, provide charitable support, and 
                  ensure no family faces hardship alone.
                </p>
                <div>
                  <h3 className="font-semibold text-[#166534] mb-3 text-lg">We achieve this through:</h3>
                  <ul className="list-disc list-inside space-y-2 text-base text-[#6B7280] ml-4">
                    <li>Organizing charitable and social initiatives</li>
                    <li>Hosting multicultural events and educational programs</li>
                    <li>Providing comprehensive welfare and bereavement support</li>
                    <li>Fostering unity and fellowship among members</li>
                    <li>Supporting youth development and education</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Logo & Slogan */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated" className="bg-gradient-to-br from-[#BBF7D0] to-white">
            <div className="text-center">
              <div className="flex flex-col items-center space-y-2 mb-6">
                <div className="w-16 h-1 bg-[#166534] rounded-full"></div>
                <div className="w-16 h-1 bg-[#166534] rounded-full"></div>
                <div className="w-16 h-1 bg-[#166534] rounded-full"></div>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
                Our Logo & Slogan
              </h2>
              <p className="text-base md:text-lg text-[#6B7280] mb-4 leading-relaxed max-w-2xl mx-auto">
                The three wavy lines in our logo represent unity, strength, and community bonds. 
                They symbolize how individual members come together to form a stronger whole.
              </p>
              <p className="text-xl md:text-2xl font-bold text-[#166534]">
                ONE TEAM ONE DREAM
              </p>
              <p className="text-sm md:text-base text-[#6B7280] mt-2">
                Our motto reflects our commitment to standing together as one community, 
                supporting each other through all of life's moments.
              </p>
            </div>
          </Card>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Key Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card variant="outlined" className="text-center">
              <Award className="w-12 h-12 text-[#166534] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                Founding
              </h3>
              <p className="text-sm text-[#6B7280]">
                Established by dedicated community members committed to serving families
              </p>
            </Card>
            <Card variant="outlined" className="text-center">
              <Users className="w-12 h-12 text-[#166534] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                Growth
              </h3>
              <p className="text-sm text-[#6B7280]">
                Expanded to serve hundreds of members with comprehensive programs
              </p>
            </Card>
            <Card variant="outlined" className="text-center">
              <Heart className="w-12 h-12 text-[#166534] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                Today
              </h3>
              <p className="text-sm text-[#6B7280]">
                Continuing to strengthen community bonds and support families
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
