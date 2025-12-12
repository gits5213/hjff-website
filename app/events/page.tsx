import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    title: 'Community Safety Workshop',
    date: '2024-12-20',
    time: '6:00 PM - 8:00 PM',
    location: 'Community Center, Queens, NY',
    description: 'Learn about personal safety, emergency preparedness, and community resources.',
    category: 'Education',
  },
  {
    title: 'Constitutional Rights Seminar',
    date: '2024-12-27',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual Event',
    description: 'Understanding your fundamental rights and how to protect them.',
    category: 'Education',
  },
  {
    title: 'New Year Community Celebration',
    date: '2025-01-05',
    time: '5:00 PM - 9:00 PM',
    location: 'Hollis Community Center',
    description: 'Join us for a multicultural celebration to welcome the new year together.',
    category: 'Community',
  },
  {
    title: 'Job Fair & Career Resources',
    date: '2025-01-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Queens Library - Hollis Branch',
    description: 'Connect with employers and access career development resources.',
    category: 'Job Training',
  },
];

const pastEvents = [
  {
    title: 'Fall Community Picnic',
    date: '2024-10-12',
    description: 'A successful community gathering celebrating unity and diversity.',
  },
  {
    title: 'Back to School Resources Fair',
    date: '2024-09-08',
    description: 'Providing families with school supplies and educational resources.',
  },
];

export default function Events() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Education': 'bg-primary-100 text-primary-700',
      'Community': 'bg-accent-100 text-accent-700',
      'Job Training': 'bg-green-100 text-green-700',
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Events</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Join us for multicultural events, educational seminars, and community gatherings throughout the year.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12">Upcoming Events</h2>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="heading-3 text-2xl mb-4">{event.title}</h3>
                    <p className="text-body mb-6">{event.description}</p>
                    <div className="flex flex-wrap gap-6 text-neutral-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-primary-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* Past Events */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-neutral-200"
              >
                <div className="text-sm text-neutral-500 mb-2">{formatDate(event.date)}</div>
                <h3 className="heading-3 text-xl mb-3">{event.title}</h3>
                <p className="text-neutral-700">{event.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Want to be notified about upcoming events? Contact us to join our mailing list or follow us on social media.
            </p>
          <Link href="/contact" className="bg-transparent border-2 border-primary-300 text-white hover:bg-primary-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Get In Touch
            </Link>
          </div>
        </section>
    </div>
  );
}
