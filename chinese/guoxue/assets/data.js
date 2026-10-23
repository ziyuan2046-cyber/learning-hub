import { grade1 } from './grade1.js';
import { grade2 } from './grade2.js';
import { grade3 } from './grade3.js';
import { grade4 } from './grade4.js';
import { grade5 } from './grade5.js';
import { grade6 } from './grade6.js';
import { supplemental } from './supplemental.js';
import { textbookExtras } from './textbook-extras.js';
import { classicalTexts } from './textbook-classics.js';
import { lessonExtra } from './lesson-extra.js';
import { corrections } from './corrections.js';
import { TEXTBOOK_ENTRIES } from './textbook-order.js';
import { gradeThemes, volumeLabel } from './curriculum.js';

export const categories = [
  { id: 'poetry', name: '古诗词', short: '诗', color: '#A94B3C', soft: '#F4E5E0', icon: 'poem', description: '诗、词、曲' },
  { id: 'classical', name: '文言文', short: '文', color: '#4A657D', soft: '#E2EAF0', icon: 'three', description: '课内古文' },
  { id: 'fable', name: '寓言', short: '寓', color: '#9A6A2F', soft: '#F2E8D5', icon: 'fable', description: '寓言故事' },
  { id: 'myth', name: '神话传说', short: '神', color: '#6E6244', soft: '#EEE9DC', icon: 'rules', description: '传统故事' },
  { id: 'mengxue', name: '三字经', short: '经', color: '#627056', soft: '#E6EBDD', icon: 'three', description: '蒙学经典' },
];

const catalogRaw = [...grade1, ...grade2, ...grade3, ...grade4, ...grade5, ...grade6, ...supplemental, ...textbookExtras, ...classicalTexts, ...lessonExtra, ...corrections];
const catalogById = catalogRaw.reduce((map, item) => {
  map.set(item.id, { ...(map.get(item.id) || {}), ...item });
  return map;
}, new Map());

export const items = Object.entries(TEXTBOOK_ENTRIES).map(([id, entry]) => {
  const source = catalogById.get(id);
  if (!source) return null;
  const category = categories.find(c => c.id === source.category) || categories[0];
  const visual = source.visual || source.image || 'classic-books';
  return {
    ...source,
    ...entry,
    category: category.id,
    categoryName: category.name,
    image: visual,
    scopeType: 'textbook',
    scopeName: '统编课文',
    sourceLabel: entry.unit,
    sourceNote: '统编版语文' + entry.grade + '年级' + volumeLabel(entry.volume) + ' ' + entry.unit,
    edition: '2026统编版',
    gradeLabel: entry.grade + '年级' + volumeLabel(entry.volume),
    volumeLabel: volumeLabel(entry.volume),
  };
}).filter(Boolean).sort((a, b) => a.grade - b.grade || (a.volume === '上' ? 0 : 1) - (b.volume === '上' ? 0 : 1) || a.order - b.order);

export const grades = gradeThemes;
export const volumeOptions = [{ id: 'all', label: '全册' }, { id: '\\u4e0a', label: '上册' }, { id: '\\u4e0b', label: '下册' }];
export const categoryById = Object.fromEntries(categories.map(c => [c.id, c]));
export const itemById = Object.fromEntries(items.map(i => [i.id, i]));

export function searchItems(list, options = {}) {
  const grade = options.grade || 'all';
  const category = options.category || 'all';
  const volume = options.volume || 'all';
  const query = String(options.keyword || '').trim().toLowerCase();
  return list.filter(item => {
    if (grade !== 'all' && item.grade !== Number(grade)) return false;
    if (category !== 'all' && item.category !== category) return false;
    if (volume !== 'all' && item.volume !== volume) return false;
    if (!query) return true;
    return [item.title, item.author, item.dynasty, item.excerpt, item.meaning, item.unit, ...(item.tags || []), ...(item.keywords || [])]
      .filter(Boolean).join(' ').toLowerCase().includes(query);
  });
}
