import React, { useState } from 'react';
import { VISUAL_EXPLORER_STAGES, VisualStage } from '../data/learningContent';
import { computeStepProgress, LearningPath } from '../utils/portalRouting';
import { ArrowLeftIcon, ArrowRightIcon, BookIcon } from './CartoonIllustrations';

interface VisualExplorerViewProps {
  onNavigate: (path: LearningPath) => void;
}

function StageSceneGraphic({
  sceneType,
  boosted,
}: {
  sceneType: VisualStage['sceneType'];
  boosted: boolean;
}) {
  const glowScale = boosted ? 'scale-110 opacity-100' : 'scale-100 opacity-85';

  if (sceneType === 'surface-dive') {
    return (
      <svg viewBox="0 0 420 260" fill="none" className="w-full h-full max-h-72" aria-hidden="true">
        <rect x="8" y="8" width="404" height="244" rx="28" fill="#DFF4FE" stroke="#2D2640" strokeWidth="3" />
        {/* Layered pastel water depth */}
        <path
          d="M8 92C90 72 170 112 250 90C330 68 380 96 412 86V224C412 240 400 252 384 252H36C20 252 8 240 8 224V92Z"
          fill="#BDE8FB"
        />
        <path
          d="M8 148C110 128 190 168 290 146C350 132 390 148 412 142V224C412 240 400 252 384 252H36C20 252 8 240 8 224V148Z"
          fill="#99D8F7"
        />
        {/* Floating cute jellyfish */}
        <g className="animate-float-gentle">
          <path
            d="M170 132C170 105 192 86 218 86C244 86 266 105 266 132C250 128 234 134 218 134C202 134 186 128 170 132Z"
            fill={boosted ? '#A3F5D7' : '#C3F6E4'}
            stroke="#2D2640"
            strokeWidth="3"
          />
          <path d="M192 134C188 156 198 172 190 192" stroke="#2D2640" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M218 136C222 160 212 176 220 198" stroke="#2D2640" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M244 134C248 156 238 170 246 190" stroke="#2D2640" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="204" cy="112" r="3.5" fill="#2D2640" />
          <circle cx="232" cy="112" r="3.5" fill="#2D2640" />
        </g>
        {/* Drifting plankton orbs */}
        <g className={`transition-all duration-300 ${glowScale}`}>
          <circle cx="90" cy="178" r={boosted ? 9 : 6} fill="#FFF5B8" stroke="#2D2640" strokeWidth="2" />
          <circle cx="328" cy="176" r={boosted ? 11 : 7} fill="#B8F7DF" stroke="#2D2640" strokeWidth="2" />
          <circle cx="132" cy="116" r={boosted ? 7 : 5} fill="#FFF5B8" stroke="#2D2640" strokeWidth="2" />
          <circle cx="304" cy="122" r={boosted ? 8 : 5} fill="#FFF5B8" stroke="#2D2640" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  if (sceneType === 'chemical-spark') {
    return (
      <svg viewBox="0 0 420 260" fill="none" className="w-full h-full max-h-72" aria-hidden="true">
        <rect x="8" y="8" width="404" height="244" rx="28" fill="#E4FAF1" stroke="#2D2640" strokeWidth="3" />
        {/* Dashed orbital bond */}
        <ellipse
          cx="210"
          cy="132"
          rx="132"
          ry="66"
          stroke="#6FD3B1"
          strokeWidth="3.5"
          strokeDasharray="10 8"
        />
        {/* Left molecule: Luciferin */}
        <g className="animate-float-gentle">
          <circle cx="122" cy="132" r="34" fill="#B5EEFF" stroke="#2D2640" strokeWidth="3" />
          <circle cx="112" cy="126" r="3.5" fill="#2D2640" />
          <circle cx="132" cy="126" r="3.5" fill="#2D2640" />
          <path d="M114 140C118 145 126 145 130 140" stroke="#2D2640" strokeWidth="2.8" strokeLinecap="round" />
        </g>
        {/* Right molecule: Luciferase */}
        <g className="animate-float-bookish">
          <rect x="264" y="98" width="68" height="68" rx="24" fill="#C2F4DF" stroke="#2D2640" strokeWidth="3" />
          <circle cx="288" cy="126" r="3.5" fill="#2D2640" />
          <circle cx="308" cy="126" r="3.5" fill="#2D2640" />
          <path d="M290 140C294 145 302 145 306 140" stroke="#2D2640" strokeWidth="2.8" strokeLinecap="round" />
        </g>
        {/* Central Photon Spark */}
        <g className={`origin-center transition-transform duration-300 ${boosted ? 'scale-125' : 'scale-100'}`}>
          <path
            d="M210 74L221 112L258 122L221 133L210 172L199 133L162 122L199 112L210 74Z"
            fill={boosted ? '#FFE985' : '#FFF4B8'}
            stroke="#2D2640"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }

  if (sceneType === 'counter-glow') {
    return (
      <svg viewBox="0 0 420 260" fill="none" className="w-full h-full max-h-72" aria-hidden="true">
        <rect x="8" y="8" width="404" height="244" rx="28" fill="#DDF1FE" stroke="#2D2640" strokeWidth="3" />
        {/* Moonlight beams from top */}
        <path d="M120 12L170 250H90L120 12Z" fill="#FFFFFF" opacity="0.45" />
        <path d="M240 12L310 250H200L240 12Z" fill="#FFFFFF" opacity="0.4" />
        {/* Cute Hatchetfish with glowing belly dots */}
        <g className="animate-float-gentle">
          <path
            d="M144 128C144 96 184 78 228 84C266 90 294 114 294 134C294 156 260 172 220 172C176 172 144 156 144 128Z"
            fill="#A6DCF9"
            stroke="#2D2640"
            strokeWidth="3.2"
          />
          <path
            d="M286 130L322 106V154L286 130Z"
            fill="#9CE6CA"
            stroke="#2D2640"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <circle cx="174" cy="118" r="9" fill="#FFFFFF" stroke="#2D2640" strokeWidth="2.8" />
          <circle cx="172" cy="118" r="4" fill="#2D2640" />
          {/* Belly photophores */}
          <circle cx="176" cy="156" r={boosted ? 7 : 5} fill="#FFF4A8" stroke="#2D2640" strokeWidth="2" />
          <circle cx="198" cy="161" r={boosted ? 7 : 5} fill="#FFF4A8" stroke="#2D2640" strokeWidth="2" />
          <circle cx="220" cy="162" r={boosted ? 7 : 5} fill="#FFF4A8" stroke="#2D2640" strokeWidth="2" />
          <circle cx="242" cy="159" r={boosted ? 7 : 5} fill="#FFF4A8" stroke="#2D2640" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 260" fill="none" className="w-full h-full max-h-72" aria-hidden="true">
      <rect x="8" y="8" width="404" height="244" rx="28" fill="#E1F6F3" stroke="#2D2640" strokeWidth="3" />
      {/* Friendly Cartoon Anglerfish */}
      <g className="animate-float-bookish">
        <path
          d="M170 156C170 116 206 94 252 94C294 94 328 118 328 156C328 190 294 210 250 210C206 210 170 190 170 156Z"
          fill="#B6DCEB"
          stroke="#2D2640"
          strokeWidth="3.2"
        />
        <path
          d="M324 152L356 128V176L324 152Z"
          fill="#9DE5CC"
          stroke="#2D2640"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        {/* Curved lantern stalk */}
        <path
          d="M214 98C194 58 148 54 128 84"
          stroke="#2D2640"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Glowing microbe bulb */}
        <circle
          cx="124"
          cy="94"
          r={boosted ? 24 : 18}
          fill={boosted ? '#FFE885' : '#FFF3AE'}
          stroke="#2D2640"
          strokeWidth="3"
        />
        <circle cx="118" cy="90" r="3" fill="#4DB899" />
        <circle cx="130" cy="96" r="3" fill="#4DB899" />
        <circle cx="122" cy="102" r="2.5" fill="#4DB899" />
        {/* Friendly eye and smile */}
        <circle cx="212" cy="138" r="8" fill="#FFFFFF" stroke="#2D2640" strokeWidth="2.8" />
        <circle cx="210" cy="138" r="3.5" fill="#2D2640" />
        <path d="M188 168C198 176 216 176 226 168" stroke="#2D2640" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function VisualExplorerView({ onNavigate }: VisualExplorerViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boostedGlow, setBoostedGlow] = useState(false);

  const activeStage = VISUAL_EXPLORER_STAGES[activeIndex];
  const progress = computeStepProgress(activeIndex, VISUAL_EXPLORER_STAGES.length);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(VISUAL_EXPLORER_STAGES.length - 1, prev + 1));
  };

  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-12">
      {/* Experience Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs sm:text-sm font-extrabold text-[#267861]">
            The Visual Explorer <span aria-hidden="true">·</span> Interactive Motion Journey
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#2D2640] tracking-tight mt-1">
            The Secret Glow of Deep-Sea Creatures
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('portal')}
            className="pop-pill-neutral inline-flex items-center gap-2 rounded-full border-2 border-[#CBB7EB] bg-white px-4 py-2 text-xs sm:text-sm font-extrabold text-[#2D2640] whitespace-nowrap cursor-pointer"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Portal</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('reader')}
            className="pop-pill-lavender inline-flex items-center gap-2 rounded-full border-2 border-[#946ED2] bg-[#DCC0FF] px-4 py-2 text-xs sm:text-sm font-extrabold text-[#2B1845] whitespace-nowrap cursor-pointer"
          >
            <BookIcon className="w-4 h-4" />
            <span>Switch to Deep Reader</span>
          </button>
        </div>
      </div>

      {/* Motion Progress Bar */}
      <div className="mb-8 rounded-3xl border-2 border-[#A4E3CE] bg-[#ECFCF5] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4 text-xs sm:text-sm font-extrabold text-[#1E614E] mb-2.5">
          <span>
            Scene {activeStage.stepNumber} of 0{VISUAL_EXPLORER_STAGES.length}: {activeStage.title}
          </span>
          <span className="tabular-nums">{progress}% Explored</span>
        </div>
        <div className="h-3.5 w-full overflow-hidden rounded-full bg-white border-2 border-[#A4E3CE]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7CE3BE] to-[#87CEFA] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Interactive Stage Card */}
      <section
        aria-label="Interactive visual scene"
        className="rounded-[2.25rem] border-[3px] border-[#96DFC6] bg-gradient-to-br from-[#E7FCF3] via-[#ECF8FE] to-[#DCF0FE] p-6 sm:p-9 shadow-[0_12px_0_#C2EBD9]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border-2 border-white/90 bg-white/65 p-4 sm:p-6">
            <StageSceneGraphic sceneType={activeStage.sceneType} boosted={boostedGlow} />
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-bold text-[#41616E]">
                {boostedGlow ? 'Luminance Boost: High Glow Active' : 'Luminance Boost: Gentle Twilight'}
              </span>
              <button
                type="button"
                onClick={() => setBoostedGlow((prev) => !prev)}
                aria-pressed={boostedGlow}
                className="pop-pill-mint rounded-full border-2 border-[#4AB18E] bg-[#A2EED2] px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#15483A] whitespace-nowrap cursor-pointer"
              >
                {boostedGlow ? 'Dim Glow' : 'Boost Glow'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-[#267861]">
                Scene {activeStage.stepNumber} <span aria-hidden="true">·</span> {activeStage.subtitle}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2D2640] mt-2">
                {activeStage.title}
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#425060]">
                {activeStage.caption}
              </p>

              <div className="mt-6 border-t-2 border-[#BEE9DB] pt-4 flex items-baseline justify-between gap-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#267861]">
                  {activeStage.factLabel}
                </span>
                <span className="font-display text-lg font-bold text-[#2D2640] tabular-nums">
                  {activeStage.factValue}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="pop-pill-neutral inline-flex items-center gap-2 rounded-full border-2 border-[#B9DDD0] bg-white px-5 py-2.5 text-sm font-extrabold text-[#2D2640] disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === VISUAL_EXPLORER_STAGES.length - 1}
                className="pop-pill-mint inline-flex items-center gap-2 rounded-full border-2 border-[#4AB18E] bg-[#8EE7C7] px-5 py-2.5 text-sm font-extrabold text-[#15483A] disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                <span>Next Scene</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scrollable Scene Selector Strip */}
      <section aria-label="All story scenes" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VISUAL_EXPLORER_STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left rounded-3xl border-2 p-5 transition-all cursor-pointer ${
                isActive
                  ? 'border-[#4AB18E] bg-[#E3FAF0] shadow-[0_6px_0_#9DE0C8] -translate-y-0.5'
                  : 'border-[#D5EDE4] bg-white hover:border-[#8AD7BD] hover:-translate-y-0.5'
              }`}
            >
              <p className="text-xs font-extrabold text-[#267861] tabular-nums">Scene {stage.stepNumber}</p>
              <h3 className="font-display text-lg font-bold text-[#2D2640] mt-1">{stage.title}</h3>
              <p className="mt-1.5 text-xs font-semibold text-[#546273] line-clamp-2">{stage.subtitle}</p>
            </button>
          );
        })}
      </section>
    </main>
  );
}
