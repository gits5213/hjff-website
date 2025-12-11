import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  image?: string;
}

export default function Hero({ title, subtitle, primaryButton, secondaryButton, image }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-white via-[#F9FAFB] to-[#BBF7D0] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#166534] leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="px-8 py-4 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold text-center shadow-md hover:shadow-lg text-base md:text-lg transform hover:-translate-y-0.5"
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="px-8 py-4 bg-white text-[#166534] border-2 border-[#166534] rounded-lg hover:bg-[#F9FAFB] transition-all duration-200 font-semibold text-center shadow-sm hover:shadow-md text-base md:text-lg transform hover:-translate-y-0.5"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
          {image && (
            <div className="hidden lg:flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#166534] to-[#0D9488] rounded-3xl transform rotate-3 opacity-10 -z-10"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E5E7EB]">
                  <div className="aspect-square bg-gradient-to-br from-[#166534] via-[#15803D] to-[#0D9488] rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="flex flex-col items-center space-y-2 mb-6">
                        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <span className="text-white text-5xl xl:text-6xl font-bold block">HJFF</span>
                      <p className="text-white/80 text-sm mt-4">ONE TEAM ONE DREAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

