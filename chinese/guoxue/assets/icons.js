const ICONS = {
  poem: `<path d="M5 5h12a2 2 0 0 1 2 2v11H7a2 2 0 0 1-2-2V5Z"/><path d="M8 9h8M8 13h7M9 17c1.5-2.2 4-2.2 5.5 0"/>`,
  idiom: `<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5M8 17h8"/>`,
  fable: `<path d="M4 6c4-2 8 1 8 1s4-3 8-1v12c-4-2-8 1-8 1s-4-3-8-1V6Z"/><path d="M12 7v12"/>`,
  three: `<path d="M4 7h16M4 12h16M4 17h16"/><path d="M8 4v16M16 4v16"/>`,
  lunyu: `<path d="M5 5h9a3 3 0 0 1 3 3v11H8a3 3 0 0 1-3-3V5Z"/><path d="M8 9h6M8 13h4M17 8c2 1 3 3 2 5"/>`,
  rules: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>`,
  thousand: `<path d="M5 5h14M12 5v14M5 19h14"/><path d="M5 12h14"/>`,
  history: `<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>`,
  home: `<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>`,
  search: `<circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/>`,
  heart: `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>`,
  pause: `<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>`,
  play: `<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>`,
  volume: `<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>`,
  arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  back: `<path d="m15 18-6-6 6-6"/>`,
  close: `<path d="m6 6 12 12M18 6 6 18"/>`,
  filter: `<path d="M4 6h16M7 12h10M10 18h4"/>`,
  sparkle: `<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/>`,
  shuffle: `<path d="M4 7h3c5 0 7 10 12 10h1"/><path d="m17 14 3 3-3 3"/><path d="M4 17h3c2.2 0 3.8-1.9 5.2-4"/><path d="M14 8.8C15 7.6 16 7 17 7h3"/><path d="m17 4 3 3-3 3"/>`,
  check: `<path d="m5 12 4 4L19 6"/>`,
  external: `<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>`,
  chevron: `<path d="m9 18 6-6-6-6"/>`,
  more: `<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>`,
  eye: `<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`,
  pin: `<path d="m12 17-5-5 1.5-1.5L12 14l3.5-3.5L17 12l-5 5Z"/><path d="M12 3v9M9 6h6"/>`,
  light: `<path d="M9 18h6M10 22h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.8.7-1 1.6-1 2.5H9.5c0-.9-.2-1.8-1-2.5Z"/>`,
  star: `<path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.9-5.3 2.9 1-6L3.3 9.4l6-.9L12 3Z"/>`,
  quiz: `<path d="M9 9a3 3 0 1 1 5 2.2c-.8.7-2 1.2-2 2.8"/><circle cx="12" cy="18" r=".8"/>`
};

export function icon(name, size = 20, className = '') {
  return `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.book}</svg>`;
}
