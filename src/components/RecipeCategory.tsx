interface RecipeCategoryProps {
  title: string;
  description: string;
  imageLabel?: string;
  reverse?: boolean;
  imageSrc?: string;
}

export const RecipeCategory = ({ 
  title, 
  description, 
  imageLabel,
  reverse = false,
  imageSrc
}: RecipeCategoryProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 items-center">
      <div className="w-full">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageLabel || title} 
            className="w-full aspect-video object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full aspect-video bg-accent/50 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center">
            <span className="text-sm font-medium text-primary/60">{imageLabel || title}</span>
          </div>
        )}
      </div>
      <div className="w-full text-center">
        <h3 className="text-lg md:text-2xl font-heading font-bold text-primary mb-2 md:mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};
