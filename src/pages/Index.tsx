import { Heart, Users, Utensils, Check } from "lucide-react";
import { lazy, Suspense } from "react";
const BenefitCard = lazy(() => import("@/components/BenefitCard").then(m => ({ default: m.BenefitCard })));
const RecipeCategory = lazy(() => import("@/components/RecipeCategory").then(m => ({ default: m.RecipeCategory })));
const BonusCard = lazy(() => import("@/components/BonusCard").then(m => ({ default: m.BonusCard })));
const RatingSummary = lazy(() => import("@/components/RatingSummary").then(m => ({ default: m.RatingSummary })));
const PriceBox = lazy(() => import("@/components/PriceBox").then(m => ({ default: m.PriceBox })));
const TestimonialPlaceholder = lazy(() => import("@/components/TestimonialPlaceholder").then(m => ({ default: m.TestimonialPlaceholder })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const GuaranteeBadge = lazy(() => import("@/components/GuaranteeBadge").then(m => ({ default: m.GuaranteeBadge })));
const StatCard = lazy(() => import("@/components/StatCard").then(m => ({ default: m.StatCard })));
const RecipeShowcase = lazy(() => import("@/components/RecipeShowcase").then(m => ({ default: m.RecipeShowcase })));
import { CTAButton } from "@/components/CTAButton";

// Images
import heroProduct from "@/assets/hero-product.webp";
import category1 from "@/assets/category-1.webp";
import category2 from "@/assets/category-2.webp";
import category3 from "@/assets/category-3.webp";
import category4 from "@/assets/category-4.webp";
import category5 from "@/assets/category-5.webp";
import category6 from "@/assets/category-6.webp";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";
import bonus4 from "@/assets/bonus-4.webp";
import bonus5 from "@/assets/bonus-5.webp";
import bonus6 from "@/assets/bonus-6.webp";

const Index = () => {
  const benefits = [
    {
      emoji: "🩺",
      title: "Glicose controlada sem esforço",
      description: "Cada receita foi criada para manter seus níveis de açúcar sob controle enquanto ajuda seu corpo a emagrecer de forma natural e segura. Sem comprimidos, sem passar fome e sem medo."
    },
    {
      emoji: "😋",
      title: "Comida que você realmente aprecia",
      description: "Experimente cafés da manhã, almoços, jantares e sobremesas cheios de sabor, sem açúcar nem remorso. Porque cuidar da sua saúde não deveria significar comer 'sempre a mesma coisa' ou se sentir limitado."
    },
    {
      emoji: "🧘",
      title: "Menos estresse, mais calma",
      description: "Evite os altos e baixos de açúcar e os desejos descontrolados. Com receitas equilibradas, você notará menos ansiedade e mais clareza mental desde os primeiros dias."
    },
    {
      emoji: "⚡",
      title: "Energia e vitalidade o dia todo",
      description: "Diga adeus ao cansaço e às quedas de açúcar. Estas receitas ajudam você a se sentir ativo, leve, satisfeito e com a mente clara da manhã até a noite."
    },
    {
      emoji: "😴",
      title: "Melhore seu sono e seu humor",
      description: "Quando sua glicose está estável, você dorme melhor, acorda renovado e seu humor melhora. Você notará a mudança desde os primeiros dias."
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Comida que une sua família",
      description: "Prepare refeições deliciosas e seguras que todos apreciam, sem ter que cozinhar em dobro ou se sentir diferente à mesa."
    }
  ];

  const bonuses = [
    {
      number: 1,
      title: "Guia Visual para Ler Rótulos e Escolher como um Especialista",
      description: "Descubra como identificar os ingredientes que alteram sua glicose e aprenda a escolher produtos realmente saudáveis sem se confundir com rótulos enganosos.",
      value: "R$59,00",
      imageSrc: bonus1
    },
    {
      number: 2,
      title: "Guia Expresso de Substituições Inteligentes",
      description: "Transforme qualquer receita em uma versão segura para sua glicose. Aprenda quais ingredientes usar e quais evitar, sem passar horas lendo rótulos.",
      value: "R$47,00",
      imageSrc: bonus2
    },
    {
      number: 3,
      title: "Plano de 7 Dias para Controlar sua Glicose",
      description: "Sua semana completamente organizada para manter seus níveis estáveis, com cafés da manhã, almoços, jantares e lanches que fazem você se sentir satisfeito.",
      value: "R$39,00",
      imageSrc: bonus3
    },
    {
      number: 4,
      title: "Receituário de Desejos Sem Culpa",
      description: "Aproveite biscoitos e lanches doces sem açúcar nem medo. Satisfaça seus desejos de forma segura e deliciosa, sem alterar sua glicose.",
      value: "R$29,00",
      imageSrc: bonus4
    },
    {
      number: 5,
      title: "Mini Receituário Premium: Pães e Pizzas Saudáveis",
      description: "Recupere os alimentos que você mais ama, sem colocar sua saúde em risco. Aproveite pães macios e pizzas crocantes sem açúcar nem farinhas que disparam sua glicose.",
      value: "R$31,00",
      imageSrc: bonus5
    },
    {
      number: 6,
      title: "Receitas de Molhos e Patês para Diabéticos",
      description: "Transforme qualquer prato em uma experiência deliciosa com molhos que não alteram sua glicose.",
      value: "R$28,00",
      imageSrc: bonus6
    }
  ];

  const recipeCategories = [
    {
      title: "Cafés da Manhã",
      description: "Receitas fáceis e funcionais para despertar seu corpo sem picos de glicose nem desejos no meio da manhã. 100% livres de açúcar, glúten e laticínios, rápidas de preparar e saciantes.",
      imageSrc: category1
    },
    {
      title: "Almoços",
      description: "Opções práticas e nutritivas para manter seus níveis de glicose estáveis, se sentir satisfeito e com energia durante toda a tarde. Deliciosas combinações que sua família também vai adorar.",
      imageSrc: category2
    },
    {
      title: "Lanches e Jantares",
      description: "Preparações que nutrem sem sobrecarregar sua digestão, pensadas para você acordar com energia. Tudo com ingredientes simples, seguros e sem complicações.",
      imageSrc: category3
    },
    {
      title: "Pães",
      description: "Receitas de pães fofos, crocantes e fáceis de fazer em casa, 100% livres de açúcar, glúten e laticínios que cuidam da sua glicose e devolvem o prazer de comer sem culpa.",
      imageSrc: category4
    },
    {
      title: "Confeitaria",
      description: "Sobremesas saudáveis, sem açúcar e adequadas para diabéticos. Adoce sua vida sem medo e surpreenda sua família com receitas que ninguém vai notar que são saudáveis.",
      imageSrc: category5
    },
    {
      title: "Sopas e Cremes",
      description: "Receitas leves que desinflamam seu corpo, aliviam o inchaço e estabilizam sua glicose, enquanto você aprecia cada bocado com calma e bem-estar.",
      imageSrc: category6
    }
  ];

  const featuresList = [
    "Baixas em carboidratos e calorias",
    "Sem açúcar nem farinhas refinadas",
    "100% livres de glúten e laticínios",
    "Cheias de energia, fibra e sabor",
    "Projetadas para que sua glicose se mantenha estável sem esforço"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <section className="bg-urgency text-white py-3 px-1">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">
            PARE DE TER PICOS DE GLICOSE TODA VEZ QUE COME!
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-hero-foreground py-8 px-1 md:py-16 md:px-1">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-black mb-4 md:mb-6 leading-tight uppercase">
            <strong className="text-[#e89c30]">O SEGREDO REVELADO</strong> QUE ESTÁ AJUDANDO DIABÉTICOS A <strong className="text-[#e89c30]">ABAIXAR SUA GLICOSE E COMER SEM MEDO</strong>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto opacity-90">
            Prepare pratos irresistíveis, fáceis, econômicos e cheios de sabor em menos de 15 minutos, 
            sem medo de que sua glicose dispare nem sentir que está preso(a) em uma dieta
          </p>
          
          <div className="max-w-sm sm:max-w-md md:max-w-2xl mx-auto mb-6 md:mb-8">
            <img 
              src={heroProduct} 
              alt="Receituário para Diabéticos" 
              className="w-full h-auto object-contain"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <div className="max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
            <CTAButton
              className="bg-none bg-[#e89c30] hover:brightness-95 text-white"
              onClick={() => {
                const el = document.getElementById("oferta");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Quero Baixar Agora!
            </CTAButton>
            <p className="text-center text-xs md:text-sm text-white mt-2 md:mt-3">
              +7.500 avaliações (⭐⭐⭐⭐⭐4.9/5)
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-urgency" />
            <span className="text-urgency font-semibold text-sm md:text-base">Benefícios deste Guia de Receitas</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12 px-2">
            Transforme sua relação com a comida
          </h2>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </Suspense>

          <div className="mt-8 md:mt-12 bg-card p-4 md:p-8 rounded-xl shadow-card border border-border max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground leading-relaxed text-sm md:text-base">
              Sei o quão difícil é viver com diabetes e sentir que tudo está proibido. 
              Por isso criei este Guia de Receitas, para que você volte a aproveitar a comida 
              com liberdade, sabor e confiança, sem medo de perder sua saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Categories Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Utensils className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-2 md:mb-4 px-2">
            Veja tudo o que você terá em mãos
          </h2>
          <p className="text-center text-muted-foreground mb-6 md:mb-12 text-sm md:text-lg px-2">
            Para comer sem culpa e controlar sua glicose
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-6 md:space-y-12">
              {recipeCategories.map((category, index) => (
                <RecipeCategory 
                  key={index} 
                  {...category} 
                  reverse={index % 2 === 1}
                  imageLabel={category.title}
                  imageSrc={category.imageSrc}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-gradient-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-4 md:mb-8 px-2">
            Diga adeus ao medo de comer e colocar sua saúde em risco!
          </h2>
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg leading-relaxed opacity-95 px-2">
            <p>
              Sei exatamente como é viver preocupado(a) com o açúcar, com o medo constante de que cada refeição faça mal ou dispare a glicose. Aquela sensação de que comer bem significa passar fome, sentir cansaço ou seguir uma dieta sem graça, impossível de manter no dia a dia.
            </p>
            <p>
              E o pior: quando você tenta cuidar da alimentação, não vê resultados — nem na glicose, nem no peso. Você se esforça, mas continua se sentindo inchado(a), com vontade de comer o tempo todo e sem energia.
            </p>
            <p className="font-semibold text-base md:text-xl">
              Isso não é falta de disciplina. É a falta de um sistema simples, saboroso e pensado para você.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Showcase */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-4xl font-heading font-bold text-center text-foreground mb-2 md:mb-4 px-2">
            Pratos que nutrem seu corpo, estabilizam sua glicose e conquistam seu paladar
          </h2>
          <p className="text-center text-sm md:text-lg text-primary mb-6 md:mb-12">
            O prazer de comer volta a ser seu
          </p>
          
          <Suspense fallback={null}>
            <RecipeShowcase />
          </Suspense>
          
          <div className="mt-6 md:mt-12 bg-card p-4 md:p-6 rounded-xl shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-base md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4 text-center">
              As refeições mais deliciosas e seguras para você:
            </h3>
            <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm md:text-base font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Bonuses Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-3 md:mb-4 px-2">
            As coisas boas não terminam aqui!
          </h2>
          <p className="text-center text-sm md:text-lg text-muted-foreground mb-6 md:mb-12 max-w-2xl mx-auto px-2">
            Ao acessar o Guia Hoje, você receberá +6 bônus EXCLUSIVOS que multiplicam sua liberdade à mesa, sem pagar nem um centavo a mais!
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              {bonuses.map((bonus) => (
                <BonusCard key={bonus.number} {...bonus} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Second CTA Section */}
      <section id="oferta" className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-foreground mb-4 md:mb-8">
            Transforme sua alimentação com Receitas sem Açúcar, Glúten e Laticínios + 6 Bônus Exclusivos com 97% de Desconto somente HOJE!
          </h2>
          
          <div className="mb-6 md:mb-8">
            <img 
              src={heroProduct} 
              alt="Receituário Completo para Diabéticos" 
              className="w-full max-w-2xl mx-auto h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <Suspense fallback={null}>
            <PriceBox showFeatures />
          </Suspense>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12 px-2">
            Depoimentos de quem já transformou sua alimentação com este Guia de Receitas 🥰
          </h2>
          
          <Suspense fallback={null}>
            <TestimonialPlaceholder />
          </Suspense>
          
          <Suspense fallback={null}>
            <RatingSummary />
          </Suspense>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-4xl mx-auto">
          <Suspense fallback={null}>
            <GuaranteeBadge />
          </Suspense>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-center text-foreground mb-3 md:mb-4 px-2">
            Você sabia que a alimentação é a chave silenciosa para controlar a diabetes e 
            recuperar sua energia?
          </h2>
          <p className="text-center text-muted-foreground mb-6 md:mb-12 max-w-3xl mx-auto text-sm md:text-base px-2">
            Cada ano, milhões de diabéticos descobrem que não precisam viver com medo da comida. 
            Estudos recentes confirmam que os alimentos corretos podem estabilizar a glicose, 
            reduzir a inflamação e melhorar a qualidade de vida em questão de semanas.
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
              <StatCard
                icon={<Heart className="w-6 h-6 md:w-8 md:h-8 text-urgency" />}
                stat="422 milhões"
                description="de pessoas no mundo vivem hoje com diabetes"
              />
              <StatCard
                icon={<Utensils className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
                stat="7+ milhões"
                description="de pessoas já conseguiram emagrecer e controlar a diabetes mudando sua alimentação"
              />
              <StatCard
                icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-success" />}
                stat="6+ milhões"
                description="de pessoas em todo o mundo relataram melhoras no bem-estar só por mudar a forma como comem"
              />
            </div>
          </Suspense>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-gradient-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-3 md:mb-4 px-2">
            OFERTA POR TEMPO LIMITADO SOMENTE HOJE!
          </h2>
          <p className="text-sm md:text-lg mb-4 md:mb-8 opacity-95 px-2">
            Você está a um passo de acessar o receituário que vai transformar sua saúde e 
            fazer você aproveitar cada refeição enquanto mantém sua glicose estável e controlada!
          </p>
          
          <div className="bg-card text-foreground rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-base sm:text-lg md:text-2xl font-heading font-bold mb-4 md:mb-6">
              Transforme sua alimentação com Receitas sem Açúcar, Glúten e Laticínios para Diabéticos + 6 Bônus Exclusivos com 97% de Desconto somente HOJE!
            </h3>
            
            <div className="mb-4 md:mb-6">
              <img 
                src={heroProduct} 
                alt="Receituário Completo para Diabéticos" 
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
            </div>
            
            <Suspense fallback={null}>
              <PriceBox showTimer={false} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12">
            PERGUNTAS FREQUENTES
          </h2>
          
          <Suspense fallback={null}>
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* Final Mini CTA */}
      <section className="py-8 px-1 md:py-12 md:px-1 bg-section-alt">
        <div className="container max-w-xl mx-auto text-center">
          <p className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">
            Sua mudança começa hoje, fácil, rápida e sem riscos
          </p>
          <div className="mb-3 md:mb-4">
            <p className="text-muted-foreground line-through text-sm md:text-base">VALOR SEM DESCONTO: R$330,00</p>
            <p className="text-3xl md:text-4xl font-heading font-black text-primary">R$9,90</p>
            <p className="text-xs md:text-sm text-muted-foreground">UM ÚNICO PAGAMENTO</p>
          </div>
          <CTAButton>Quero Baixar Agora!</CTAButton>
          <p className="text-urgency font-bold mt-3 md:mt-4 text-sm md:text-base">
            SOMENTE HOJE! ÚLTIMAS 7 UNIDADES DISPONÍVEIS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-3 md:py-8 md:px-4 bg-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center text-xs md:text-sm opacity-80">
          <p className="mb-3 md:mb-4">
            AVISO IMPORTANTE: Este site não faz parte do site do Facebook ou Meta. 
            Além disso, este site não é endossado pelo Facebook de nenhuma forma. 
            FACEBOOK é uma marca registrada da META.
          </p>
          <p className="mb-3 md:mb-4">
            © 2025 Mônica Miranda | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
