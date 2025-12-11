import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function Committees() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Committees & Boards"
          subtitle="Learn about the leadership structure that guides HJFF's operations and mission."
        />

        {/* Executive Board */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-4">
              Executive Board
            </h2>
            <p className="text-[#6B7280] mb-6">
              The Executive Board provides strategic leadership and oversight for all organizational 
              activities, ensuring alignment with HJFF's mission, bylaws, and long-term goals.
            </p>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-3">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                <li>Policy development and strategic planning</li>
                <li>Financial oversight and budget approval</li>
                <li>Representing HJFF in official capacities</li>
                <li>Overseeing major organizational decisions</li>
                <li>Ensuring compliance with bylaws and regulations</li>
                <li>Appointing committee chairs and key positions</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Steering Committee */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-4">
              Steering Committee
            </h2>
            <p className="text-[#6B7280] mb-6">
              The Steering Committee coordinates day-to-day operations, event planning, and 
              community engagement initiatives. This committee works closely with members to 
              ensure smooth operations and active community participation.
            </p>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-3">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                <li>Organizing community events and activities</li>
                <li>Managing member communications</li>
                <li>Coordinating volunteer activities</li>
                <li>Planning and executing the Annual Picnic</li>
                <li>Facilitating general membership meetings</li>
                <li>Supporting fundraising initiatives</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* WLIBSC */}
        <section className="mb-16">
          <Card className="bg-[#F7FAFC]">
            <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-4">
              Welfare, Life Insurance & Bereavement Support Committee (WLIBSC)
            </h2>
            <p className="text-[#6B7280] mb-6">
              The WLIBSC is a specialized committee responsible for managing our comprehensive 
              welfare and bereavement support system. This committee ensures that families receive 
              timely, dignified support during their most difficult moments.
            </p>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-3">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                <li>Managing the $100 fund collection and distribution</li>
                <li>Coordinating funeral and burial support</li>
                <li>Organizing the 40-day meal program</li>
                <li>Verifying eligibility and processing claims</li>
                <li>Maintaining welfare policy compliance</li>
                <li>Providing compassionate support to grieving families</li>
                <li>Coordinating with life insurance providers</li>
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="/welfare-support"
                className="text-[#0EA5E9] hover:text-[#065F46] font-medium"
              >
                Learn more about Welfare & Support →
              </a>
            </div>
          </Card>
        </section>

        {/* Advisory Board */}
        <section>
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-4">
              Advisory Board
            </h2>
            <p className="text-[#6B7280] mb-6">
              Our Advisory Board provides guidance, expertise, and support to help HJFF achieve 
              its long-term goals and maintain high standards. Advisors bring diverse perspectives 
              and experience to help shape our strategic direction.
            </p>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-3">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                <li>Providing strategic guidance and recommendations</li>
                <li>Offering expertise in specialized areas</li>
                <li>Supporting organizational development</li>
                <li>Helping maintain high standards and best practices</li>
                <li>Connecting HJFF with broader community resources</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section className="mt-16">
          <Card className="bg-gradient-to-br from-[#065F46] to-[#047857] text-white">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Interested in Serving?
            </h2>
            <p className="mb-6 text-gray-100">
              HJFF is always looking for dedicated members to serve on committees and boards. 
              If you're interested in contributing your time and expertise, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-[#065F46] rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Us
            </a>
          </Card>
        </section>
      </div>
    </div>
  );
}
