
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { REVOLUTION_EVENTS } from '../constants';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = REVOLUTION_EVENTS.find(e => e.id === id);

  const handleBack = () => {
    navigate('/');
  };

  if (!event) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-3xl vintage-title">მოვლენა ვერ მოიძებნა</h2>
          <button 
            onClick={handleBack}
            className="mt-8 px-8 py-3 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#1a1714] transition font-bold uppercase tracking-widest"
          >
            უკან დაბრუნება
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={handleBack}
          className="mb-12 flex items-center gap-4 text-stone-500 hover:text-[#c5a059] transition-all group font-bold tracking-[0.3em] uppercase text-xs"
        >
          <div className="w-12 h-px bg-stone-700 group-hover:bg-[#c5a059] transition-all"></div>
          არქივში დაბრუნება
        </button>

        <article className="bg-[#1e1a16] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-stone-800 relative overflow-hidden">
          <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-stone-800 pointer-events-none opacity-50"></div>
          <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-stone-800 pointer-events-none opacity-50"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-stone-800 pointer-events-none opacity-50"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-stone-800 pointer-events-none opacity-50"></div>

          <div className="p-10 md:p-24">
            <header className="mb-20 text-center">
              <span className="text-[#c5a059] font-bold uppercase tracking-[0.6em] block mb-8 text-sm">
                — {event.date} —
              </span>
              <h1 className="vintage-title text-5xl md:text-8xl font-bold mb-10 leading-[1.1] drop-shadow-2xl">
                {event.title}
              </h1>
              <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-stone-800 to-transparent mx-auto"></div>
            </header>

            <div className="mb-20 relative">
              <div className="absolute inset-0 bg-[#c5a059] translate-x-4 translate-y-4 -z-10 opacity-5"></div>
              <div className="border border-stone-800 p-3 bg-[#13110f] shadow-inner">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full aspect-[16/9] object-cover sepia-[0.3] contrast-[1.1] grayscale-[0.1]"
                />
              </div>
              <p className="mt-6 text-center text-[10px] text-stone-600 font-bold uppercase tracking-[0.4em]">
                დოკუმენტირებული ისტორიული რეპროდუქცია
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-invert prose-2xl max-w-none text-stone-300 leading-[1.9] font-serif space-y-10">
                <p className="first-letter:text-9xl first-letter:font-black first-letter:mr-6 first-letter:float-left first-letter:text-[#c5a059] first-letter:leading-none first-letter:mt-2">
                  {event.fullDescription}
                </p>
              </div>

              {event.quote && (
                <blockquote className="mt-28 py-16 px-12 border-y border-stone-800 relative bg-[#171411]">
                   <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl text-[#c5a059] bg-[#171411] px-4">⚜</div>
                  <p className="text-4xl italic text-[#c5a059] text-center leading-relaxed font-serif">
                    "{event.quote}"
                  </p>
                  <footer className="mt-10 text-center text-stone-500 font-bold uppercase tracking-[0.3em] text-xs">
                    — {event.quoteAuthor}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default EventDetail;
