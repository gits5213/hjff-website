interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  size = "md"
}: SectionTitleProps) {
  const sizeStyles = {
    sm: "text-2xl md:text-3xl",
    md: "text-2xl md:text-3xl lg:text-4xl",
    lg: "text-3xl md:text-4xl lg:text-5xl"
  };
  
  return (
    <div className={`mb-8 md:mb-10 lg:mb-12 ${center ? "text-center mx-auto" : ""}`}>
      <h2 className={`font-heading ${sizeStyles[size]} font-bold text-[#166534] mb-3 md:mb-4 leading-tight ${center ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-[#6B7280] leading-relaxed max-w-3xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
