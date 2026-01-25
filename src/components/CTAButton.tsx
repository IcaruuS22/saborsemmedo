import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  animationClass?: string;
}

export const CTAButton = ({ children, className, onClick, href, animationClass = "animate-pulse-slow" }: CTAButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "relative w-full max-w-md px-6 py-4 md:px-8 md:py-5 text-base md:text-xl font-heading font-bold",
          "bg-gradient-cta text-primary-foreground rounded-xl",
          "shadow-cta hover:shadow-lg transition-all duration-700",
          "hover:scale-105 active:scale-100",
          animationClass,
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full max-w-md px-6 py-4 md:px-8 md:py-5 text-base md:text-xl font-heading font-bold",
        "bg-gradient-cta text-primary-foreground rounded-xl",
        "shadow-cta hover:shadow-lg transition-all duration-700",
        "hover:scale-105 active:scale-100",
        animationClass,
        className
      )}
    >
      {children}
    </button>
  );
};
