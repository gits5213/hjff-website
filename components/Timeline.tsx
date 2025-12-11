interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative pl-4 md:pl-6">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#166534] to-[#15803D]"></div>
      <div className="space-y-8 md:space-y-10">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            <div className="absolute left-2 md:left-3 w-4 h-4 md:w-5 md:h-5 bg-[#166534] rounded-full border-4 border-white shadow-md z-10"></div>
            <div className="ml-8 md:ml-12 pt-1">
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#166534]/10 text-[#166534] rounded-full text-xs md:text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <h3 className="font-heading text-base md:text-lg font-semibold text-[#166534]">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed ml-9 md:ml-10">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
