import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default function WelfareProgram() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              About WLIBSC
            </h3>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                The Welfare, Life Insurance & Bereavement Support Committee (WLIBSC) ensures that 
                no member's family faces loss alone. We provide comprehensive financial and emotional 
                support during life's most difficult moments.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our system is built on principles of unity, dignity, care, and transparency — 
                standing together as one team, one dream.
              </p>
            </div>
          </Card>
          <Card variant="elevated" className="bg-gradient-to-br from-[#BBF7D0] to-white">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              Key Features
            </h3>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#166534] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">$100 pre-death collection model</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#166534] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">12-hour fund lock for verification</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#166534] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">Complete funeral & burial coordination</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#166534] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">40-day meal support program</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#166534] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">Remaining funds returned within 48-72 hours</span>
              </li>
            </ul>
          </Card>
        </div>
      ),
    },
    {
      id: "fund-model",
      label: "Fund Model",
      content: (
        <div className="space-y-6">
          <Card variant="elevated">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#166534] mb-4 md:mb-6">
              $100 Pre-Death Collection Model
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#166534] mb-3 text-lg">How It Works</h4>
                <p className="text-[#6B7280] mb-4 leading-relaxed">
                  Each active member contributes $100 before any death occurs. This creates a 
                  standby fund ready for immediate use when needed.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                  <li>7-day collection window</li>
                  <li>Funds held in standby</li>
                  <li>Immediate availability when death occurs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-3 text-lg">12-Hour Fund Lock</h4>
                <p className="text-[#6B7280] leading-relaxed">
                  When a death occurs, collection stops immediately for 12 hours to allow for 
                  verification and initial response. After verification, collection resumes normally.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-3 text-lg">Multiple-Death Exception</h4>
                <p className="text-[#6B7280] leading-relaxed">
                  In rare cases of multiple deaths, the Steering Committee maintains a standby 
                  fund to ensure all families receive support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#166534] mb-3 text-lg">Graveyard Exception Rule</h4>
                <p className="text-[#6B7280] leading-relaxed">
                  Special provisions apply for members who have already purchased burial plots, 
                  ensuring fair and appropriate support.
                </p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: "workflow",
      label: "Funeral Workflow",
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
                  description: "Committee verifies membership status and death certificate. Confirms eligibility.",
                },
                {
                  title: "Funeral Arrangements",
                  description: "Family works with committee to coordinate funeral services. Committee provides guidance.",
                },
                {
                  title: "Burial Services",
                  description: "Burial arrangements coordinated. All members notified for attendance obligations.",
                },
                {
                  title: "Payment Processing",
                  description: "Funds from $100 collection used to cover expenses. All transactions documented.",
                },
                {
                  title: "40-Day Support",
                  description: "Meal program begins. Volunteers sign up to provide meals for grieving family.",
                },
                {
                  title: "Closure & Follow-up",
                  description: "Remaining funds returned to family within 48-72 hours. Support continues as needed.",
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
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">How It Works</h4>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-4 leading-relaxed">
                  <li>Volunteers sign up for specific days</li>
                  <li>Meals delivered directly to family's home</li>
                  <li>Coordination managed by WLIBSC committee</li>
                  <li>All members encouraged to participate</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="bg-gradient-to-br from-[#F59E0B]/10 to-white">
            <h4 className="font-semibold text-[#166534] mb-3 text-base md:text-lg">Volunteer Sign-Up</h4>
            <p className="text-sm md:text-base text-[#6B7280] mb-6 leading-relaxed">
              Members can sign up to provide meals through our volunteer coordination system. 
              This is a meaningful way to show support and care for grieving families.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign Up to Volunteer
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
        </div>
      ),
    },
    {
      id: "downloads",
      label: "Forms & Downloads",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card variant="elevated" className="border-l-4 border-[#166534]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-[#166534]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Welfare & Bereavement Policy</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Complete policy document outlining all procedures.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="border-l-4 border-[#166534]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-[#166534]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Beneficiary Claim Form</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Form to request welfare support for expenses.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  <Download className="w-4 h-4 mr-2" />
                  Download Form
                </a>
              </div>
            </div>
          </Card>
          <Card variant="elevated" className="border-l-4 border-[#166534]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#166534]/10 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-[#166534]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#166534] mb-2 text-base md:text-lg">Burial Preference Form</h4>
                <p className="text-sm md:text-base text-[#6B7280] mb-3 leading-relaxed">
                  Document your burial preferences for planning.
                </p>
                <a href="#" className="inline-flex items-center text-sm md:text-base text-[#0D9488] hover:text-[#166534] font-medium group">
                  <Download className="w-4 h-4 mr-2" />
                  Download Form
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
            Welfare & Bereavement Support
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Comprehensive support system ensuring no family faces loss alone
          </p>
        </div>
        <div className="w-full">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
