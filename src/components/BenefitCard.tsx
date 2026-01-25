import { cn } from "@/lib/utils";

interface BenefitCardProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

export const BenefitCard = ({ emoji, title, description, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "bg-card p-4 md:p-6 rounded-xl shadow-card border border-border",
      "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">{emoji}</span>
      <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
