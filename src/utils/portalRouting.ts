export type LearningPath = 'portal' | 'visual' | 'reader';

export type PaperTint = 'cream' | 'blush' | 'lavender';
export type TextScale = 'compact' | 'standard' | 'large';

export interface RouteState {
  path: LearningPath;
}

export function parseRouteFromLocation(hash: string, search: string): LearningPath {
  const normalizedHash = hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (normalizedHash === 'visual' || normalizedHash.startsWith('visual?')) {
    return 'visual';
  }
  if (normalizedHash === 'reader' || normalizedHash.startsWith('reader?')) {
    return 'reader';
  }

  if (search) {
    const params = new URLSearchParams(search);
    const paramPath = params.get('path')?.trim().toLowerCase();
    if (paramPath === 'visual') return 'visual';
    if (paramPath === 'reader') return 'reader';
  }

  return 'portal';
}

export function buildRouteHash(path: LearningPath): string {
  if (path === 'visual') return '#/visual';
  if (path === 'reader') return '#/reader';
  return '#/';
}

export function computeStepProgress(activeIndex: number, totalSteps: number): number {
  if (totalSteps <= 0) return 0;
  const clamped = Math.max(0, Math.min(activeIndex, totalSteps - 1));
  return Math.round(((clamped + 1) / totalSteps) * 100);
}

export function computeReadingStats(
  paragraphs: string[],
  wordsPerMinute = 180
): { wordCount: number; estimatedMinutes: number } {
  const joined = paragraphs.join(' ').trim();
  if (!joined) {
    return { wordCount: 0, estimatedMinutes: 0 };
  }
  const wordCount = joined.split(/\s+/).filter(Boolean).length;
  const estimatedMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return { wordCount, estimatedMinutes };
}

export function containsEmoji(input: string): boolean {
  // Matches Unicode Extended Pictographic characters and Regional Indicator Symbols
  const emojiRegex = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}]/u;
  return emojiRegex.test(input);
}
