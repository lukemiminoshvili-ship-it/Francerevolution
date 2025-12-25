
import React from 'react';
import { HistoricalEvent } from '../types';

interface TimelineCardProps {
  event: HistoricalEvent;
  onClick: (id: string) => void;
  side: 'left' | 'right';
}

const TimelineCard: React.FC<TimelineCardProps> = ({ event, onClick, side }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const isLeft = side === 'left';

  return (
    <div
      ref={cardRef}
      className={`relative mb-32 md:mb-52 flex flex-col md:flex-row items-center w-full transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100' 
          : `opacity-0 scale-95 ${isLeft ? '-translate-x-48' : 'translate-x-48'}`
      }`}
    >
      <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center transition-all duration-700 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="w-6 h-6 rounded-full bg-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,1)] border-4 border-[#1a1714]"></div>
      </div>

      <div className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`w-full md:w-[48%] group cursor-pointer`} onClick={() => onClick(event.id)}>
          <div className="bg-[#1e1a16] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-stone-800 relative overflow-hidden transition-all duration-500 hover:border-[#c5a059]/50 hover:-translate-y-3">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover sepia-[0.4] contrast-[1.1] grayscale-[0.2] brightness-75 group-hover:brightness-95 transition-all duration-1000 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a16] via-transparent to-transparent opacity-80"></div>
              <div className={`absolute bottom-6 ${isLeft ? 'right-6' : 'left-6'} bg-[#c5a059] text-[#1a1714] px-6 py-2 text-3xl font-black vintage-title shadow-[4px_4px_0_rgba(0,0,0,0.5)]`}>
                {event.year}
              </div>
            </div>

            <div className="p-10 md:p-12">
              <span className="text-sm uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-4 block">
                {event.date}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold vintage-title mb-8 leading-[1.1] group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <p className="text-stone-400 leading-relaxed text-xl italic mb-10 border-l-3 border-[#c5a059]/20 pl-6">
                {event.shortDescription}
              </p>
              <div className="flex items-center gap-6 text-stone-600 group-hover:text-[#c5a059] transition-colors">
                <div className="h-[2px] flex-1 bg-stone-800 group-hover:bg-[#c5a059]/20"></div>
                <span className="text-xs font-bold tracking-[0.5em] uppercase whitespace-nowrap">გახსენით არქივი</span>
                <div className="h-[2px] flex-1 bg-stone-800 group-hover:bg-[#c5a059]/20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[4%]"></div>
        <div className="hidden md:block w-[48%]"></div>
      </div>
    </div>
  );
};

export default TimelineCard;
