import { packData } from './pack-data.js';

export const categories = [
  { id: 'poetry', name: '古诗词', short: '诗', color: '#A94B3C', soft: '#F4E5E0', icon: 'poem', description: '诗、词、曲' },
  { id: 'classical', name: '文言文', short: '文', color: '#4A657D', soft: '#E2EAF0', icon: 'three', description: '古文名篇' },
  { id: 'fable', name: '寓言', short: '寓', color: '#9A6A2F', soft: '#F2E8D5', icon: 'fable', description: '寓言故事' },
  { id: 'myth', name: '神话传说', short: '神', color: '#6E6244', soft: '#EEE9DC', icon: 'rules', description: '传统故事' },
];

const categoryById = Object.fromEntries(categories.map(c => [c.id, c]));
const gradeLabels = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];

function normalize(item, index, extra = false) {
  const category = categoryById[item.category] || categories[0];
  return {
    order: index,
    ...item,
    category: category.id,
    categoryName: category.name,
    image: item.image || (category.id === 'classical' ? 'classic-books' : 'poetry-mountain-river'),
    gradeLabel: extra ? '课外拓展' : (item.gradeLabel || (gradeLabels[item.grade - 1] + item.volume + '册')),
    volumeLabel: extra ? '课外' : (item.volume + '册'),
    scopeType: extra ? 'extra' : 'textbook',
    scopeName: extra ? '课外拓展' : '教材必背',
    sourceLabel: extra ? '拓展诗词包' : (item.sourceLabel || (gradeLabels[item.grade - 1] + item.volume + '册 · 必背')),
  };
}

export const items = [
  ...packData.lesson.map((item, index) => normalize(item, index, false)),
  ...packData.extra.map((item, index) => normalize(item, 1000 + index, true)),
];

export const lessonItems = items.filter(i => i.scopeType === 'textbook');
export const extraItems = items.filter(i => i.scopeType === 'extra');
export const itemById = Object.fromEntries(items.map(i => [i.id, i]));

export const grades = Array.from({ length: 6 }, (_, i) => ({ grade: i + 1, label: gradeLabels[i] }));
export const volumeOptions = [{ id: 'all', label: '全册' }, { id: '上', label: '上册' }, { id: '下', label: '下册' }];
export const categoryMap = categoryById;

export function searchItems(list, options = {}) {
  const grade = options.grade || 'all';
  const category = options.category || 'all';
  const volume = options.volume || 'all';
  const scope = options.scope || 'all';
  const query = String(options.keyword || '').trim().toLowerCase();
  return list.filter(item => {
    if (scope !== 'all' && item.scopeType !== scope) return false;
    if (grade !== 'all' && item.grade !== Number(grade)) return false;
    if (category !== 'all' && item.category !== category) return false;
    if (volume !== 'all' && item.volume !== volume) return false;
    if (!query) return true;
    return [item.title, item.author, item.dynasty, item.excerpt, item.sourceLabel]
      .filter(Boolean).join(' ').toLowerCase().includes(query);
  });
}
