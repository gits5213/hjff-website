import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";

export default function WelfareSupport() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              Why This System Exists
            </h3>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                The Welfare, Life Insurance & Bereavement Support Committee (WLIBSC) system exists 
                to ensure that no member's family faces loss alone. We believe in unity, dignity, 
                and standing together as one community during life's most difficult moments.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                This comprehensive system provides both financial support and emotional care, 
                ensuring that every family receives the assistance they need during bereavement 
                and beyond.
              </p>
            </div>
          </Card>
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              Core Principles
            </h3>
            <ul className="space-y-4 text-[#6B7280]">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-[#166534] font-bold text-lg">•</span>
                </div>
                <div>
                  <span className="font-semibold text-[#166534]">Unity:</span> We stand together as one team, one dream
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-[#166534] font-bold text-lg">•</span>
                </div>
                <div>
                  <span className="font-semibold text-[#166534]">Dignity:</span> Every family deserves respectful support
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-[#166534] font-bold text-lg">•</span>
                </div>
                <div>
                  <span className="font-semibold text-[#166534]">Care:</span> Financial and emotional support go hand in hand
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-[#166534] font-bold text-lg">•</span>
                </div>
                <div>
                  <span className="font-semibold text-[#166534]">Transparency:</span> Clear processes and communication
                </div>
              </li>
            </ul>
          </Card>
        </div>
      ),
    },
    {
      id: "fund",
      label: "How the $100 Fund Works",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              The $100 Fund System
            </h3>
            <div className="space-y-5 md:space-y-6 text-[#6B7280]">
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 md:mb-3 text-base md:text-lg">Collection Process</h4>
                <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base leading-relaxed">
                  <li>$100 is collected from each active member</li>
                  <li>Funds are collected before any death occurs</li>
                  <li>This creates a standby fund ready for immediate use</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 md:mb-3 text-base md:text-lg">7-Day Window</h4>
                <p className="text-sm md:text-base leading-relaxed">
                  Members have a 7-day window to contribute their $100 payment when requested. 
                  This ensures timely collection and fund availability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 md:mb-3 text-base md:text-lg">Stop & Resume Protocol</h4>
                <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base leading-relaxed">
                  <li>When a death occurs, collection stops immediately for 12 hours</li>
                  <li>This pause allows for verification and initial response</li>
                  <li>After 12 hours, collection resumes as normal</li>
                  <li>Any remaining funds after expenses are returned to the family</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="bg-gradient-to-br from-[#F7FAFC] to-white">
            <h4 className="font-heading text-lg md:text-xl font-semibold text-[#166534] mb-4 md:mb-6">
              Fund Flow Diagram
            </h4>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                <span className="text-[#6B7280]">Active members contribute $100 each</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-6 bg-[#065F46]"></div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                <span className="text-[#6B7280]">Funds collected and held in standby</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-6 bg-[#065F46]"></div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                <span className="text-[#6B7280]">Death occurs → Collection stops for 12 hours</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-6 bg-[#065F46]"></div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                <span className="text-[#6B7280]">Funds used for funeral & burial expenses</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-6 bg-[#065F46]"></div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">5</div>
                <span className="text-[#6B7280]">Remaining funds returned to family</span>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: "workflow",
      label: "Funeral & Burial Workflow",
      content: (
        <div className="w-full">
          <Card variant="elevated" className="max-w-4xl mx-auto">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-6 md:mb-8">
              Complete Workflow Process
            </h3>
            <Timeline
              steps={[
                {
                  title: "Death Occurs",
                  description: "Family notifies WLIBSC committee immediately. Collection stops for 12 hours.",
                },
                {
                  title: "Verification",
                  description: "Committee verifies membership status and death certificate. Confirms eligibility for support.",
                },
                {
                  title: "Funeral Arrangements",
                  description: "Family works with committee to coordinate funeral services. Committee provides guidance and support.",
                },
                {
                  title: "Burial Services",
                  description: "Burial arrangements are coordinated. Committee ensures all members are notified and attendance obligations are met.",
                },
                {
                  title: "Payment Processing",
                  description: "Funds from the $100 collection are used to cover funeral and burial expenses. All transactions are documented.",
                },
                {
                  title: "40-Day Support",
                  description: "Meal program begins. Volunteers sign up to provide meals for the grieving family over 40 days.",
                },
                {
                  title: "Closure & Follow-up",
                  description: "Committee follows up with family. Remaining funds are returned. Support continues as needed.",
                },
              ]}
            />
          </Card>
        </div>
      ),
    },
    {
      id: "40day",
      label: "40-Day Support",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              40-Day Meal Support Program
            </h3>
            <p className="text-base md:text-lg text-[#6B7280] mb-6 leading-relaxed">
              Following Islamic tradition and our commitment to community care, we provide 
              meal support to grieving families for 40 days after a loss.
            </p>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-[#166534] mb-3 text-base md:text-lg">How It Works</h4>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-2 leading-relaxed">
                  <li>Volunteers sign up for specific days to provide meals</li>
                  <li>Meals are delivered directly to the family's home</li>
                  <li>Coordination is managed by WLIBSC committee</li>
                  <li>All members are encouraged to participate</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="bg-gradient-to-br from-[#FBBF24]/10 to-[#F59E0B]/5">
            <h4 className="font-semibold text-[#166534] mb-3 text-base md:text-lg">Volunteer Sign-Up</h4>
            <p className="text-sm md:text-base text-[#6B7280] mb-6 leading-relaxed">
              Members can sign up to provide meals through our volunteer coordination system. 
              This is a meaningful way to show support and care for grieving families.
            </p>
            <a
              href="/get-involved"
              className="inline-flex items-center px-6 py-3 bg-[#065F46] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign Up to Volunteer
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Card>
        </div>
      ),
    },
    {
      id: "forms",
      label: "Forms & Downloads",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated" className="border-l-4 border-[#065F46]">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Welfare Policy & Charter</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Complete policy document outlining all welfare and bereavement support procedures.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  Download PDF
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="border-l-4 border-[#065F46]">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Claim Form</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Form to request welfare support for funeral and burial expenses.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  Download Form
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="border-l-4 border-[#065F46]">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Burial Preference Form</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Document your burial preferences for future planning.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  Download Form
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="border-l-4 border-[#065F46]">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Welfare Handbook</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Comprehensive guide to understanding and accessing welfare support.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  Download Handbook
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: "faq",
      label: "FAQs",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <div className="space-y-6">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-6 pb-4 border-b border-gray-200">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">
                    Who is eligible for welfare support?
                  </h4>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Active members who maintain their monthly subscriptions are eligible for 
                    welfare support. The deceased member must have been in good standing at 
                    the time of death.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">
                    What expenses are covered?
                  </h4>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    The fund covers funeral and burial expenses including casket, burial plot, 
                    transportation, and related services. Remaining funds are returned to the family.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">
                    How quickly is support available?
                  </h4>
                  <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                    Support begins immediately upon notification. The committee responds within 
                    12 hours and coordinates all necessary arrangements.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card variant="elevated">
            <div className="space-y-6 pt-12">
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">
                  What if I can't pay the $100 contribution?
                </h4>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  Contact the WLIBSC committee to discuss payment arrangements. We work with 
                  members to ensure everyone can participate while maintaining the fund's integrity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">
                  How do I volunteer for the 40-day meal program?
                </h4>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  Visit our Get Involved page or contact the WLIBSC committee directly. 
                  Volunteers can sign up for specific days to provide meals.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#065F46] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Contact Us for More Info
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Welfare & Support
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Comprehensive support system ensuring no family faces loss alone.
          </p>
        </div>
        <div className="w-full">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
