import Link from "next/link";
import Card from "@/components/Card";
import { Calendar, MapPin, Clock, Users, Utensils, Trophy, Music } from "lucide-react";

export default function AnnualPicnic() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-12 md:p-16 mb-12 md:mb-16 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            HJFF Annual Community Picnic
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Summer 2025 • Queens, NY
          </p>
        </div>

        {/* What It Is */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              What It Is & Why It Matters
            </h2>
            <div className="space-y-4 text-[#6B7280]">
              <p className="text-base md:text-lg leading-relaxed">
                The HJFF Annual Family Picnic is our premier community event, designed to strengthen 
                bonds between members and their families. This day-long celebration brings together 
                generations for activities, food, entertainment, and meaningful connections.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong className="text-[#166534]">All members and their families are strongly 
                encouraged to attend.</strong> This event embodies our "One Team, One Dream" motto, 
                creating memories and building relationships that last throughout the year.
              </p>
            </div>
          </Card>
        </section>

        {/* Date, Time, Location */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#166534] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">Date</h3>
              <p className="text-base text-[#6B7280]">Summer 2025</p>
              <p className="text-sm text-[#6B7280] mt-2">Exact date TBA</p>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">Time</h3>
              <p className="text-base text-[#6B7280]">All Day Event</p>
              <p className="text-sm text-[#6B7280] mt-2">10:00 AM - 6:00 PM</p>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-[#0D9488] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#166534] mb-2">Location</h3>
              <p className="text-base text-[#6B7280]">Queens, NY</p>
              <p className="text-sm text-[#6B7280] mt-2">Specific venue TBA</p>
            </Card>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12 md:mb-16">
          <Card variant="elevated">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#166534] mb-6">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Utensils className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Delicious BBQ & Refreshments</h3>
                  <p className="text-sm text-[#6B7280]">Food for the whole family</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Kids Activities & Games</h3>
                  <p className="text-sm text-[#6B7280]">Fun for children of all ages</p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Sports Competitions</h3>
                  <p className="text-sm text-[#6B7280]">Friendly competitions and games</p>
                </div>
              </div>
              <div className="flex items-start">
                <Music className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Nasheed Performances</h3>
                  <p className="text-sm text-[#6B7280]">Cultural and spiritual performances</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Community Recognition</h3>
                  <p className="text-sm text-[#6B7280]">Awards and acknowledgments</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-[#166534] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#166534] mb-1">Fellowship & Networking</h3>
                  <p className="text-sm text-[#6B7280]">Connect with community members</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Registration & Volunteer */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card variant="elevated">
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-4">
                Registration & RSVP
              </h3>
              <p className="text-base text-[#6B7280] mb-6 leading-relaxed">
                Pre-registration helps us plan better and ensure we have enough food and activities 
                for everyone. While walk-ins are welcome, we encourage all members to register in advance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Register Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
            <Card variant="elevated">
              <h3 className="font-heading text-xl font-semibold text-[#166534] mb-4">
                Volunteer Opportunities
              </h3>
              <p className="text-base text-[#6B7280] mb-6 leading-relaxed">
                We need volunteers to help with setup, activities, food service, and cleanup. 
                Volunteering is a great way to contribute and connect with the community.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center px-6 py-3 bg-[#F59E0B] text-[#111827] rounded-lg hover:bg-[#D97706] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Sign Up to Volunteer
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          </div>
        </section>

        {/* Sponsorship */}
        <section>
          <Card variant="elevated" className="bg-gradient-to-br from-[#F59E0B]/10 to-white">
            <h3 className="font-heading text-xl font-semibold text-[#166534] mb-4">
              Sponsorship Opportunities
            </h3>
            <p className="text-base text-[#6B7280] mb-6 leading-relaxed">
              Help make our annual picnic even better by becoming a sponsor. Sponsors receive 
              recognition at the event and in our communications. Sponsorship helps cover costs 
              and allows us to provide more activities and better food for all attendees.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center px-6 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Learn About Sponsorship
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
}
