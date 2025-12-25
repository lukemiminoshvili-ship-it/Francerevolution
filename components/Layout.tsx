
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6">
      <header className="text-center mb-24 relative z-10">
        <div className="flex justify-center mb-6">
           <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent"></div>
           <div className="mx-4 text-[#c5a059]">⚜</div>
           <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent"></div>
        </div>
        <h1 className="vintage-title text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-lg">
          საფრანგეთის რევოლუცია
        </h1>
        <p className="text-xl md:text-3xl text-stone-400 italic font-serif tracking-widest uppercase">
          — 1789 · 1799 —
        </p>
        <div className="mt-6 text-stone-500 text-sm tracking-[0.3em] font-bold">
            ისტორიული ციფრული არქივი
        </div>
      </header>
      
      <main className="w-full max-w-7xl">
        {children}
      </main>

      <footer className="mt-32 text-stone-600 text-sm italic border-t border-stone-800 pt-12 w-full max-w-2xl text-center">
        <p className="mb-2">⚜ საფრანგეთის რესპუბლიკის ეროვნული არქივი ⚜</p>
        <p className="opacity-50">საიტი შექმნილია ისტორიული მეხსიერების შესანარჩუნებლად</p>
      </footer>
    </div>
  );
};

export default Layout;
