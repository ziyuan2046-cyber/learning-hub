# Study Kai web fonts

Two separately licensed web fonts share the CSS `HanziStudyKai` family through Unicode coverage. They are embedded in `../css/hanzi-fonts.css` for offline access.

## hanzi-study-kai.woff2

Generated 2026-11-05 from the existing application stroke outlines, not a copy of a proprietary system font. Covers all 3,105 distinct characters for which this application already has stroke outlines (writing, reading and the first group of chemical elements). Coordinates and contours come from the existing datasets; original datasets remain unchanged.

The outlines derive from the Arphic PL KaitiM GB / Arphic PL UKai work distributed by Make Me a Hanzi. This derived font is named HanziStudyKai and distributed under the Arphic Public License. See Arphic-Public-License.txt, Arphic-Public-License-zh.txt and MakeMeAHanzi-COPYING.txt. Original copyright: Arphic Technology Co., Ltd. Make Me a Hanzi stroke processing: https://github.com/skishore/makemeahanzi . This generated derivative: 2026-11-05.

## hanzi-study-kai-rare.woff2

Separate 14-character web-only subset derived from LXGW WenKai Regular v1.530, for element-name characters missing from the application's stroke outlines. Font outline coordinates have been normalized for the application's cell and the derivative font has been renamed HanziStudyKaiRare.

Copyright 2021-2026 LXGW. Copyright 2020 The Klee Project Authors. Distributed under SIL Open Font License 1.1; see OFL.txt. Upstream: https://github.com/lxgw/LxgwWenKai/releases/tag/v1.530 .

These 14 glyphs provide whole-character display only. They are deliberately NOT presented as verified stroke-order animations. The full outlines used for display are registered by `../data/glyph-support.js`.

No browser requests to a third-party font CDN are needed at runtime.

The complete reading-only outlines have also been restored from the original-format `hanzi-writer-data` npm package 2.0.1. This repairs the truncated custom encodings in 604 characters without changing textbook entries, pronunciations or stroke counts. The package's original Arphic license is included as HanziWriterData-Arphic-License.txt. The generated common font uses these restored outlines for the same characters.
