import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export const CountdownTimer = ({ 
  hours: initialHours = 0, 
  minutes: initialMinutes = 55, 
  seconds: initialSeconds = 35 
}: CountdownTimerProps) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 md:gap-4">
      <div className="flex flex-col items-center bg-urgency/10 rounded-lg px-3 py-2 md:px-4 md:py-3">
        <span className="text-2xl md:text-5xl font-heading font-bold text-urgency">
          {formatNumber(time.hours)}
        </span>
        <span className="text-[10px] md:text-sm text-muted-foreground">Horas</span>
      </div>
      <span className="text-2xl md:text-5xl font-bold text-urgency">:</span>
      <div className="flex flex-col items-center bg-urgency/10 rounded-lg px-3 py-2 md:px-4 md:py-3">
        <span className="text-2xl md:text-5xl font-heading font-bold text-urgency">
          {formatNumber(time.minutes)}
        </span>
        <span className="text-[10px] md:text-sm text-muted-foreground">Minutos</span>
      </div>
      <span className="text-2xl md:text-5xl font-bold text-urgency">:</span>
      <div className="flex flex-col items-center bg-urgency/10 rounded-lg px-3 py-2 md:px-4 md:py-3">
        <span className="text-2xl md:text-5xl font-heading font-bold text-urgency">
          {formatNumber(time.seconds)}
        </span>
        <span className="text-[10px] md:text-sm text-muted-foreground">Segundos</span>
      </div>
    </div>
  );
};