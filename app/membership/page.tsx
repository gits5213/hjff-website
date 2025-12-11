import { Users, Heart, Handshake, CheckCircle, Star, Gift } from 'lucide-react';
import Link from 'next/link';

export default function Membership() {
  const benefits = [
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Join a network of like-minded individuals dedicated to improving our community.',
    },
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Your membership directly supports programs that help New Yorkers in need.',
    },
    {
      icon: Handshake,
      title: 'Exclusive Access',
      description: 'Access to members-only events, workshops, and networking opportunities.',
    },
    {
      icon: Star,
      title: 'Leadership Opportunities',
      description: 'Get involved in committees and take on leadership roles within the organization.',
    },
  ];

  const membershipLevels = [
    {
      name: 'Individual',
      price: '25',
      period: 'per year',
      features: [
        'Voting rights at annual meetings',
        'Access to all community events',
        'Monthly newsletter',
        'Discounts on workshops and seminars',
      ],
    },
    {
      name: 'Family',
      price: '50',
      period: 'per year',
      features: [
        'All Individual benefits',
        'Membership for entire household',
        'Priority registration for events',
        'Family-focused programs access',
      ],
    },
    {
      name: 'Supporter',
      price: '100',
      period: 'per year',
      features: [
        'All Family benefits',
        'Recognition in annual report',
        'Invitation to donor appreciation events',
        'Complimentary event tickets',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Become a Member</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Join Hollis Jamaica Friends and Family Inc. and become part of a community dedicated to making a positive impact in New York.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="heading-2 mb-6">Why Become a Member?</h2>
            <p className="text-body text-lg">
              Membership in HJFF Inc. means joining a community of individuals who are committed to creating positive change. Your membership supports our programs and gives you opportunities to get directly involved in our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Levels */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Membership Levels</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Choose the membership level that works best for you. All memberships are annual and help support our community programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipLevels.map((level) => (
              <div
                key={level.name}
                className="bg-white rounded-xl shadow-md border border-neutral-200 p-8 flex flex-col"
              >
                <h3 className="heading-3 text-2xl mb-4">{level.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">${level.price}</span>
                  <span className="text-neutral-600 ml-2">{level.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {level.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-primary text-center block"
                >
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">How to Join</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="heading-3 text-xl mb-2">Contact Us</h3>
                  <p className="text-body">
                    Reach out to us through our contact form, email, or phone to express your interest in becoming a member.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="heading-3 text-xl mb-2">Choose Your Level</h3>
                  <p className="text-body">
                    Select the membership level that best fits your needs and budget. Our team can help you decide if you're unsure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="heading-3 text-xl mb-2">Complete Registration</h3>
                  <p className="text-body">
                    Fill out our membership application and submit your membership fee. You'll receive a welcome packet and membership card.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="heading-3 text-xl mb-2">Get Involved</h3>
                  <p className="text-body">
                    Start attending events, join committees, and make a difference in your community!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Become a member today and help us build stronger, more empowered communities in New York.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
