import Link from 'next/link';
import { Shield, Users, GraduationCap, Calendar, Heart, Handshake, BookOpen, Briefcase } from 'lucide-react';

export default function Home() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Create Awareness',
      description: 'Create awareness among the community concerning their safety, social and constitutional rights.',
    },
    {
      icon: Handshake,
      title: 'Government Collaboration',
      description: 'Work with government agencies, community-based organizations and elected officials to resolve community issues.',
    },
    {
      icon: Heart,
      title: 'Quality of Life',
      description: 'Support initiatives and programs to improve the quality of life for residents in New York State.',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Engage in multicultural events, educational programs, job training, and social services.',
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: 'Educational Seminars',
      description: 'Comprehensive educational programs covering rights, safety, and civic engagement.',
      href: '/programs/education',
    },
    {
      icon: Briefcase,
      title: 'Job Training',
      description: 'Professional development and skills training to empower community members.',
      href: '/programs/job-training',
    },
    {
      icon: Heart,
      title: 'Social Services',
      description: 'Support services to help individuals and families navigate challenges.',
      href: '/programs/social-services',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Direct assistance and resources for community members in need.',
      href: '/programs/community',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Building Stronger Communities Together
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-6 leading-relaxed">
              A charitable, cultural, educational, social and not-for-profit organization incorporated in Queens County, New York, dedicated to creating awareness about safety, social and constitutional rights while improving quality of life for residents of New York State.
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-white mb-8">
              &quot;ONE TEAM ONE DREAM&quot;
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                Join Us
              </Link>
              <Link href="/donate" className="btn-secondary border-white text-white hover:bg-white/10">
                Donate
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Mission</h2>
            <p className="text-body text-lg mb-4">
              HOLLIS JAMAICA FRIENDS AND FAMILY INC. is a socio-economic and community development organization. Our mission includes:
            </p>
            <ul className="text-left space-y-3 text-body max-w-3xl mx-auto">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Create awareness among the community and community at large concerning their safety, social and constitutional rights</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Work with various government agencies, community-based organizations and elected officials to communicate and resolve issues and concerns of the people living in the community</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Act as an umbrella organization to create, support, sponsor initiatives and programs to help improve the quality of life for residents living in the State of New York</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Engage in multicultural events, seminars, educational programs, job training programs and provide other social services to the community</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Programs</h2>
            <p className="text-body text-lg">
              We offer a comprehensive range of programs designed to support, educate, and empower our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-neutral-200 hover:border-primary-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                      <program.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-xl mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600">{program.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to volunteer, become a member, or partner with us, we welcome your support in building stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
              Become a Member
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
