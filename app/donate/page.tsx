import Link from "next/link";
import Card from "@/components/Card";
import { Heart, Gift, Users, GraduationCap } from "lucide-react";

export default function Donate() {
  const donationTiers = [
    {
      name: "Supporter",
      amount: "$25",
      description: "Help support our general operations and community programs.",
    },
    {
      name: "Friend",
      amount: "$50",
      description: "Contribute to our welfare fund and community initiatives.",
    },
    {
      name: "Partner",
      amount: "$100",
      description: "Support major events like the Annual Picnic and educational programs.",
    },
    {
      name: "Benefactor",
      amount: "$250+",
      description: "Make a significant impact on our welfare system and charitable activities.",
    },
  ];

  const donationOptions = [
    {
      title: "General Fund",
      description: "Support overall organizational operations, events, and community programs.",
      icon: Gift,
    },
    {
      title: "Welfare & Bereavement",
      description: "Contribute directly to our welfare fund supporting families in times of need.",
      icon: Heart,
    },
    {
      title: "Annual Picnic Sponsorship",
      description: "Help make our annual picnic even better by sponsoring activities, food, or entertainment.",
      icon: Users,
    },
    {
      title: "Youth & Education",
      description: "Support educational programs, youth development, and leadership initiatives.",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Donate
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Your generous contributions help us serve our community and support families in need
          </p>
        </div>

        {/* 501(c)(3) Status */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated" className="bg-gradient-to-br from-[#BBF7D0] to-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
              501(c)(3) Non-Profit Status
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                Hollis Jamaica Friends & Family Inc. is a registered 501(c)(3) non-profit 
                organization. Your donations may be tax-deductible to the extent allowed by law.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong className="text-[#166534]">Allowable Uses:</strong> Donations support 
                our charitable activities including welfare and bereavement support, community 
                events, educational programs, and youth development initiatives.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Please consult with a tax professional regarding the deductibility of your 
                contribution. We will provide a receipt for all donations.
              </p>
            </div>
          </Card>
        </section>

        {/* Donation Tiers */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Suggested Donation Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} variant="elevated" hover className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#166534] mb-2">{tier.amount}</div>
                <h3 className="font-heading text-lg font-semibold text-[#166534] mb-3">
                  {tier.name}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] mb-4 leading-relaxed">{tier.description}</p>
                <button className="w-full px-4 py-2 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                  Donate {tier.amount}
                </button>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-[#6B7280] mb-4">
              You can also choose your own amount or set up monthly recurring donations.
            </p>
            <button className="px-8 py-3 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
              Custom Amount
            </button>
          </div>
        </section>

        {/* Donation Options */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Where Your Donation Goes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {donationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} variant="elevated" hover>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#166534] rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-[#166534] mb-3">
                        {option.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#6B7280] mb-4 leading-relaxed">{option.description}</p>
                      <button className="px-6 py-2 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-md">
                        Donate to {option.title}
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Monthly vs One-Time */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              Monthly or One-Time Donations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#166534] mb-3">
                  One-Time Donation
                </h3>
                <p className="text-base text-[#6B7280] mb-4 leading-relaxed">
                  Make a single contribution to support our work. Perfect for special occasions 
                  or when you want to make an immediate impact.
                </p>
                <button className="px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                  Make One-Time Donation
                </button>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#166534] mb-3">
                  Monthly Recurring Donation
                </h3>
                <p className="text-base text-[#6B7280] mb-4 leading-relaxed">
                  Set up automatic monthly donations to provide consistent support throughout 
                  the year. Helps us plan and budget more effectively.
                </p>
                <button className="px-6 py-3 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                  Set Up Monthly Donation
                </button>
              </div>
            </div>
          </Card>
        </section>

        {/* Other Ways to Give */}
        <section>
          <Card variant="elevated" className="bg-gradient-to-br from-[#166534] to-[#15803D] text-white">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Other Ways to Give
            </h2>
            <div className="space-y-4 text-gray-100">
              <p className="text-base leading-relaxed">
                <strong>Mail a Check:</strong> Send your donation by mail to our Queens, NY headquarters. 
                Please include your contact information for receipt purposes.
              </p>
              <p className="text-base leading-relaxed">
                <strong>In-Kind Donations:</strong> We also accept in-kind donations such as food for events, 
                supplies, or services. Contact us to discuss in-kind contributions.
              </p>
              <p className="text-base leading-relaxed">
                <strong>Event Sponsorship:</strong> Sponsor specific events like the Annual Picnic. 
                Sponsors receive recognition and help make events more successful.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#166534] rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Contact Us for More Information
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
