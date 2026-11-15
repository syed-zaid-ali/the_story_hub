import React from 'react';
import { ForgottenTalesRocketLogo } from './CartoonIllustrations';

export function TopBar() {
  return (
    <header className="w-full border-b-2 border-[#EFE8DA] bg-[#FFFDF7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-start px-5 sm:px-8 py-3.5">
        <a
          href="#top"
          className="inline-flex items-center gap-3 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2D2640] whitespace-nowrap shrink-0 rounded-2xl transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B77D6]"
        >
          <ForgottenTalesRocketLogo className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" />
          <span>Forgotten Tales</span>
        </a>
      </div>
    </header>
  );
}
