import React, { useMemo, useState } from 'react';
import { DEEP_READER_CHAPTERS, READER_FOOTNOTES } from '../data/learningContent';
import {
  computeReadingStats,
  LearningPath,
  PaperTint,
  TextScale,
} from '../utils/portalRouting';
import { ArrowLeftIcon, CompassIcon, DeepReaderIllustration } from './CartoonIllustrations';

interface DeepReaderViewProps {
  onNavigate: (path: LearningPath) => void;
}

const PAPER_TINT_CLASSES: Record<PaperTint, string> = {
  cream: 'bg-[#FFFDF7] border-[#E4D8F5]',
  blush: 'bg-[#FFF3F7] border-[#F4C4D8]',
  lavender: 'bg-[#F7F1FF] border-[#D3BAF7]',
};

const TEXT_SCALE_CLASSES: Record<TextScale, string> = {
  compact: 'text-[15px] leading-relaxed',
  standard: 'text-[17px] leading-[1.75]',
  large: 'text-[19px] leading-[1.82]',
};

export function DeepReaderView({ onNavigate }: DeepReaderViewProps) {
  const [paperTint, setPaperTint] = useState<PaperTint>('cream');
  const [textScale, setTextScale] = useState<TextScale>('standard');
  const [openFootnoteIds, setOpenFootnoteIds] = useState<string[]>(['fn1']);

  const stats = useMemo(() => {
    const allParagraphs = DEEP_READER_CHAPTERS.flatMap((ch) => ch.paragraphs.map((p) => p.text));
    return computeReadingStats(allParagraphs);
  }, []);

  const toggleFootnote = (id: string) => {
    setOpenFootnoteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-12">
      {/* Experience Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs sm:text-sm font-extrabold text-[#6B4899]">
            The Deep Reader <span aria-hidden="true">·</span> Annotated Field Notebook
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#2D2640] tracking-tight mt-1">
            The Secret Glow of Deep-Sea Creatures
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#6A5D8A] tabular-nums">
            <span>{DEEP_READER_CHAPTERS.length} Chapters</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{stats.wordCount} Words</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{stats.estimatedMinutes} min cozy read</span>
          </p>
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
            onClick={() => onNavigate('visual')}
            className="pop-pill-mint inline-flex items-center gap-2 rounded-full border-2 border-[#4AB18E] bg-[#8EE7C7] px-4 py-2 text-xs sm:text-sm font-extrabold text-[#15483A] whitespace-nowrap cursor-pointer"
          >
            <CompassIcon className="w-4 h-4" />
            <span>Switch to Visual Explorer</span>
          </button>
        </div>
      </div>

      {/* Reading Comfort Controls */}
      <section
        aria-label="Reading comfort settings"
        className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border-2 border-[#D7C0F7] bg-gradient-to-r from-[#F4ECFF] to-[#FFECF3] px-5 py-4"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#5A3F80]">Text Size</span>
          <div className="flex items-center gap-1 rounded-full bg-white/80 p-1 border border-[#DCC8F8]">
            {(['compact', 'standard', 'large'] as TextScale[]).map((scale) => (
              <button
                key={scale}
                type="button"
                onClick={() => setTextScale(scale)}
                aria-pressed={textScale === scale}
                className={`rounded-full px-3.5 py-1 text-xs font-extrabold capitalize transition-colors cursor-pointer whitespace-nowrap ${
                  textScale === scale
                    ? 'bg-[#D6B6FF] text-[#2B1845]'
                    : 'text-[#5D4C78] hover:text-[#2D2640]'
                }`}
              >
                {scale}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#5A3F80]">Page Tint</span>
          <div className="flex items-center gap-1 rounded-full bg-white/80 p-1 border border-[#DCC8F8]">
            {(['cream', 'blush', 'lavender'] as PaperTint[]).map((tint) => (
              <button
                key={tint}
                type="button"
                onClick={() => setPaperTint(tint)}
                aria-pressed={paperTint === tint}
                className={`rounded-full px-3.5 py-1 text-xs font-extrabold capitalize transition-colors cursor-pointer whitespace-nowrap ${
                  paperTint === tint
                    ? 'bg-[#FFD2E4] text-[#451E33]'
                    : 'text-[#5D4C78] hover:text-[#2D2640]'
                }`}
              >
                {tint}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Book + Nerdy Margin Notes Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Book Pages */}
        <article
          className={`lg:col-span-8 rounded-[2.25rem] border-[3px] p-7 sm:p-11 shadow-[0_12px_0_#DFC9FA] transition-colors duration-200 ${PAPER_TINT_CLASSES[paperTint]}`}
        >
          <div className="space-y-10">
            {DEEP_READER_CHAPTERS.map((chapter, idx) => (
              <section
                key={chapter.id}
                aria-labelledby={chapter.id}
                className={idx > 0 ? 'border-t-2 border-[#EDE2FA] pt-9' : ''}
              >
                <p className="text-xs sm:text-sm font-extrabold text-[#714EA3]">
                  {chapter.chapterNumber} <span aria-hidden="true">·</span> {chapter.kicker}
                </p>
                <h2 id={chapter.id} className="font-display text-2xl sm:text-3xl font-bold text-[#2D2640] mt-1.5 mb-5">
                  {chapter.title}
                </h2>

                <div className={`space-y-4 font-semibold text-[#3C3452] max-w-[65ch] ${TEXT_SCALE_CLASSES[textScale]}`}>
                  {chapter.paragraphs.map((para) => {
                    const note = para.footnoteId ? READER_FOOTNOTES[para.footnoteId] : null;
                    const isOpen = note ? openFootnoteIds.includes(note.id) : false;

                    return (
                      <div key={para.id}>
                        <p>
                          {para.text}{' '}
                          {note && (
                            <button
                              type="button"
                              onClick={() => toggleFootnote(note.id)}
                              aria-expanded={isOpen}
                              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-extrabold align-baseline transition-colors cursor-pointer whitespace-nowrap ${
                                isOpen
                                  ? 'border-[#8D68C9] bg-[#DFC5FF] text-[#2B1845]'
                                  : 'border-[#D9C4F5] bg-[#F6EEFF] text-[#5C3D8A] hover:bg-[#EBDDFF]'
                              }`}
                            >
                              {note.marker}
                            </button>
                          )}
                        </p>

                        {/* Mobile inline footnote drawer */}
                        {note && isOpen && (
                          <div className="lg:hidden mt-3 rounded-2xl border-2 border-[#E3CCF9] bg-[#FAF4FF] p-4 text-sm">
                            <p className="font-display font-bold text-[#4A2D75]">
                              {note.marker}: {note.term}
                            </p>
                            <p className="mt-1 font-semibold text-[#4B4063] leading-relaxed">{note.detail}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>

        {/* Cozy Side Margin Notes Column */}
        <aside aria-label="Nerdy margin notes" className="lg:col-span-4 space-y-5">
          <div className="rounded-[2rem] border-[3px] border-[#D7BEF7] bg-gradient-to-br from-[#F4ECFF] to-[#FFECF4] p-6 shadow-[0_8px_0_#DFC9FA]">
            <DeepReaderIllustration className="w-full h-32 mb-3" />
            <h2 className="font-display text-xl font-bold text-[#2D2640]">Nerdy Margin Notes</h2>
            <p className="mt-1.5 text-sm font-semibold text-[#54496B]">
              Click any Note marker inside the chapters to pin extra science trivia right here.
            </p>
          </div>

          <div className="space-y-4">
            {Object.values(READER_FOOTNOTES).map((note) => {
              const isOpen = openFootnoteIds.includes(note.id);
              return (
                <div
                  key={note.id}
                  className={`rounded-3xl border-2 p-5 transition-all ${
                    isOpen
                      ? 'border-[#9B77D6] bg-white shadow-[0_6px_0_#DFC9FA]'
                      : 'border-[#E7D9FA] bg-[#FAF6FF] opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-[#6B4899]">{note.marker}</span>
                    <button
                      type="button"
                      onClick={() => toggleFootnote(note.id)}
                      className="text-xs font-extrabold text-[#5A3F80] underline underline-offset-4 hover:text-[#2D2640] cursor-pointer"
                    >
                      {isOpen ? 'Hide Note' : 'Reveal Note'}
                    </button>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#2D2640] mt-1">{note.term}</h3>
                  {isOpen ? (
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[#4C4263]">{note.detail}</p>
                  ) : (
                    <p className="mt-1.5 text-xs font-semibold text-[#7A6E94]">
                      Collapsed. Click Reveal Note to read this margin annotation.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}
