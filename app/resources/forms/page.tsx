import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function Forms() {
  const forms = [
    {
      title: "Membership Application Form",
      description: "Apply to become a member of HJFF. Includes information about membership types and requirements.",
      category: "Membership",
    },
    {
      title: "Welfare Claim Form",
      description: "Request welfare support for funeral and burial expenses. Required documentation included.",
      category: "Welfare & Support",
    },
    {
      title: "Burial Preference Form",
      description: "Document your burial preferences for future planning. Helps families during difficult times.",
      category: "Welfare & Support",
    },
    {
      title: "Volunteer Sign-Up Form",
      description: "Sign up to volunteer for events, 40-day meal program, or other community activities.",
      category: "Get Involved",
    },
    {
      title: "Life Insurance Application",
      description: "Apply for Group Life Insurance coverage. Includes eligibility requirements and instructions.",
      category: "Life Insurance",
    },
    {
      title: "Event Registration Form",
      description: "Pre-register for events like the Annual Picnic. Helps us plan better for attendees.",
      category: "Events",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Forms & Downloads"
          subtitle="Download and complete forms for membership, welfare support, events, and more."
        />

        {/* Forms List */}
        <div className="space-y-6 mb-16">
          {forms.map((form, index) => (
            <Card key={index} hover>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#065F46] text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">
                      {form.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-[#065F46]">
                      {form.title}
                    </h3>
                  </div>
                  <p className="text-[#6B7280]">{form.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-[#065F46] text-white rounded-lg hover:bg-[#047857] transition-colors font-medium"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Documents */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-[#065F46] mb-8">
            Additional Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-2">
                Welfare Policy & Charter
              </h3>
              <p className="text-[#6B7280] mb-4">
                Complete policy document outlining all welfare and bereavement support procedures.
              </p>
              <a href="#" className="text-[#0EA5E9] hover:text-[#065F46] font-medium">
                Download PDF →
              </a>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-2">
                Welfare Handbook
              </h3>
              <p className="text-[#6B7280] mb-4">
                Comprehensive guide to understanding and accessing welfare support.
              </p>
              <a href="#" className="text-[#0EA5E9] hover:text-[#065F46] font-medium">
                Download PDF →
              </a>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-2">
                Membership Handbook
              </h3>
              <p className="text-[#6B7280] mb-4">
                Guide covering membership benefits, responsibilities, and procedures.
              </p>
              <a href="#" className="text-[#0EA5E9] hover:text-[#065F46] font-medium">
                Download PDF →
              </a>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-[#065F46] mb-2">
                Constitution & Bylaws
              </h3>
              <p className="text-[#6B7280] mb-4">
                Complete governing documents of HJFF.
              </p>
              <Link href="/resources/bylaws" className="text-[#0EA5E9] hover:text-[#065F46] font-medium">
                View Bylaws →
              </Link>
            </Card>
          </div>
        </section>

        {/* Instructions */}
        <section>
          <Card className="bg-[#F7FAFC]">
            <h3 className="font-heading text-xl font-semibold text-[#065F46] mb-4">
              Form Submission Instructions
            </h3>
            <div className="space-y-3 text-[#6B7280]">
              <p>
                <strong className="text-[#065F46]">1. Download:</strong> Click the download button for your desired form.
              </p>
              <p>
                <strong className="text-[#065F46]">2. Complete:</strong> Fill out all required fields accurately.
              </p>
              <p>
                <strong className="text-[#065F46]">3. Submit:</strong> Return completed forms via email or mail to the address provided on the form.
              </p>
              <p>
                <strong className="text-[#065F46]">4. Questions?</strong> Contact us if you need assistance or have questions about any form.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#065F46] text-white rounded-lg hover:bg-[#047857] transition-colors font-medium"
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
