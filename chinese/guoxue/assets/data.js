import { grade1 } from './grade1.js';
import { grade2 } from './grade2.js';
import { grade3 } from './grade3.js';
import { grade4 } from './grade4.js';
import { grade5 } from './grade5.js';
import { grade6 } from './grade6.js';

export const categories = [
  { id: 'poetry', name: '古诗词', short: '诗', color: '#A94B3C', soft: '#F4E5E0', icon: 'poem', description: '意象与声韵' },
  { id: 'idiom', name: '成语', short: '成', color: '#3B6C66', soft: '#DDEAE6', icon: 'idiom', description: '典故与表达' },
  { id: 'fable', name: '寓言', short: '寓', color: '#9A6A2F', soft: '#F2E8D5', icon: 'fable', description: '故事与道理' },
  { id: 'sanzi', name: '三字经', short: '经', color: '#4A657D', soft: '#E2EAF0', icon: 'three', description: '蒙学与常识' },
  { id: 'lunyu', name: '论语', short: '论', color: '#77513D', soft: '#EEE2DA', icon: 'lunyu', description: '仁礼与学习' },
  { id: 'dizigui', name: '弟子规', short: '规', color: '#6E6244', soft: '#EEE9DC', icon: 'rules', description: '言行与品格' },
  { id: 'qianziwen', name: '千字文', short: '千', color: '#627056', soft: '#E6EBDD', icon: 'thousand', description: '识字与天地' },
];

export const grades = [1, 2, 3, 4, 5, 6].map((grade) => ({
  grade,
  label: `${grade}年级`,
  title: ['蒙以养正', '童声诵雅', '文以载道', '思辨明理', '博观约取', '融会贯通'][grade - 1],
  subtitle: ['启蒙 · 识字 · 诵读', '故事 · 韵律 · 积累', '篇章 · 意象 · 表达', '古文 · 哲理 · 迁移', '经典 · 群书 · 思辨', '综合 · 赏析 · 创作'][grade - 1],
}));

const prepared = [...grade1, ...grade2, ...grade3, ...grade4, ...grade5, ...grade6].map((item, index) => {
  const category = categories.find((c) => c.id === item.category);
  return {
    ...item,
    id: item.id || `${item.category}-${item.grade}-${index + 1}`,
    categoryName: category?.name || item.category,
  };
});

export const items = prepared;
export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
export const itemById = Object.fromEntries(items.map((item) => [item.id, item]));

export function searchItems(list, { grade = 'all', category = 'all', keyword = '', favoriteIds = [], onlyFavorites = false } = {}) {
  const query = keyword.trim().toLowerCase();
  return list.filter((item) => {
    if (onlyFavorites && !favoriteIds.includes(item.id)) return false;
    if (grade !== 'all' && item.grade !== Number(grade)) return false;
    if (category !== 'all' && item.category !== category) return false;
    if (!query) return true;
    const haystack = [item.title, item.author, item.dynasty, item.summary, item.excerpt, item.meaning, ...(item.tags || []), ...(item.keywords || [])]
      .filter(Boolean).join(' ').toLowerCase();
    return haystack.includes(query);
  });
}

export function getCounts(list = items) {
  return list.reduce((acc, item) => {
    acc.all = (acc.all || 0) + 1;
    acc[item.category] = (acc[item.category] || 0) + 1;
    acc[`g${item.grade}`] = (acc[`g${item.grade}`] || 0) + 1;
    return acc;
  }, {});
}
