import { Star } from "lucide-react";

export const RatingSummary = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-blue-50/50 rounded-2xl max-w-sm mx-auto mt-4 md:mt-6 mb-8 border border-blue-100">
      
      <div className="flex items-center justify-center gap-8 w-full">
        {/* Lado Esquerdo - Estrelas */}
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="font-bold text-lg text-foreground">4.9/5</p>
          <p className="text-xs text-muted-foreground">+7.500 avaliações</p>
        </div>

        {/* Lado Direito - Box Satisfação */}
        <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-blue-600">98%</span>
          <span className="text-xs text-muted-foreground">Satisfação</span>
        </div>
      </div>
    </div>
  );
};
