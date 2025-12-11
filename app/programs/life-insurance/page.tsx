import Link from "next/link";
import Card from "@/components/Card";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function LifeInsuranceProgram() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Life Insurance Support
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Additional protection beyond our welfare support system
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mr-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-4">
                  Group Life Insurance Overview
                </h2>
                <div className="space-y-4 text-[#6B7280]">
                  <p className="text-base md:text-lg leading-relaxed">
                    HJFF offers Group Life Insurance as an additional layer of protection for our 
                    members. This insurance is separate from and complementary to our welfare and 
                    bereavement support system.
                  </p>
                  <div className="bg-[#BBF7D0]/30 border-l-4 border-[#166534] p-4 rounded-lg">
                    <p className="text-base md:text-lg font-semibold text-[#166534]">
                      Important: Group Life Insurance does not replace our welfare support system. 
                      All eligible members receive full funeral and burial support regardless of insurance status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card variant="elevated">
            <div className="flex items-start mb-4">
              <CheckCircle className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#166534] mb-2">
                  Each Member Pays Own Premium
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  Group Life Insurance is a voluntary benefit. Each member who chooses to enroll 
                  is responsible for paying their own insurance premiums directly to the insurance provider.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="flex items-start mb-4">
              <AlertCircle className="w-6 h-6 text-[#F59E0B] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#166534] mb-2">
                  If You're Not Eligible
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  You still receive full funeral support! All active members receive complete 
                  welfare benefits regardless of insurance eligibility.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* How to Apply */}
        <section>
          <Card variant="elevated" className="bg-gradient-to-br from-[#F9FAFB] to-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              How to Apply
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#166534] mb-3 text-lg">Step-by-Step Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-2">
                    <li>Contact the HJFF insurance coordinator</li>
                    <li>Request an application form</li>
                    <li>Complete the application</li>
                    <li>Submit health screening documents</li>
                    <li>Wait for approval</li>
                    <li>Set up premium payments</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold text-[#166534] mb-3 text-lg">Eligibility Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-2">
                    <li>Active membership status</li>
                    <li>Age requirements (typically 18-65 years)</li>
                    <li>Health screening and approval</li>
                    <li>Completion of insurance application</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                >
                  Contact Insurance Coordinator
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
