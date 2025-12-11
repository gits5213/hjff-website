import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  location?: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function EventCard({ title, date, location, description, href, featured = false }: EventCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-7 border ${featured ? "border-2 border-[#F59E0B] ring-2 ring-[#F59E0B]/20" : "border-[#E5E7EB]"} hover:-translate-y-1`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
        <h3 className="font-heading text-lg md:text-xl font-bold text-[#166534] leading-tight flex-1">{title}</h3>
        {featured && (
          <span className="inline-flex items-center bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap self-start">
            ⭐ Featured
          </span>
        )}
      </div>
      <div className="space-y-2.5 mb-4">
        <p className="text-sm md:text-base text-[#6B7280] flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date}</span>
        </p>
        {location && (
          <p className="text-sm md:text-base text-[#6B7280] flex items-center">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </p>
        )}
      </div>
      <p className="text-sm md:text-base text-[#111827] mb-5 leading-relaxed line-clamp-3">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center px-5 py-2.5 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-medium text-sm md:text-base shadow-sm hover:shadow-md group"
      >
        View Details
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
