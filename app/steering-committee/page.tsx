import { Users, Shield, Gavel, Handshake, Award } from 'lucide-react';
import Link from 'next/link';

export default function SteeringCommittee() {
  const functions = [
    {
      icon: Users,
      title: 'Form New Executive Board',
      description: 'The Steering Committee forms a Selection Committee to conduct the selection process of new Executive Board members.',
    },
    {
      icon: Shield,
      title: 'Resolve Disputes',
      description: 'Steps in to resolve issues among Executive Board members to save the organization when disagreements arise.',
    },
    {
      icon: Gavel,
      title: 'Provide Oversight',
      description: 'Ensures the organization continues to fulfill its duties and mission when the Executive Board faces challenges.',
    },
    {
      icon: Handshake,
      title: 'Legal Compliance',
      description: 'May solicit legal advice in compliance with the By-Laws to ensure proper governance and decision-making.',
    },
  ];

  const composition = [
    {
      title: 'Advisory Committee Members',
      description: 'Members of the Advisory Committee who provide guidance and expertise to the organization.',
    },
    {
      title: 'Founding Members',
      description: 'The individuals who initiated the formation of the organization, always honored on all occasions.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Steering Committee</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            The Steering Committee is formed from Advisory Committee and Founding Members, serving as a guiding force to ensure the organization's continued success and proper governance.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">About the Steering Committee</h2>
            <div className="space-y-4 text-body">
              <p>
                The Executive Board forms a Steering Committee from the members of the Advisory Committee and Founding Members. This committee serves as a vital component of our organizational structure, providing oversight and ensuring continuity.
              </p>
              <p>
                The Steering Committee will be effective as long as the organization and its By-Laws exist, serving as a stabilizing force and providing guidance when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composition */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Committee Composition</h2>
            <p className="text-body text-lg">
              The Steering Committee is composed of distinguished members who bring experience, wisdom, and commitment to the organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {composition.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-neutral-200 p-8"
              >
                <Award className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="heading-3 text-xl mb-4">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Key Functions</h2>
            <p className="text-body text-lg">
              The Steering Committee plays several critical roles in ensuring the organization's success and continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {functions.map((func, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                  <func.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{func.title}</h3>
                <p className="text-neutral-700">{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Process */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-white mb-8 text-center">Board Formation Process</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="heading-3 text-xl text-white mb-2">Steering Committee Formation</h3>
                    <p className="text-primary-100">
                      Two months before the end of the existing Board's tenure, the Executive Board forms a Steering Committee (7-11 members) to conduct the selection process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="heading-3 text-xl text-white mb-2">Selection Committee</h3>
                    <p className="text-primary-100">
                      The Steering Committee forms a Selection Committee (3-5 members) to conduct the selection of new Executive Board members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="heading-3 text-xl text-white mb-2">Alternative: Election</h3>
                    <p className="text-primary-100">
                      If the Executive Board cannot reach consensus to form a Steering Committee, a 3-member Election Commission will conduct elections instead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Committee */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Current Steering Committee</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Our Steering Committee members are dedicated to ensuring the organization's continued success. Committee member information will be available soon.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Learn More</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/executive-board" className="btn-primary">
              Executive Board
            </Link>
            <Link href="/governance" className="btn-secondary">
              Governance
            </Link>
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
