import { GraduationCap, Shield, BookOpen, Users, CheckCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function EducationalSeminars() {
  const seminars = [
    {
      icon: Shield,
      title: 'Constitutional Rights',
      description: 'Learn about your fundamental rights as a citizen, including freedom of speech, assembly, and protection against discrimination.',
    },
    {
      icon: BookOpen,
      title: 'Safety Awareness',
      description: 'Understand personal safety protocols, emergency preparedness, and how to access safety resources in your community.',
    },
    {
      icon: Users,
      title: 'Civic Engagement',
      description: 'Discover how to effectively participate in local government, attend community meetings, and make your voice heard.',
    },
    {
      icon: FileText,
      title: 'Government Navigation',
      description: 'Learn how to navigate government systems, access public services, and work effectively with government agencies.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Educational Seminars</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Empowering community members with knowledge about their rights, safety, and how to effectively engage with government systems.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Knowledge is Power</h2>
            <p className="text-body mb-4">
              Our Educational Seminars are designed to provide community members with essential knowledge about their rights, safety protocols, and civic engagement. We believe that an informed community is an empowered community.
            </p>
            <p className="text-body">
              Our seminars cover a wide range of topics, from understanding your constitutional rights to learning how to effectively navigate government systems. All seminars are conducted by knowledgeable facilitators and include interactive components to ensure participants can apply what they learn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {seminars.map((seminar) => (
              <div key={seminar.title} className="bg-neutral-50 p-8 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                  <seminar.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{seminar.title}</h3>
                <p className="text-neutral-700">{seminar.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
            <h3 className="heading-3 mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Expert-led presentations</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Interactive Q&A sessions</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Take-home resources and materials</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Networking opportunities with fellow participants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Join Our Next Seminar</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Check our events calendar to see upcoming educational seminars and register to attend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary">
              View Events
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
