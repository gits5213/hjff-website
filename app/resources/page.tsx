import Link from "next/link";
import Card from "@/components/Card";
import { FileText, Download, HelpCircle, BookOpen } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "Constitution & Bylaws",
      description: "Complete governing documents of HJFF",
      icon: BookOpen,
      href: "/governance/bylaws",
      color: "#166534",
    },
    {
      title: "Welfare & Bereavement Policy",
      description: "Complete policy document outlining all procedures",
      icon: FileText,
      href: "/programs/welfare",
      color: "#F59E0B",
    },
    {
      title: "Beneficiary Claim Form",
      description: "Form to request welfare support for expenses",
      icon: Download,
      href: "#",
      color: "#0D9488",
    },
    {
      title: "Burial Preference Form",
      description: "Document your burial preferences for planning",
      icon: FileText,
      href: "#",
      color: "#166534",
    },
    {
      title: "Membership Form",
      description: "Apply to become a member of HJFF",
      icon: FileText,
      href: "#",
      color: "#F59E0B",
    },
    {
      title: "FAQ & Guidance",
      description: "What to do when a member dies - Quick help guide",
      icon: HelpCircle,
      href: "/programs/welfare",
      color: "#0D9488",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Resources
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Access important documents, forms, and information about HJFF governance and operations
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const content = (
              <Card variant="elevated" hover className="h-full">
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${resource.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: resource.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Card>
            );

            if (resource.href === "#") {
              return <div key={index}>{content}</div>;
            }

            return (
              <Link key={index} href={resource.href}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Quick Help Section */}
        <Card variant="elevated" className="bg-gradient-to-br from-[#BBF7D0] to-white">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
            Quick Help Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#166534] mb-3 text-lg">What to do when a member dies</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-2">
                <li>Notify WLIBSC committee immediately</li>
                <li>Collection stops for 12 hours</li>
                <li>Committee verifies and coordinates</li>
                <li>Funeral and burial arrangements</li>
                <li>40-day meal support begins</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-[#166534] mb-3 text-lg">How to get help quickly</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#6B7280] ml-2">
                <li>Contact WLIBSC committee directly</li>
                <li>Call our emergency support line</li>
                <li>Email info@hjff.org</li>
                <li>Visit our contact page</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
