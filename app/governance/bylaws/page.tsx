import Link from "next/link";
import Card from "@/components/Card";
import { FileText, Download } from "lucide-react";

export default function Bylaws() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Constitution & Bylaws
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Our governing documents that define HJFF's structure, purpose, and operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <Card variant="elevated" className="lg:col-span-2">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              Overview
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                The Constitution and Bylaws of Hollis Jamaica Friends & Family Inc. establish 
                the legal framework, organizational structure, and operational guidelines for 
                our organization. These documents ensure transparency, accountability, and 
                consistent governance.
              </p>
              <div>
                <h3 className="font-semibold text-[#166534] mb-3 text-lg">Key Sections Include:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                  <li>Article 4: Purpose & Mission</li>
                  <li>Organizational Structure (Executive Board, Steering Committee, Advisory Board)</li>
                  <li>Membership Types and Requirements</li>
                  <li>Welfare, Life Insurance & Bereavement Support Committee (WLIBSC)</li>
                  <li>Financial Management and Reporting</li>
                  <li>Meeting Procedures and Voting Rights</li>
                  <li>Amendment Procedures</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="bg-gradient-to-br from-[#166534] to-[#15803D] text-white">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 mr-3" />
              <h3 className="font-heading text-xl font-bold">Download</h3>
            </div>
            <p className="text-gray-100 mb-6 text-sm">
              Access the complete Constitution & Bylaws document for detailed information about 
              all provisions, procedures, and governance structures.
            </p>
            <a
              href="#"
              className="inline-flex items-center w-full justify-center px-6 py-3 bg-white text-[#166534] rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
