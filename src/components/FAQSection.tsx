import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo as receitas depois de fazer a compra?",
    answer: "Assim que você realizar o pagamento, receberá acesso imediato no seu e-mail ao ebook em formato digital (PDF para download). Você poderá ler no seu celular, computador ou tablet, e até imprimir se preferir."
  },
  {
    question: "Essas receitas realmente vão me ajudar a controlar minha glicose?",
    answer: "Sim! Todas as receitas foram desenvolvidas especificamente para diabéticos, com ingredientes que ajudam a manter os níveis de açúcar no sangue estáveis. São livres de açúcar refinado, glúten e laticínios que podem causar picos de glicose."
  },
  {
    question: "Posso usar essas receitas se além de diabetes tipo 2 tenho doença celíaca ou intolerância à lactose?",
    answer: "Absolutamente! Todas as 200 receitas são 100% livres de glúten e laticínios, perfeitas para quem tem essas condições além da diabetes."
  },
  {
    question: "Vou precisar de ingredientes raros ou difíceis de encontrar?",
    answer: "Não! Todas as receitas foram criadas com ingredientes comuns que você encontra em qualquer supermercado ou feira. Nada de ingredientes caros ou difíceis de achar."
  },
  {
    question: "Quanto tempo vou levar para preparar as receitas?",
    answer: "A maioria das receitas pode ser preparada em menos de 15 minutos. Foram pensadas para pessoas com rotinas corridas que não têm tempo de passar horas na cozinha."
  },
  {
    question: "E se o ebook não for o que eu esperava?",
    answer: "Você tem garantia de 7 dias! Se não ficar satisfeito por qualquer motivo, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Este ebook serve se eu cozinho também para minha família?",
    answer: "Com certeza! As receitas são tão saborosas que toda a família vai adorar. Você não precisa cozinhar separado ou se sentir diferente na mesa."
  }
];

export const FAQSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
