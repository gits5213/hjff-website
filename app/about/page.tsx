import { Shield, Users, Heart, Target, Award, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and accountability in all our endeavors.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We care deeply about the well-being of every community member we serve.',
    },
    {
      icon: Users,
      title: 'Inclusion',
      description: 'We welcome and celebrate diversity, ensuring everyone has a voice.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We believe in the power of working together with government, community partners, and residents.',
    },
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Community Members Served',
    },
    {
      number: '50+',
      label: 'Events Hosted',
    },
    {
      number: '20+',
      label: 'Programs Launched',
    },
    {
      number: '15+',
      label: 'Partnerships Formed',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Learn more about Hollis Jamaica Friends and Family Inc. and our commitment to building stronger, more empowered communities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="mission" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Hollis Jamaica Friends and Family Inc. was founded with a clear vision: to create a nonprofit organization that would serve as a bridge between the community and the resources, rights, and opportunities they deserve. Our organization was born from a recognition that many community members needed better access to information about their rights, safety resources, and support systems.
                </p>
                <p>
                  What started as a grassroots initiative has grown into a recognized charitable organization that collaborates with government agencies, community leaders, and residents to address pressing community concerns. We believe that informed, empowered communities are the foundation of a thriving society.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <div className="space-y-4 text-body">
                <p>
                  Our mission is threefold:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body ml-4">
                  <li><strong>Raise Awareness:</strong> We educate community members about their safety, social, and constitutional rights, ensuring everyone knows how to protect themselves and advocate for their interests.</li>
                  <li><strong>Foster Collaboration:</strong> We work directly with government agencies and officials to address community concerns, serving as a voice for residents and facilitating productive dialogue.</li>
                  <li><strong>Improve Quality of Life:</strong> Through our comprehensive programs—including multicultural events, educational seminars, job training, and social services—we provide tangible support that enhances the daily lives of New Yorkers.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Our Vision</h2>
              <p className="text-body">
                We envision a New York where every community member is informed, empowered, and connected. A place where rights are understood, voices are heard, and opportunities are accessible to all. Through our work, we strive to build resilient communities that support one another and thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Values</h2>
            <p className="text-body text-lg">
              These core values guide everything we do and shape how we interact with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-md text-center"
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

      {/* Achievements Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">Our Impact</h2>
            <p className="text-xl text-primary-100">
              Numbers that reflect our commitment to the community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Leadership</h2>
            <p className="text-body text-lg">
              Our dedicated team of leaders works tirelessly to advance our mission and serve the community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <p className="text-body text-center">
                Our leadership team is composed of passionate community advocates, experienced professionals, and dedicated volunteers who bring diverse expertise and shared commitment to our organization&apos;s mission. We are currently building out our leadership page with detailed profiles of our board members and key team members.
              </p>
              <div className="text-center mt-6">
                <Link href="/contact" className="btn-primary">
                  Contact Our Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Get Involved</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Ready to make a difference? Join us in building stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary">
              Become a Member
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
