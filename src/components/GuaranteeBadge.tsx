import { Shield } from "lucide-react";

export const GuaranteeBadge = () => {
  return (
    <div className="bg-gradient-gold p-0.5 md:p-1 rounded-xl md:rounded-2xl max-w-2xl mx-auto">
      <div className="bg-card rounded-lg md:rounded-xl p-4 md:p-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-gold rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">
              GARANTIA DE SATISFAÇÃO COM 0 RISCOS
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Tenho certeza de que este receituário vai superar suas expectativas. Por isso, 
              oferecemos uma garantia de satisfação total de 7 dias. Se não for o que você 
              esperava, é só nos escrever e devolvemos 100% do seu dinheiro, sem nenhuma pergunta!
            </p>
            <p className="text-primary font-semibold mt-2 md:mt-3 text-sm md:text-base">
              O risco é meu. Você só dá o passo para uma vida mais livre e deliciosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};