
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import TimelineCard from '../components/TimelineCard';
import { REVOLUTION_EVENTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('archive_scroll_pos');
    if (savedPosition) {
      // Slightly longer delay to ensure Vite's HMR or initial mount is stable
      const timeout = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'instant'
        });
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleEventClick = (id: string) => {
    sessionStorage.setItem('archive_scroll_pos', window.scrollY.toString());
    navigate(`/event/${id}`);
  };

  return (
    <Layout>
      <div className="relative w-full">
        {/* Central Life Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#c5a059]/40 to-transparent hidden md:block"></div>
        
        {/* Decorative Fleur-de-lis */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 text-[#c5a059] hidden md:block opacity-60 animate-pulse">
           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L10,6H14L12,2M12,22L14,18H10L12,22M4,12L8,10V14L4,12M20,12L16,14V10L20,12M12,8C10,8 8,10 8,12C8,14 10,16 12,16C14,16 16,14 16,12C16,10 14,8 12,8Z" />
           </svg>
        </div>

        <div className="flex flex-col py-12 relative z-10">
          {REVOLUTION_EVENTS.map((event, index) => (
            <TimelineCard 
              key={event.id} 
              event={event} 
              side={index % 2 === 0 ? 'left' : 'right'}
              onClick={handleEventClick} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
