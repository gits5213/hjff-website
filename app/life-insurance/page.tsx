import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function LifeInsurance() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Group Life Insurance"
          subtitle="Additional protection beyond our welfare support system."
        />

        {/* Overview */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#166534] mb-4">
              Overview
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                HJFF offers Group Life Insurance as an additional layer of protection for our 
                members. This insurance is separate from and complementary to our welfare and 
                bereavement support system.
              </p>
              <p>
                <strong className="text-[#166534]">Important:</strong> Group Life Insurance does 
                not replace our welfare support system. All eligible members receive full funeral 
                and burial support regardless of insurance status.
              </p>
            </div>
          </Card>
        </section>

        {/* Eligibility */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#166534] mb-4">
              Who is Eligible?
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                Group Life Insurance eligibility is determined by age and health status. 
                Specific eligibility requirements include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Active membership status</li>
                <li>Age requirements (typically 18-65 years)</li>
                <li>Health screening and approval</li>
                <li>Completion of insurance application</li>
              </ul>
              <p className="mt-4">
                Contact our insurance coordinator for specific eligibility details and to 
                determine if you qualify for coverage.
              </p>
            </div>
          </Card>
        </section>

        {/* Each Member Pays Own Premium */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#166534] mb-4">
              Each Member Pays Own Premium
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                Group Life Insurance is a voluntary benefit. Each member who chooses to enroll 
                is responsible for paying their own insurance premiums directly to the insurance 
                provider.
              </p>
              <p>
                Premiums are based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Age at enrollment</li>
                <li>Coverage amount selected</li>
                <li>Health status and medical underwriting</li>
                <li>Group rates negotiated by HJFF</li>
              </ul>
              <p className="mt-4">
                HJFF facilitates group enrollment to secure favorable rates, but individual 
                members maintain direct relationships with the insurance provider for premium 
                payments and claims.
              </p>
            </div>
          </Card>
        </section>

        {/* If Not Eligible */}
        <section className="mb-16">
          <Card className="bg-[#F7FAFC]">
            <h2 className="font-heading text-2xl font-bold text-[#166534] mb-4">
              If You're Not Eligible for Insurance
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                <strong className="text-[#166534]">You still receive full funeral support!</strong>
              </p>
              <p>
                Group Life Insurance eligibility does not affect your access to our welfare and 
                bereavement support system. All active members receive:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full $100 fund support for funeral and burial expenses</li>
                <li>40-day meal program support</li>
                <li>Complete funeral coordination assistance</li>
                <li>All other welfare benefits</li>
              </ul>
              <p className="mt-4">
                Insurance is an additional benefit for those who qualify, but it is not required 
                for welfare support eligibility.
              </p>
            </div>
          </Card>
        </section>

        {/* How to Apply */}
        <section>
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#166534] mb-4">
              How to Apply
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                To apply for Group Life Insurance:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact the HJFF insurance coordinator</li>
                <li>Request an application form</li>
                <li>Complete the application with required information</li>
                <li>Submit health screening documents if required</li>
                <li>Wait for approval from the insurance provider</li>
                <li>Set up premium payments upon approval</li>
              </ol>
              <div className="mt-6 p-4 bg-[#F59E0B] bg-opacity-20 rounded-lg">
                <p className="text-[#166534] font-semibold mb-2">
                  Need Help?
                </p>
                <p className="text-[#6B7280] mb-4">
                  Our insurance coordinator can guide you through the application process and 
                  answer any questions about coverage options.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-[#065F46] text-white rounded-lg hover:bg-[#15803D] transition-colors font-medium"
                >
                  Contact Insurance Coordinator
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
