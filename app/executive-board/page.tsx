import { Users, Award, Shield, Briefcase, FileText, Speaker, Gavel, Handshake } from 'lucide-react';
import Link from 'next/link';

const executivePositions = [
  {
    icon: Award,
    title: 'President',
    description: 'Presides at meetings, ensures supervision and administration of business and affairs. All legal and fiduciary responsibilities vest in the President.',
    requirements: 'Minimum 2 years continuous and active membership',
  },
  {
    icon: Users,
    title: 'Vice President-1 & Vice President-2',
    description: 'Assist the President and may assume presidential duties when needed.',
    requirements: 'Minimum 2 years continuous and active membership',
  },
  {
    icon: FileText,
    title: 'General Secretary',
    description: 'Responsible for keeping accurate records of all meetings, maintaining official records, and ensuring all notices are duly given.',
    requirements: 'Minimum 2 years continuous and active membership',
  },
  {
    icon: Users,
    title: 'Assistant General Secretary',
    description: 'Assists the General Secretary in all duties and responsibilities.',
    requirements: 'Active membership',
  },
  {
    icon: Briefcase,
    title: 'Treasurer',
    description: 'Responsible for financial management and oversight, ensuring appropriate fiscal records are kept. Primary signatory of bank accounts.',
    requirements: 'Minimum 2 years continuous and active membership',
  },
  {
    icon: Users,
    title: 'Assistant Treasurer',
    description: 'Assists the Treasurer in financial management and oversight.',
    requirements: 'Active membership',
  },
  {
    icon: Handshake,
    title: 'Organizing Secretary',
    description: 'Helps grow general membership, organize events, and implement organizational goals through resource mobilization.',
    requirements: 'Active membership',
  },
  {
    icon: Users,
    title: 'Assistant Organizing Secretary',
    description: 'Assists the Organizing Secretary in membership growth and event organization.',
    requirements: 'Active membership',
  },
  {
    icon: Speaker,
    title: 'Public Relations Officer',
    description: 'Communicates organization mission, vision, values, and impact to the public. Handles marketing aspects including newsletters, donor communications, and media relations.',
    requirements: 'Active membership',
  },
  {
    icon: Gavel,
    title: 'Parliamentarian',
    description: 'Responsible for interpreting the Corporation\'s By-laws, legal documents, and resolutions. Provides legal advice to the Corporation.',
    requirements: 'Active membership',
  },
  {
    icon: Shield,
    title: 'Sergeant-at-Arms',
    description: 'Responsible for maintaining security, discipline, and order at all meetings and events of the Corporation.',
    requirements: 'Active membership',
  },
  {
    icon: Users,
    title: '19 Board Members',
    description: 'General board members who participate in decision-making and support organizational operations.',
    requirements: 'Active membership with voting rights',
  },
];

export default function ExecutiveBoard() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Executive Board</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our Executive Board is the main decision-making and execution body of the organization, serving three-year terms and meeting monthly to guide our mission forward.
          </p>
        </div>
      </section>

      {/* Board Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Board Structure</h2>
            <div className="space-y-4 text-body">
              <p>
                The Executive Board consists of 11-31 members serving three-year terms. The board meets at least once per month (minimum 10 meetings per year) and maintains proper minutes of all meetings.
              </p>
              <p>
                A quorum is met when 50% of board members are present. All board decisions are made through majority vote where a quorum is present.
              </p>
            </div>
          </div>

          {/* Key Requirements */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Key Requirements</h3>
            <ul className="space-y-2 text-body">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>All Executive Board members must be from amongst voting members of the organization</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>President, General Secretary, and Treasurer must have at least 2 years continuous and active membership</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Members are expected to attend meetings regularly and maintain active participation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>It is desirable that all Executive Members reside in Hollis/Jamaica in Queens County</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Board Positions */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Executive Board Positions</h2>
            <p className="text-body text-lg">
              The Executive Board consists of various leadership positions, each with specific responsibilities and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {executivePositions.map((position) => (
              <div
                key={position.title}
                className="bg-white rounded-xl shadow-md border border-neutral-200 p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <position.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{position.title}</h3>
                <p className="text-neutral-700 mb-4 text-sm">{position.description}</p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-primary-600 font-medium">{position.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Responsibilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Board Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-4">Decision-Making</h3>
                <ul className="space-y-2 text-body">
                  <li>• Review and approve funding applications</li>
                  <li>• Program planning and development</li>
                  <li>• Personnel policies and changes</li>
                  <li>• Hiring or terminating Executive Director</li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-4">Governance</h3>
                <ul className="space-y-2 text-body">
                  <li>• Establish procedures for shared decision-making</li>
                  <li>• Assist in fundraising activities</li>
                  <li>• Recruitment of volunteers</li>
                  <li>• Establishing linkages with other organizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Board Members */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">Current Executive Board</h2>
            <p className="text-xl text-primary-100 mb-8">
              Our current Executive Board members are dedicated community leaders working to advance our mission. Board member profiles and contact information will be available soon.
            </p>
            <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-white hover:bg-primary-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Contact the Board
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Learn More</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/governance" className="btn-primary">
              View Governance Structure
            </Link>
            <Link href="/steering-committee" className="btn-secondary">
              Steering Committee
            </Link>
            <Link href="/membership" className="btn-secondary">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
