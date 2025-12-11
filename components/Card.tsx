import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "outlined" | "elevated";
}

export default function Card({ 
  children, 
  className = "", 
  hover = false,
  variant = "default"
}: CardProps) {
  const baseStyles = "bg-white rounded-xl transition-all duration-300";
  
  const variantStyles = {
    default: "shadow-sm border border-[#E5E7EB]",
    outlined: "border-2 border-[#E5E7EB] shadow-none",
    elevated: "shadow-md border border-[#E5E7EB]"
  };
  
  const hoverStyles = hover 
    ? "hover:shadow-lg hover:-translate-y-0.5 hover:border-[#166534]/20" 
    : "";
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} p-6 sm:p-7 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
