import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  buildRouteHash,
  computeReadingStats,
  computeStepProgress,
  containsEmoji,
  parseRouteFromLocation,
} from './portalRouting';
import {
  DEEP_READER_CHAPTERS,
  READER_FOOTNOTES,
  VISUAL_EXPLORER_STAGES,
} from '../data/learningContent';

test('parseRouteFromLocation resolves hash routes accurately', () => {
  assert.equal(parseRouteFromLocation('#/visual', ''), 'visual');
  assert.equal(parseRouteFromLocation('#/reader', ''), 'reader');
  assert.equal(parseRouteFromLocation('#/', ''), 'portal');
  assert.equal(parseRouteFromLocation('', ''), 'portal');
});

test('parseRouteFromLocation resolves query parameter routes accurately', () => {
  assert.equal(parseRouteFromLocation('', '?path=visual'), 'visual');
  assert.equal(parseRouteFromLocation('', '?path=reader'), 'reader');
  assert.equal(parseRouteFromLocation('', '?path=unknown'), 'portal');
});

test('buildRouteHash produces canonical hash strings', () => {
  assert.equal(buildRouteHash('visual'), '#/visual');
  assert.equal(buildRouteHash('reader'), '#/reader');
  assert.equal(buildRouteHash('portal'), '#/');
});

test('computeStepProgress clamps and calculates percentages cleanly', () => {
  assert.equal(computeStepProgress(0, 4), 25);
  assert.equal(computeStepProgress(1, 4), 50);
  assert.equal(computeStepProgress(3, 4), 100);
  assert.equal(computeStepProgress(10, 4), 100);
  assert.equal(computeStepProgress(-2, 4), 25);
  assert.equal(computeStepProgress(0, 0), 0);
});

test('computeReadingStats counts words and estimates minutes', () => {
  assert.deepEqual(computeReadingStats([]), { wordCount: 0, estimatedMinutes: 0 });
  const sample = ['One two three four five.', 'Six seven eight nine ten.'];
  assert.deepEqual(computeReadingStats(sample, 10), { wordCount: 10, estimatedMinutes: 1 });
  const longSample = Array.from({ length: 20 }, () => 'word '.repeat(15).trim());
  assert.deepEqual(computeReadingStats(longSample, 150), { wordCount: 300, estimatedMinutes: 2 });
});

test('containsEmoji detects emojis and verifies all source files are 100% emoji-free', () => {
  assert.equal(containsEmoji('Hello world'), false);
  assert.equal(containsEmoji('Hello ✨'), true);
  assert.equal(containsEmoji('📖 Book'), true);

  for (const stage of VISUAL_EXPLORER_STAGES) {
    assert.equal(containsEmoji(stage.title), false);
    assert.equal(containsEmoji(stage.subtitle), false);
    assert.equal(containsEmoji(stage.caption), false);
    assert.equal(containsEmoji(stage.factLabel), false);
    assert.equal(containsEmoji(stage.factValue), false);
  }

  for (const chapter of DEEP_READER_CHAPTERS) {
    assert.equal(containsEmoji(chapter.title), false);
    assert.equal(containsEmoji(chapter.kicker), false);
    for (const para of chapter.paragraphs) {
      assert.equal(containsEmoji(para.text), false);
    }
  }

  for (const note of Object.values(READER_FOOTNOTES)) {
    assert.equal(containsEmoji(note.term), false);
    assert.equal(containsEmoji(note.detail), false);
  }

  const rootDir = path.resolve(process.cwd());
  const filesToScan = [
    path.join(rootDir, 'index.html'),
    path.join(rootDir, 'src/index.css'),
    path.join(rootDir, 'src/App.tsx'),
    path.join(rootDir, 'src/components/TopBar.tsx'),
    path.join(rootDir, 'src/components/SplitPortal.tsx'),
    path.join(rootDir, 'src/components/CartoonIllustrations.tsx'),
    path.join(rootDir, 'src/components/VisualExplorerView.tsx'),
    path.join(rootDir, 'src/components/DeepReaderView.tsx'),
  ];

  for (const filePath of filesToScan) {
    const contents = fs.readFileSync(filePath, 'utf8');
    assert.equal(
      containsEmoji(contents),
      false,
      `Expected zero emojis in ${path.relative(rootDir, filePath)}`
    );
  }

  const topBarSource = fs.readFileSync(path.join(rootDir, 'src/components/TopBar.tsx'), 'utf8');
  assert.equal(topBarSource.includes('Forgotten Tales'), true);
  assert.equal(topBarSource.includes('Visual Explorer'), false);
  assert.equal(topBarSource.includes('Deep Reader'), false);
  assert.equal(topBarSource.includes('Quick Start'), false);

  const splitPortalSource = fs.readFileSync(path.join(rootDir, 'src/components/SplitPortal.tsx'), 'utf8');
  assert.equal(splitPortalSource.includes('What If Machines Could Tell You Their'), true);
  assert.equal(splitPortalSource.includes('Stories?'), true);
  assert.equal(splitPortalSource.includes('Scroll Explorer'), true);
  assert.equal(splitPortalSource.includes('The Interactive Book'), true);
  assert.equal(splitPortalSource.includes('https://starship-tales-passport.lovable.app/'), true);
  assert.equal(splitPortalSource.includes('https://forgotten-tales-alpha.vercel.app/'), true);
});
