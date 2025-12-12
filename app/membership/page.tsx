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

  const membershipTypes = [
    {
      name: 'General Member',
      description: 'One-time registration fee required. To obtain voting rights, must participate in monthly subscription for at least one year. Must be a resident of Hollis/Jamaica area in Queens County.',
      requirements: [
        'One-time registration fee',
        'Monthly subscription (for voting rights)',
        'Resident of Hollis/Jamaica area',
        'Agreement with organization purpose and bylaws',
      ],
      benefits: [
        'Access to community events',
        'Voting rights after 1 year of monthly subscription',
        'Eligibility for Executive Board after 2 years',
      ],
    },
    {
      name: 'Life Member',
      description: 'General members who maintain regular monthly subscription payments for a period of three years become Life Members with full rights and privileges.',
      requirements: [
        'Three years of regular monthly subscription',
        'Maintained active membership',
      ],
      benefits: [
        'All General Member benefits',
        'Full voting rights',
        'Life-long membership status',
        'Honored recognition',
      ],
    },
    {
      name: 'Advisory Board Member',
      description: 'Appointed by Executive Board from general members. Limited to nine (9) members. Provide advice and help organize events.',
      requirements: [
        'Appointment by Executive Board',
        'Community leadership',
        'Passion for organization mission',
      ],
      benefits: [
        'Provide guidance to Executive Board',
        'Help organize events',
        'Community insights and expertise',
        'Can participate in monthly subscription for voting rights',
      ],
    },
    {
      name: 'Founding Member',
      description: 'The individuals who initiated the formation of the organization. Always honored on all occasions.',
      requirements: [
        'Original founding members',
      ],
      benefits: [
        'Special recognition',
        'Steering Committee participation',
        'Honored at all events',
        'Historical recognition',
      ],
    },
    {
      name: 'Honorary Member',
      description: 'Distinguished persons honored by Executive Board based on experience and service towards the community.',
      requirements: [
        'Distinguished service',
        'Appointment by Executive Board',
      ],
      benefits: [
        'Honorific recognition',
        'Community appreciation',
        'Special events participation',
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
            <h2 className="heading-2 mb-6">Membership Types</h2>
            <p className="text-body text-lg max-w-3xl mx-auto mb-4">
              All residents residing in Hollis and Jamaica area in Queens County in the City of New York are eligible to become a member regardless of race, color, gender and nationality.
            </p>
            <p className="text-body text-sm text-neutral-600 max-w-2xl mx-auto">
              Membership subscriptions are based on the Calendar Year (January 1st to December 31st). Amount of membership subscription is determined by the Executive Board periodically. Paid subscriptions are non-refundable.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {membershipTypes.map((type, index) => (
              <div
                key={type.name}
                className="bg-white rounded-xl shadow-md border border-neutral-200 p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="heading-3 text-2xl">{type.name}</h3>
                  {index < 2 && (
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-body mb-6 text-neutral-700">{type.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary-600">Requirements</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary-600">Benefits</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={`/membership/apply?type=${encodeURIComponent(type.name)}`}
                    className="btn-primary inline-block"
                  >
                    Apply for {type.name}
                  </Link>
                </div>
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
                    Select the membership level that best fits your needs and budget. Our team can help you decide if you&apos;re unsure.
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
                    Fill out our membership application and submit your membership fee. You&apos;ll receive a welcome packet and membership card.
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
          <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-white hover:bg-primary-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Become a Member
          </Link>
      </div>
      </section>
    </div>
  );
}
