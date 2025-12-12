import { Heart, Handshake, Users, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SocialServices() {
  const services = [
    {
      icon: Users,
      title: 'Resource Navigation',
      description: 'Our team helps individuals and families navigate complex systems to access the resources they need, from healthcare to housing to financial assistance.',
    },
    {
      icon: Heart,
      title: 'Crisis Support',
      description: 'Immediate support for individuals and families facing emergencies or crises, with trained staff ready to help connect you with appropriate services.',
    },
    {
      icon: Handshake,
      title: 'Family Assistance',
      description: 'Comprehensive support for families, including childcare resources, educational support, and programs designed to strengthen family units.',
    },
    {
      icon: Phone,
      title: 'Referral Services',
      description: 'We maintain partnerships with various service providers and can refer you to trusted organizations that specialize in your specific needs.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Social Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Support services to help individuals and families navigate challenges and access the resources they need.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Comprehensive Support for Our Community</h2>
            <p className="text-body mb-4">
              Our Social Services programs are designed to provide holistic support for individuals and families facing various challenges. We understand that navigating life&apos;s difficulties can be overwhelming, and our goal is to make the process easier by providing guidance, resources, and direct assistance.
            </p>
            <p className="text-body">
              Our trained staff work with you to understand your unique situation and connect you with the appropriate services, whether those are provided directly by our organization or through our network of trusted partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.title} className="bg-neutral-50 p-8 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                  <service.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-700">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-12">
            <h3 className="heading-3 mb-4">How Our Services Work</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Initial Consultation</h4>
                  <p className="text-neutral-700">Contact us to discuss your needs. All consultations are confidential and respectful.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Assessment & Planning</h4>
                  <p className="text-neutral-700">We work with you to assess your situation and develop a plan to address your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Service Connection</h4>
                  <p className="text-neutral-700">We connect you with appropriate services and provide ongoing support as you navigate the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Get the Support You Need</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Our social services team is here to help. Reach out to learn more about available services and how we can assist you.
          </p>
          <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-flex items-center space-x-2">
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
