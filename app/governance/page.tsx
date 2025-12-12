import Link from 'next/link';
import { FileText, Users, Building2, Scale, Shield } from 'lucide-react';

export default function Governance() {
  const articles = [
    {
      number: 1,
      title: 'Name',
      description: 'HOLLIS JAMAICA FRIENDS AND FAMILY INC.',
    },
    {
      number: 2,
      title: 'Nature',
      description: 'A charitable, cultural, educational, social and not-for-profit organization incorporated in New York.',
    },
    {
      number: 3,
      title: 'Headquarters',
      description: 'Located primarily within Queens County of New York City.',
    },
    {
      number: 4,
      title: 'Purpose & Mission',
      description: '501(c)(3) charitable organization focused on community development, rights awareness, and quality of life improvement.',
    },
    {
      number: 5,
      title: 'Organogram',
      description: 'Executive Board and Steering Committee structure.',
    },
    {
      number: 6,
      title: 'Memberships',
      description: 'General, Life, Advisory Board, Founding, and Honorary memberships.',
    },
    {
      number: 7,
      title: 'Executive Board',
      description: '11-31 members including President, Vice Presidents, Secretary, Treasurer, and other officers.',
    },
    {
      number: 8,
      title: 'Steering Committee',
      description: 'Formed from advisory committee and founding members.',
    },
    {
      number: 9,
      title: 'Committees',
      description: 'Advisory and other committees as deemed appropriate.',
    },
    {
      number: 10,
      title: 'Officers, Agents & Employees',
      description: 'Executive Director, Program Directors, and staff structure.',
    },
    {
      number: 11,
      title: 'Miscellaneous',
      description: 'Fiscal year, corporate seal, contracts, and other operational matters.',
    },
  ];

  const executivePositions = [
    'President',
    'Vice President-1',
    'Vice President-2',
    'General Secretary',
    'Assistant General Secretary',
    'Treasurer',
    'Assistant Treasurer',
    'Organizing Secretary',
    'Assistant Organizing Secretary',
    'Public Relation Officer',
    'Parliamentarian',
    'Sergeant-at-Arms',
    '19 Members',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Governance & Bylaws</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            The Constitution and Bylaws of Hollis Jamaica Friends and Family Inc. govern our organization's structure, operations, and commitment to serving our community.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Organizational Structure</h2>
              <p className="text-body mb-6">
                HOLLIS JAMAICA FRIENDS AND FAMILY INC. operates under a clear governance structure with two functional bodies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <Building2 className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="heading-3 text-xl mb-3">Executive Board</h3>
                  <p className="text-neutral-700">
                    The main decision-making and execution body of the organization. Composed of 11-31 members serving three-year terms.
                  </p>
                </div>
                
                <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                  <Users className="w-10 h-10 text-accent-600 mb-4" />
                  <h3 className="heading-3 text-xl mb-3">Steering Committee</h3>
                  <p className="text-neutral-700">
                    Formed from advisory committee and founding members. Resolves disputes and assists in board formation.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Board Positions */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Executive Board Positions</h2>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {executivePositions.map((position, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-neutral-700">{position}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Constitution & Bylaws Articles</h2>
            <p className="text-body text-lg">
              Our Constitution and Bylaws are organized into 11 articles covering all aspects of our organization's governance and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article) => (
              <div
                key={article.number}
                className="bg-white rounded-xl shadow-md border border-neutral-200 p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary-600 font-medium mb-1">
                      Article {article.number}
                    </div>
                    <h3 className="heading-3 text-lg mb-2">{article.title}</h3>
                    <p className="text-sm text-neutral-600">{article.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Provisions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Key Governance Provisions</h2>
            
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-3">Executive Board Tenure</h3>
                <p className="text-body">
                  Executive Board members serve three-year terms. The board meets at least once monthly (minimum 10 meetings per year) and maintains proper minutes of all meetings.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-3">Quorum Requirements</h3>
                <p className="text-body mb-2">
                  A quorum is met when 50% of board members are present at board meetings. For annual meetings, quorum is required for due-paying general body members.
                </p>
                <ul className="list-disc list-inside space-y-1 text-body ml-4 mt-2">
                  <li>Regular board meetings: 50% of board members</li>
                  <li>Special meeting for bylaws amendments: 50% of due-paying members</li>
                  <li>Special meeting for dissolution: 75% of due-paying members</li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-3">Membership Eligibility</h3>
                <p className="text-body">
                  All residents residing in Hollis and Jamaica area in Queens County are eligible to become members regardless of race, color, gender, and nationality. Members must agree with the organization's purpose and accept the Constitution and Bylaws.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="heading-3 text-xl mb-3">Voting Rights</h3>
                <p className="text-body">
                  General members must participate in a monthly subscription program for at least one year to obtain voting rights in the annual general meeting. To be an executive board member, they must pay regular monthly subscription for a minimum of two years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bylaws Access */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h2 className="heading-2 text-white mb-6">Complete Constitution & Bylaws</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            For the complete, detailed Constitution and Bylaws document, including all articles, sections, and provisions, please contact us to request a copy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-white hover:bg-primary-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Request Full Bylaws
            </Link>
            <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
