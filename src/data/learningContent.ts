export interface VisualStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  caption: string;
  factLabel: string;
  factValue: string;
  sceneType: 'surface-dive' | 'chemical-spark' | 'counter-glow' | 'lantern-symbiosis';
}

export interface ReaderFootnote {
  id: string;
  marker: string;
  term: string;
  detail: string;
}

export interface ReaderChapter {
  id: string;
  chapterNumber: string;
  title: string;
  kicker: string;
  paragraphs: {
    id: string;
    text: string;
    footnoteId?: string;
  }[];
}

export const VISUAL_EXPLORER_STAGES: VisualStage[] = [
  {
    id: 'twilight-dive',
    stepNumber: '01',
    title: 'Descending Past the Sunlight Zone',
    subtitle: 'Where daytime blues fade into quiet pastel twilight',
    caption:
      'Two hundred meters below the ocean surface, sunlight scatters away. Yet instead of pure darkness, the water shimmers with living ribbons of cold blue-green light.',
    factLabel: 'Twilight Depth',
    factValue: '200m to 1,000m',
    sceneType: 'surface-dive',
  },
  {
    id: 'luciferin-spark',
    stepNumber: '02',
    title: 'The Tiny Chemical Glow Engine',
    subtitle: 'Two molecules meet and release a cool photon',
    caption:
      'Inside specialized light organs, a fuel molecule called luciferin meets a helper enzyme called luciferase. With a splash of oxygen, they release light without wasting heat.',
    factLabel: 'Energy Efficiency',
    factValue: 'Nearly 100% Cold Light',
    sceneType: 'chemical-spark',
  },
  {
    id: 'counter-illumination',
    stepNumber: '03',
    title: 'Vanishing With Belly Lanterns',
    subtitle: 'Matching the sky above to hide from below',
    caption:
      'Hatchetfish and tiny bobtail squid glow softly along their undersides. By tuning their brightness to match moonlight filtering down, their shadows completely disappear.',
    factLabel: 'Peak Wavelength',
    factValue: '475nm Ocean Blue',
    sceneType: 'counter-glow',
  },
  {
    id: 'deep-sea-alliance',
    stepNumber: '04',
    title: 'A Friendly Glow Partnership',
    subtitle: 'Tiny bacteria powering a deep-sea fishing lure',
    caption:
      'Some deep-sea creatures borrow their sparkle. The anglerfish hosts millions of glowing Vibrio bacteria inside a cozy bulb, feeding them nutrients in exchange for a steady beacon.',
    factLabel: 'Symbiotic Partners',
    factValue: 'Host + Glowing Microbes',
    sceneType: 'lantern-symbiosis',
  },
];

export const READER_FOOTNOTES: Record<string, ReaderFootnote> = {
  fn1: {
    id: 'fn1',
    marker: 'Note 1',
    term: 'Etymology of Bioluminescence',
    detail:
      'The word blends the Greek "bios" (living) with the Latin "lumen" (light). Over 75% of creatures observed in the open midwater column produce their own light.',
  },
  fn2: {
    id: 'fn2',
    marker: 'Note 2',
    term: 'Coelenterazine: The Ocean Favorite',
    detail:
      'While fireflies use a unique luciferin, at least nine different marine phyla—from comb jellies to deep-sea shrimp—all rely on the exact same molecule: coelenterazine.',
  },
  fn3: {
    id: 'fn3',
    marker: 'Note 3',
    term: 'Why Blue Light Travels Farthest',
    detail:
      'Seawater absorbs long red and orange wavelengths within the first 15 meters. Short blue-green wavelengths around 470-480 nanometers slice through clear ocean water like a spotlight.',
  },
  fn4: {
    id: 'fn4',
    marker: 'Note 4',
    term: 'The Secret Red Flashlight',
    detail:
      'Because most deep-sea eyes cannot detect red light, the black loosejaw dragonfish evolved a sneaky red cheek-lantern. It illuminates red-shelled shrimp without the prey ever knowing they are being watched.',
  },
};

export const DEEP_READER_CHAPTERS: ReaderChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 'Chapter I',
    title: 'The Midnight Meadow Beneath the Waves',
    kicker: 'Natural History & Ocean Optics',
    paragraphs: [
      {
        id: 'c1-p1',
        text: 'If you could shrink a reading lamp down to the size of a pinhead and drop it half a mile into the Pacific, you would still be outshone by the residents. Far below the choppy waves where surfers wait for swells, Earth holds its largest living habitat: the mesopelagic twilight zone.',
      },
      {
        id: 'c1-p2',
        text: 'Down here, solar noon looks no brighter than a distant star. Yet the water is rarely pitch black. Every brush of a fin against a drifting siphonophore or dinoflagellate triggers a silent cascade of bioluminescence—living light crafted inside biological cells.',
        footnoteId: 'fn1',
      },
    ],
  },
  {
    id: 'chapter-2',
    chapterNumber: 'Chapter II',
    title: 'Inside the Cold-Light Workshop',
    kicker: 'Molecular Chemistry',
    paragraphs: [
      {
        id: 'c2-p1',
        text: 'An old-fashioned incandescent bulb gets blisteringly hot because roughly ninety percent of its electricity leaks away as wasted infrared heat. Deep-sea organisms cannot afford that kind of energy budget; food in the abyss is far too scarce.',
      },
      {
        id: 'c2-p2',
        text: 'Instead, marine creatures run a remarkably tidy reaction. An organic compound known generally as luciferin binds with oxygen inside a pocket shaped by an enzyme called luciferase. As the molecule relaxes from its excited state, it emits a single crisp photon—almost zero heat, almost pure luminance.',
        footnoteId: 'fn2',
      },
    ],
  },
  {
    id: 'chapter-3',
    chapterNumber: 'Chapter III',
    title: 'Hiding in Plain Sight With Light',
    kicker: 'Physics & Camouflage',
    paragraphs: [
      {
        id: 'c3-p1',
        text: 'At first glance, glowing in a dark ocean sounds like a terrible way to stay hidden. But look upward from fifty meters below a swimming hatchetfish and the strategy makes immediate geometric sense: any solid body blocks the faint blue sky above, stamping a dark silhouette.',
      },
      {
        id: 'c3-p2',
        text: 'To erase that giveaway shadow, the hatchetfish lines its belly with tiny photophores tuned to the exact blue wavelength of filtered daylight. By matching both brightness and hue, the fish effectively paints the sky back onto its own underside.',
        footnoteId: 'fn3',
      },
    ],
  },
  {
    id: 'chapter-4',
    chapterNumber: 'Chapter IV',
    title: 'Private Wavelengths & Tiny Tenants',
    kicker: 'Symbiosis & Sensory Tricks',
    paragraphs: [
      {
        id: 'c4-p1',
        text: 'Not every glowing animal brews its own light chemistry. The Hawaiian bobtail squid hatches completely dark, then welcomes luminescent Vibrio fischeri bacteria from surrounding seawater into a cushioned light organ, shutting the door once a thriving colony moves in.',
      },
      {
        id: 'c4-p2',
        text: 'Meanwhile, a few crafty predators bypass the ocean-blue consensus altogether. By adding a special fluorescent filter over their light organs, dragonfish broadcast in private deep-red channels that neighboring fish are biologically blind to.',
        footnoteId: 'fn4',
      },
    ],
  },
];
