interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

export const StatCard = ({ icon, stat, description }: StatCardProps) => {
  return (
    <div className="bg-card p-4 md:p-6 rounded-xl shadow-card border border-border text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-accent rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xl md:text-2xl font-heading font-bold text-primary mb-1 md:mb-2">{stat}</p>
      <p className="text-sm md:text-base text-muted-foreground">{description}</p>
    </div>
  );
};
