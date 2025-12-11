import Link from "next/link";
import Card from "@/components/Card";
import { CheckCircle, Users, Shield, Heart, Award } from "lucide-react";

export default function Membership() {
  const membershipTypes = [
    {
      name: "General Member",
      icon: Users,
      description: "Active members who pay monthly subscriptions and participate in all activities",
      benefits: ["Voting rights", "Meeting participation", "Annual picnic access", "Welfare support eligibility"],
    },
    {
      name: "Life Member",
      icon: Shield,
      description: "Members who have made a significant lifetime commitment",
      benefits: ["All General Member benefits", "Lifetime recognition", "Special privileges"],
    },
    {
      name: "Advisory Member",
      icon: Award,
      description: "Members who provide guidance and expertise",
      benefits: ["Advisory role", "Meeting participation", "Event access"],
    },
    {
      name: "Founding Member",
      icon: Award,
      description: "Original founders of HJFF",
      benefits: ["All General Member benefits", "Founding recognition", "Special status"],
    },
    {
      name: "Honorary Member",
      icon: Heart,
      description: "Recognized for exceptional contributions",
      benefits: ["Honorary recognition", "Event invitations", "Community appreciation"],
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Membership
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Join HJFF and become part of a community dedicated to faith, care, and unity
          </p>
        </div>

        {/* Eligibility */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated" className="bg-gradient-to-br from-[#BBF7D0] to-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
              Eligibility
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] mb-4 leading-relaxed">
              HJFF membership is open to Hollis & Jamaica residents, inclusive of all backgrounds. 
              We welcome individuals and families who share our commitment to community service 
              and mutual support.
            </p>
          </Card>
        </section>

        {/* Membership Types */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Types of Membership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {membershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} variant="elevated" hover>
                  <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                    {type.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#6B7280] mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#166534] mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6B7280]">
                          <CheckCircle className="w-4 h-4 text-[#166534] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              Membership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#166534] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-2 text-lg">Voting Rights</h3>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Active members have the right to vote on important organizational matters, 
                    including board elections and policy changes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#166534] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-2 text-lg">Welfare Program Participation</h3>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Access to our comprehensive welfare and bereavement support system, ensuring 
                    your family is never alone in times of need.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#166534] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-2 text-lg">Events & Activities</h3>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Participate in our annual picnic, community events, educational programs, 
                    and social gatherings.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#166534] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-2 text-lg">Community Support</h3>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Receive support during funerals, community assistance, and access to 
                    educational and cultural programs.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* How to Join */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated" className="bg-gradient-to-br from-[#166534] to-[#15803D] text-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              How to Join
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg">Complete Membership Form</h3>
                  <p className="text-gray-100 text-sm md:text-base">
                    Fill out our online membership application form
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg">Payment Methods</h3>
                  <p className="text-gray-100 text-sm md:text-base">
                    Pay monthly subscription via Zelle, card, or other accepted methods
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg">Welcome & Orientation</h3>
                  <p className="text-gray-100 text-sm md:text-base">
                    Receive welcome package and orientation to HJFF programs and benefits
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/resources/forms"
              className="inline-flex items-center px-8 py-4 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              Membership FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#166534] mb-2 text-lg">
                  Can my spouse/children continue after my death?
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  <strong className="text-[#166534]">YES!</strong> Spouses and children can continue 
                  as continuity members, maintaining access to welfare support and community benefits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#166534] mb-2 text-lg">
                  What are the monthly subscription requirements?
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  General members maintain active status through monthly subscription payments. 
                  Contact us for current rates and payment options.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#166534] mb-2 text-lg">
                  How do I maintain active membership?
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Active membership requires timely payment of monthly subscriptions and participation 
                  in community obligations, including funeral attendance when possible.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
