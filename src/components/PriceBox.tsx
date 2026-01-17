import { CTAButton } from "./CTAButton";
import { CountdownTimer } from "./CountdownTimer";
import { Check } from "lucide-react";

interface PriceBoxProps {
  showTimer?: boolean;
  showFeatures?: boolean;
}

export const PriceBox = ({ showTimer = true, showFeatures = false }: PriceBoxProps) => {
  const features = [
    "200 receitas deliciosas sem açúcar, glúten, nem laticínios (Valor R$97,00)",
    "Guia Visual para Ler Rótulos e Escolher como um Especialista (Valor R$59,00)",
    "Guia Expresso de Substituições Inteligentes (Valor R$47,00)",
    "Plano de 7 Dias para Controlar sua Glicose (Valor R$39,00)",
    "Receituário de Desejos Sem Culpa (Valor R$29,00)",
    "Mini Receituário Premium: Pães e Pizzas Saudáveis (Valor R$31,00)",
    "Receitas de Molhos e Patês para Diabéticos (Valor R$28,00)",
  ];

  return (
    <div className="bg-card rounded-xl md:rounded-2xl shadow-hero border border-border p-4 md:p-8 max-w-2xl mx-auto">
      {showTimer && (
        <div className="mb-4 md:mb-6">
          <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">A oferta expira em</p>
          <CountdownTimer />
        </div>
      )}

      {showFeatures && (
        <div className="mb-4 md:mb-6 space-y-1.5 md:space-y-2 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-foreground font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-4 md:mb-6">
        <p className="text-muted-foreground text-sm md:text-base">
          <span className="line-through">VALOR SEM DESCONTO: R$330,00</span>
        </p>
        <p className="text-base md:text-lg font-bold text-foreground mt-1 md:mt-2">SOMENTE HOJE:</p>
        <p className="text-4xl md:text-6xl font-heading font-black text-primary">
          R$9,90
        </p>
        <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
          PAGAMENTO ÚNICO COM ACESSO IMEDIATO!
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 md:gap-4">
        <CTAButton href="https://pay.lowify.com.br/checkout?product_id=LSY3I2">
          Quero Baixar Agora!
        </CTAButton>
      </div>

      <div className="mt-4 md:mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-urgency/10 text-urgency px-3 md:px-4 py-1.5 md:py-2 rounded-full">
          <span className="font-bold text-xs md:text-base">🔥 Últimas 7 unidades disponíveis</span>
        </div>
        <div className="mt-2 md:mt-3 bg-success/20 rounded-full h-3 md:h-4 overflow-hidden max-w-xs mx-auto">
          <div className="bg-success h-full w-[93%] rounded-full" />
        </div>
        <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">93 unidades vendidas</p>
      </div>
    </div>
  );
};
