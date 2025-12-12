import { Users, Home, Utensils, Heart, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CommunitySupport() {
  const services = [
    {
      icon: Home,
      title: 'Housing Assistance',
      description: 'We provide guidance and resources for housing-related needs, including information about tenant rights, housing programs, and emergency housing resources.',
    },
    {
      icon: Utensils,
      title: 'Food Security Programs',
      description: 'Access to food assistance programs, community food banks, and nutrition education to ensure no family goes hungry.',
    },
    {
      icon: Heart,
      title: 'Health Resources',
      description: 'Connecting community members with healthcare services, health insurance enrollment assistance, and wellness programs.',
    },
    {
      icon: Users,
      title: 'Emergency Support',
      description: 'Immediate assistance for families facing crises, including emergency funds, supplies, and rapid response resources.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Community Support Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Direct assistance and resources for community members in need. We&apos;re here to help connect you with essential services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">How We Support Our Community</h2>
            <p className="text-body mb-4">
              Our Community Support programs are designed to provide direct assistance to individuals and families facing various challenges. We understand that sometimes people need immediate help navigating systems, accessing resources, or getting through difficult times.
            </p>
            <p className="text-body">
              We work closely with government agencies, nonprofit partners, and community organizations to ensure that community members have access to the support they need when they need it.
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

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
            <h3 className="heading-3 mb-4">How to Access Support</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Contact Our Team</h4>
                  <p className="text-neutral-700">Reach out via phone, email, or visit our office to discuss your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Assessment</h4>
                  <p className="text-neutral-700">We&apos;ll work with you to understand your situation and identify the best resources.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Resource Connection</h4>
                  <p className="text-neutral-700">We'll connect you with appropriate services and provide ongoing support as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Need Support?</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to our team to learn more about available resources and support services.
          </p>
          <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
