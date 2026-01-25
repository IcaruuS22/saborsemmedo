import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "square" | "video" | "wide" | "tall";
  className?: string;
}

export const ImagePlaceholder = ({ 
  label = "Imagem", 
  aspectRatio = "video",
  className 
}: ImagePlaceholderProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <div className={cn(
      "relative bg-accent/50 border-2 border-dashed border-primary/30 rounded-xl",
      "flex flex-col items-center justify-center gap-3",
      aspectClasses[aspectRatio],
      className
    )}>
      <ImageIcon className="w-12 h-12 text-primary/40" />
      <span className="text-sm font-medium text-primary/60">{label}</span>
    </div>
  );
};
