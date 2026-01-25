import showcase1 from "@/assets/showcase-1.webp";
import showcase2 from "@/assets/showcase-2.webp";
import showcase3 from "@/assets/showcase-3.webp";
import showcase4 from "@/assets/showcase-4.webp";

const recipes = [
  { name: "Ensopado de Lentilha com Legumes", image: showcase1 },
  { name: "Salmão Grelhado com Molho de Cogumelos", image: showcase2 },
  { name: "Torrada com Abacate, Ovo e Tomate-Cereja", image: showcase3 },
  { name: "Salmão Grelhado com Quinoa e Legumes", image: showcase4 },
];

export const RecipeShowcase = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="group">
          <div className="bg-card rounded-lg md:rounded-xl overflow-hidden shadow-card border border-border hover:shadow-lg transition-all duration-300">
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              className="w-full aspect-square object-cover"
              loading="lazy"
              decoding="async"
          />
          <div className="p-2 md:p-3 text-center">
            <p className="text-sm md:text-base font-semibold text-foreground leading-tight">{recipe.name}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};
