import { Gift } from "lucide-react";

interface BonusCardProps {
  number: number;
  title: string;
  description: string;
  value: string;
  imageSrc?: string;
}

export const BonusCard = ({ number, title, description, value, imageSrc }: BonusCardProps) => {
  return (
    <div className="bg-card p-4 md:p-6 rounded-xl shadow-card border border-border hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        {imageSrc && (
          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-gold rounded-full flex items-center justify-center">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="text-sm md:text-base font-bold text-secondary">Bônus {number}</span>
          </div>
          <h4 className="text-sm md:text-lg font-heading font-bold text-foreground mb-2">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm md:text-base mb-2 md:mb-3">{description}</p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-sm md:text-base text-red-600 line-through">Valor: {value}</span>
            <span className="text-sm md:text-base font-bold text-success">HOJE GRÁTIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
