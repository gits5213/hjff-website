import Link from 'next/link';
import { GraduationCap, Briefcase, Heart, Users, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Educational Seminars',
    description: 'Comprehensive educational programs covering rights, safety, and civic engagement. Our seminars provide community members with essential knowledge about their constitutional rights, safety protocols, and how to effectively navigate government systems.',
    href: '/programs/education',
    features: [
      'Constitutional rights workshops',
      'Safety awareness training',
      'Civic engagement education',
      'Government navigation guidance',
    ],
  },
  {
    icon: Briefcase,
    title: 'Job Training',
    description: 'Professional development and skills training programs designed to empower community members with the tools they need to succeed in the workforce. We offer resume building, interview preparation, and skills-based training.',
    href: '/programs/job-training',
    features: [
      'Resume building workshops',
      'Interview preparation',
      'Skills-based training',
      'Career counseling',
    ],
  },
  {
    icon: Heart,
    title: 'Social Services',
    description: 'Support services to help individuals and families navigate challenges. Our social services team provides guidance, resources, and direct assistance for those in need.',
    href: '/programs/social-services',
    features: [
      'Resource navigation',
      'Crisis support',
      'Family assistance programs',
      'Referral services',
    ],
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Direct assistance and resources for community members in need. We connect individuals with essential services and provide direct support for housing, food security, and other basic needs.',
    href: '/programs/community',
    features: [
      'Housing assistance',
      'Food security programs',
      'Health resources',
      'Emergency support',
    ],
  },
];

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Our Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            We offer comprehensive programs designed to educate, empower, and support our community members in New York.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                    <program.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="heading-2 mb-4">{program.title}</h2>
                  <p className="text-body mb-6">{program.description}</p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={program.href}
                    className="inline-flex items-center space-x-2 btn-primary"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 h-full flex items-center justify-center">
                    <program.icon className="w-32 h-32 text-primary-600 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">Get Involved</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Interested in participating in our programs or want to learn more? Contact us to get started.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
