import React from 'react';
import {
  ArrowRightIcon,
  DeepReaderIllustration,
  VisualExplorerIllustration,
} from './CartoonIllustrations';

export const SCROLL_EXPLORER_URL = 'https://starship-tales-passport.lovable.app/';
export const INTERACTIVE_BOOK_URL = 'https://forgotten-tales-alpha.vercel.app/';

export function SplitPortal() {
  return (
    <main
      id="top"
      className="relative overflow-hidden px-5 sm:px-8 pt-6 pb-12 sm:pt-9 sm:pb-14"
      style={{
        backgroundImage:
          'radial-gradient(circle at 12% 14%, rgba(210, 248, 232, 0.72) 0%, transparent 38%), radial-gradient(circle at 88% 18%, rgba(255, 224, 238, 0.75) 0%, transparent 40%), radial-gradient(circle at 50% 92%, rgba(232, 219, 255, 0.55) 0%, transparent 45%)',
      }}
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Hero Section */}
        <section aria-labelledby="portal-hero-heading" className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <p className="animate-hero-bounce text-xs sm:text-sm font-extrabold tracking-wide text-[#6A5D8A] mb-2">
            Two doorways into the secret lives of machines
          </p>

          <h1
            id="portal-hero-heading"
            className="animate-hero-bounce font-display text-4xl sm:text-[2.85rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-[#2D2640] text-balance"
          >
            What If Machines Could Tell You Their{' '}
            <span className="relative inline-block animate-word-hop text-[#2D2640]">
              <span className="relative z-10">Stories?</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 180 18"
                fill="none"
                className="absolute -bottom-1.5 left-0 w-full h-3.5 text-[#9EE8CD]"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 12C45 4 125 4 176 11"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="animate-hero-bounce-delay mt-3 text-sm sm:text-base font-semibold leading-relaxed text-[#564D6E] text-balance max-w-2xl mx-auto">
            Choose how you want to step inside. Glide through motion-powered chapters or curl up with an illustrated, detail-rich storybook.
          </p>
        </section>

        {/* The Split Choice (Two Cards) */}
        <section aria-label="Choose your story path" className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9 items-stretch">
          {/* Card 1: Scroll Explorer */}
          <article
            className="cartoon-card cartoon-card-mint group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border-[3px] border-[#8CDAC0] bg-gradient-to-br from-[#E2FAF0] via-[#E5F7FE] to-[#D6EEFE] p-6 sm:p-7 focus-within:ring-4 focus-within:ring-[#82DEC0]/70"
          >
            {/* Looping CSS motion background layer */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              {/* Drifting pastel cloud puff */}
              <div className="animate-cloud-loop absolute top-3 left-6 h-16 w-40 rounded-full bg-white/70" />
              {/* Gliding soft mint-blue ribbon */}
              <div className="animate-ribbon-loop absolute top-[44%] -left-12 h-14 w-[130%] -rotate-6 rounded-full bg-gradient-to-r from-[#A5EED7]/55 via-[#B2E2FE]/65 to-transparent" />
              {/* Undulating wave silhouette at bottom */}
              <svg
                viewBox="0 0 600 130"
                fill="none"
                preserveAspectRatio="none"
                className="animate-wave-loop absolute -bottom-1 left-0 h-28 w-[145%] opacity-80"
              >
                <path
                  d="M0 54C75 22 145 84 225 52C305 20 375 82 455 50C525 22 565 52 600 40V130H0V54Z"
                  fill="#B4EEDB"
                />
                <path
                  d="M0 80C85 50 165 100 255 74C345 48 415 98 505 72C555 58 582 70 600 74V130H0V80Z"
                  fill="#BCE3FE"
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-5">
              <div>
                <div className="mb-4 rounded-3xl border-2 border-white/85 bg-white/65 p-2.5">
                  <VisualExplorerIllustration className="animate-float-gentle w-full h-28 sm:h-32" />
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-[#24735D] mb-1">
                  Dynamic <span aria-hidden="true">·</span> Motion-Oriented <span aria-hidden="true">·</span> Breezy
                </p>

                <h2 className="font-display text-2xl sm:text-[1.75rem] font-bold text-[#2D2640] tracking-tight">
                  Scroll Explorer
                </h2>

                <p className="mt-2 text-sm sm:text-[15px] font-semibold leading-relaxed text-[#424E60]">
                  For explorers who love to learn through scrolling, playful motion, and visual magic. Drift from scene to scene and watch historic machines share their tales in motion.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={SCROLL_EXPLORER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pop-pill-mint inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#4AB18E] bg-[#8EE7C7] px-6 py-3 text-sm sm:text-[15px] font-extrabold text-[#15483A] whitespace-nowrap cursor-pointer focus-visible:outline-none after:content-[''] after:absolute after:inset-0 after:rounded-[2.25rem]"
                >
                  <span>Enter Scroll Explorer</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: The Interactive Book */}
          <article
            className="cartoon-card cartoon-card-lavender group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border-[3px] border-[#CBAEF5] bg-gradient-to-br from-[#F2E9FF] via-[#FAF0FB] to-[#FFE7F0] p-6 sm:p-7 focus-within:ring-4 focus-within:ring-[#C7A6F5]/70"
          >
            {/* Subtle cozy background shapes */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="animate-pulse-orb absolute -top-8 -right-8 h-36 w-36 rounded-full bg-[#FFD4E6]/65" />
              <div className="animate-pulse-orb absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#E1CDFF]/60" />
              {/* Subtle curved notebook page lines */}
              <svg
                viewBox="0 0 240 120"
                fill="none"
                className="absolute bottom-3 right-4 h-20 w-40 opacity-35"
              >
                <path d="M24 38H200" stroke="#C5A3F2" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M52 62H200" stroke="#F4B2CF" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M84 86H200" stroke="#C5A3F2" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-5">
              <div>
                <div className="mb-4 rounded-3xl border-2 border-white/85 bg-white/65 p-2.5">
                  <DeepReaderIllustration className="animate-float-bookish w-full h-28 sm:h-32" />
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-[#6B4899] mb-1">
                  Cozy <span aria-hidden="true">·</span> Studious <span aria-hidden="true">·</span> Bookish
                </p>

                <h2 className="font-display text-2xl sm:text-[1.75rem] font-bold text-[#2D2640] tracking-tight">
                  The Interactive Book
                </h2>

                <p className="mt-2 text-sm sm:text-[15px] font-semibold leading-relaxed text-[#4F4463]">
                  Crafted for curious minds who love to curl up and absorb every detail through rich, immersive text, clever side notes, and interactive storybook chapters.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={INTERACTIVE_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pop-pill-lavender inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#946ED2] bg-[#DCC0FF] px-6 py-3 text-sm sm:text-[15px] font-extrabold text-[#2B1845] whitespace-nowrap cursor-pointer focus-visible:outline-none after:content-[''] after:absolute after:inset-0 after:rounded-[2.25rem]"
                >
                  <span>Open The Interactive Book</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Quiet unboxed caption */}
        <footer className="mt-7 text-center text-xs sm:text-sm font-bold text-[#6A5D8A]">
          <span>Forgotten Tales</span>
          <span aria-hidden="true" className="mx-2.5">·</span>
          <span>Pick your favorite way to explore machine stories</span>
        </footer>
      </div>
    </main>
  );
}
