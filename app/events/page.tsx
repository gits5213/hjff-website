import Link from "next/link";
import EventCard from "@/components/EventCard";

export default function Events() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#166534] mb-4 leading-tight">
            Events & Activities
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            Join us for community gatherings, educational programs, and special celebrations
          </p>
        </div>

        {/* Featured Event - Annual Picnic */}
        <section className="mb-12 md:mb-16">
          <EventCard
            title="HJFF Annual Family Picnic"
            date="Summer 2025"
            location="Queens, NY"
            description="Our biggest event of the year! Join us for a day of family fun, community fellowship, kids activities, sports competitions, delicious BBQ, nasheed performances, and inspiring speeches. All members and their families are encouraged to attend this celebration of our community spirit."
            href="/events/annual-picnic"
            featured
          />
        </section>

        {/* Other Events */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <EventCard
              title="General Membership Meeting"
              date="First Saturday of Each Month"
              location="Queens, NY"
              description="Regular monthly meetings for all members to discuss community matters, vote on important decisions, review financial reports, and stay connected with leadership and fellow members."
              href="/events/calendar"
            />
            <EventCard
              title="Community Fundraiser"
              date="Spring 2025"
              location="Queens, NY"
              description="Join us for our annual community fundraiser supporting our welfare fund and charitable initiatives. Enjoy food, entertainment, and community fellowship while contributing to important causes."
              href="/events/calendar"
            />
            <EventCard
              title="Memorial & Dua Night"
              date="Quarterly"
              location="Queens, NY"
              description="A special evening of remembrance, prayer, and community support for families who have lost loved ones. Open to all members and their families."
              href="/events/calendar"
            />
            <EventCard
              title="Youth Educational Program"
              date="Monthly"
              location="Queens, NY"
              description="Educational programs designed for our youth members, focusing on community values, leadership development, and cultural awareness."
              href="/events/calendar"
            />
          </div>
        </section>

        {/* View Calendar CTA */}
        <section className="mt-12 md:mt-16">
          <div className="bg-gradient-to-br from-[#166534] to-[#15803D] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              View Full Event Calendar
            </h2>
            <p className="mb-6 text-gray-100 text-base md:text-lg">
              See all upcoming events, meetings, and activities in one place.
            </p>
            <Link
              href="/events/calendar"
              className="inline-flex items-center px-8 py-4 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Calendar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
