import Link from "next/link";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { Users, Heart, GraduationCap, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="One Team, One Dream — Serving Hollis & Jamaica Families"
        subtitle="A community-based 501(c)(3) organization dedicated to strengthening bonds, providing welfare support, and ensuring no family faces hardship alone."
        primaryButton={{ text: "Join as a Member", href: "/membership" }}
        secondaryButton={{ text: "Learn About Welfare Support", href: "/programs/welfare" }}
        image="/hero-image.jpg"
      />

      {/* Mission & Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
              Our Mission & Values
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Building a stronger community through faith, care, and unity
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card hover variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                Community Development
              </h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                Strengthening bonds and supporting families in our community
              </p>
            </Card>

            <Card hover variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                Welfare & Bereavement Support
              </h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                Comprehensive support system ensuring no family faces loss alone
              </p>
            </Card>

            <Card hover variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#0D9488] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                Education & Youth
              </h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                Empowering the next generation through educational programs
              </p>
            </Card>

            <Card hover variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                Cultural & Social Events
              </h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                Celebrating our heritage and fostering community connections
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programs Highlight - Welfare Program */}
      <section className="py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#166534] mb-4 leading-tight">
                Welfare, Life Insurance & Bereavement Support
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                What HJFF does when a member passes away — a comprehensive system ensuring dignity, 
                financial support, and community care during life's most difficult moments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-1">$100 Pre-Death Collection</h4>
                  <p className="text-[#6B7280] text-sm">Standby fund ready for immediate use</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-1">12-Hour Fund Lock</h4>
                  <p className="text-[#6B7280] text-sm">Immediate response and verification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-1">Funeral & Burial Support</h4>
                  <p className="text-[#6B7280] text-sm">Complete coordination and financial assistance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-1">40-Day Meal Program</h4>
                  <p className="text-[#6B7280] text-sm">Community volunteers providing meals and support</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/programs/welfare"
                className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Learn More About Welfare Support
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Picnic & Events Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#166534] mb-4 leading-tight">
              Annual Community Picnic
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Join us for our biggest event of the year — food, games, activities, and community fellowship
            </p>
          </div>
          <Card variant="elevated" className="overflow-hidden border-2 border-[#F59E0B]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 md:p-12 text-white">
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  HJFF Annual Community Picnic
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="text-lg">Summer 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-lg">Queens, NY</span>
                  </div>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  Food, games, kids activities, sports, recognition, and community fellowship. 
                  All members and families welcome!
                </p>
                <Link
                  href="/events/annual-picnic"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#166534] rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                >
                  View Details & RSVP
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h4 className="font-heading text-xl font-semibold text-[#166534] mb-4">
                  What's Included
                </h4>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#166534] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Delicious BBQ & Refreshments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#166534] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Kids Activities & Games
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#166534] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sports Competitions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#166534] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Community Recognition
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#166534] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fellowship & Networking
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership / Trust Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#166534] mb-4 leading-tight">
              Driven by Community Leaders
            </h2>
            <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
              We are driven by dedicated volunteers and community leaders committed to serving our families
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <Card variant="outlined" className="text-center">
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                Executive Board
              </h3>
              <p className="text-sm text-[#6B7280]">
                Strategic leadership and oversight
              </p>
            </Card>
            <Card variant="outlined" className="text-center">
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                Steering Committee
              </h3>
              <p className="text-sm text-[#6B7280]">
                Day-to-day operations and coordination
              </p>
            </Card>
            <Card variant="outlined" className="text-center">
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                WLIBSC
              </h3>
              <p className="text-sm text-[#6B7280]">
                Welfare & Bereavement Support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Band */}
      <section className="py-16 md:py-20 bg-[#166534] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Become Part of a Caring Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            That stands with you in life and after death
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center px-8 py-4 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become a Member
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
