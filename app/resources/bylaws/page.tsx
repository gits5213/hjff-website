import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function Bylaws() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Bylaws & Constitution"
          subtitle="Our governing documents that define HJFF's structure, purpose, and operations."
        />

        {/* Constitution Overview */}
        <section className="mb-16">
          <Card>
            <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-4">
              Constitution & Bylaws Overview
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p>
                The Constitution and Bylaws of Hollis Jamaica Friends & Family Inc. establish 
                the legal framework, organizational structure, and operational guidelines for 
                our organization. These documents ensure transparency, accountability, and 
                consistent governance.
              </p>
              <p>
                Key sections include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Article 4: Purpose & Mission</li>
                <li>Organizational Structure (Executive Board, Steering Committee, Advisory Board)</li>
                <li>Membership Types and Requirements</li>
                <li>Welfare, Life Insurance & Bereavement Support Committee (WLIBSC)</li>
                <li>Financial Management and Reporting</li>
                <li>Meeting Procedures and Voting Rights</li>
                <li>Amendment Procedures</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Key Sections */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-8">
            Key Sections
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading text-xl font-semibold text-[#065F46] mb-3">
                Article 4: Purpose & Mission
              </h3>
              <p className="text-[#6B7280]">
                Defines HJFF's core purpose: to serve our community through charitable initiatives, 
                multicultural events, educational programs, and comprehensive welfare support. 
                Emphasizes our commitment to faith, care, and unity under the motto "One Team, One Dream."
              </p>
            </Card>

            <Card>
              <h3 className="font-heading text-xl font-semibold text-[#065F46] mb-3">
                Organizational Structure
              </h3>
              <p className="text-[#6B7280] mb-4">
                Outlines the three-tier governance structure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] ml-4">
                <li><strong>Executive Board:</strong> Strategic leadership and policy oversight</li>
                <li><strong>Steering Committee:</strong> Day-to-day operations and event coordination</li>
                <li><strong>Advisory Board:</strong> Guidance and expertise</li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-heading text-xl font-semibold text-[#065F46] mb-3">
                Membership Provisions
              </h3>
              <p className="text-[#6B7280]">
                Details the five membership types (General, Life, Advisory, Founding, Honorary), 
                membership requirements, monthly subscription obligations, voting rights, and 
                member responsibilities including funeral attendance obligations.
              </p>
            </Card>

            <Card>
              <h3 className="font-heading text-xl font-semibold text-[#065F46] mb-3">
                WLIBSC Framework
              </h3>
              <p className="text-[#6B7280]">
                Establishes the Welfare, Life Insurance & Bereavement Support Committee, outlining 
                its responsibilities, the $100 fund system, funeral and burial support procedures, 
                and the 40-day meal program.
              </p>
            </Card>
          </div>
        </section>

        {/* Download */}
        <section>
          <Card className="bg-gradient-to-br from-[#065F46] to-[#047857] text-white">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Download Full Documents
            </h2>
            <p className="mb-6 text-gray-100">
              Access the complete Constitution & Bylaws document for detailed information about 
              all provisions, procedures, and governance structures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-white text-[#065F46] rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
              >
                Download Constitution & Bylaws (PDF)
              </a>
              <a
                href="/resources"
                className="px-6 py-3 bg-[#FBBF24] text-[#1F2933] rounded-lg hover:bg-[#F59E0B] transition-colors font-medium text-center"
              >
                Back to Resources
              </a>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
