import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";

export default function Calendar() {
  const events = [
    {
      title: "HJFF Annual Family Picnic",
      date: "Summer 2025",
      location: "Queens, NY",
      description: "Our biggest event of the year! Join us for a day of family fun, community fellowship, kids activities, sports competitions, delicious BBQ, nasheed performances, and inspiring speeches.",
      href: "/events/annual-picnic",
      featured: true,
    },
    {
      title: "General Membership Meeting",
      date: "First Saturday of Each Month",
      location: "Queens, NY",
      description: "Regular monthly meetings for all members to discuss community matters, vote on important decisions, review financial reports, and stay connected.",
      href: "/events",
    },
    {
      title: "Community Fundraiser",
      date: "Spring 2025",
      location: "Queens, NY",
      description: "Join us for our annual community fundraiser supporting our welfare fund and charitable initiatives.",
      href: "/events",
    },
    {
      title: "Memorial & Dua Night",
      date: "Quarterly",
      location: "Queens, NY",
      description: "A special evening of remembrance, prayer, and community support for families who have lost loved ones.",
      href: "/events",
    },
    {
      title: "Youth Educational Program",
      date: "Monthly",
      location: "Queens, NY",
      description: "Educational programs designed for our youth members, focusing on community values, leadership development, and cultural awareness.",
      href: "/events",
    },
    {
      title: "Community Service Day",
      date: "Fall 2025",
      location: "Queens, NY",
      description: "A day dedicated to giving back to our local community through various service projects and initiatives.",
      href: "/events",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Event Calendar"
          subtitle="Stay up to date with all HJFF events, meetings, and activities throughout the year."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              href={event.href}
              featured={event.featured}
            />
          ))}
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-16 bg-gradient-to-br from-[#065F46] to-[#047857] rounded-lg p-8 text-white text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="mb-6 text-gray-100">
            Want to receive notifications about upcoming events? Contact us to be added to our 
            event notification list.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#065F46] rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
