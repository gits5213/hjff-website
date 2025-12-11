import Link from "next/link";
import Card from "@/components/Card";
import { Heart, Calendar, Utensils, Users, FileText, GraduationCap } from "lucide-react";

export default function GetInvolved() {
  const volunteerRoles = [
    {
      title: "Funeral Volunteer Corps",
      description: "Provide support during funerals and burials, including setup, coordination, and assistance to grieving families.",
      icon: Heart,
    },
    {
      title: "Event Volunteers",
      description: "Help organize and execute community events, including the Annual Picnic, fundraisers, and educational programs.",
      icon: Calendar,
    },
    {
      title: "40-Day Meal Program",
      description: "Sign up to provide meals for grieving families during the 40-day support period. A meaningful way to show care.",
      icon: Utensils,
    },
    {
      title: "Counseling & Mentorship",
      description: "Offer emotional support, counseling, or mentorship to members and families in need.",
      icon: Users,
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, communications, record-keeping, and organizational administration.",
      icon: FileText,
    },
    {
      title: "Youth Program Leaders",
      description: "Lead or assist with youth educational programs, activities, and leadership development initiatives.",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Get Involved
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Join us in making a difference. Your time, skills, and dedication help strengthen our community.
          </p>
        </div>

        {/* Volunteer Roles */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} variant="elevated" hover>
                  <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mb-6 text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                    {role.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#6B7280] mb-4 leading-relaxed">{role.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              How to Get Started
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1 text-lg">Identify Your Interest</h3>
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    Review the volunteer opportunities above and identify where your skills and interests align.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1 text-lg">Contact Us</h3>
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    Reach out through our contact form or email to express your interest and ask any questions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#166534] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1 text-lg">Get Started</h3>
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    We'll connect you with the appropriate committee or coordinator to begin your volunteer journey.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Special Programs */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Special Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card variant="elevated" className="bg-gradient-to-br from-[#166534] to-[#15803D] text-white">
              <h3 className="font-heading text-xl font-semibold mb-3">
                Join Volunteer Corps
              </h3>
              <p className="mb-6 text-gray-100 leading-relaxed">
                Become part of our dedicated volunteer corps that provides support during 
                funerals, events, and community activities. Training and coordination provided.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#166534] rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Sign Up Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
            <Card variant="elevated" className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-[#111827]">
              <h3 className="font-heading text-xl font-semibold mb-3">
                Support 40-Day Meal Program
              </h3>
              <p className="mb-6 leading-relaxed">
                Sign up to provide meals for grieving families. This is one of the most 
                meaningful ways to show care and support during difficult times.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Sign Up Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          </div>
        </section>

        {/* Sponsorship */}
        <section>
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
              Sponsor an Event
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] mb-6 leading-relaxed">
              Help make our events even better by becoming a sponsor. Sponsors receive recognition 
              at events and in our communications. Your support helps us provide more activities, 
              better food, and enhanced experiences for all attendees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold text-center shadow-md hover:shadow-lg"
              >
                Learn About Sponsorship
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-[#166534] border-2 border-[#166534] rounded-lg hover:bg-[#F9FAFB] transition-all duration-200 font-semibold text-center shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
