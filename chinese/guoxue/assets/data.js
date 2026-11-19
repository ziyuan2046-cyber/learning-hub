import { packData } from './pack-data.js';
import { classicData } from './classic-data.js';
import { textbookRecitations } from './textbook-recitation.js';
import { attachmentRecitations } from './attachment-recitation.js';
import { lessonStudy } from './lesson-study.js';

export const categories = [
  { id: 'poetry', name: '古诗词', short: '诗', color: '#A94B3C', soft: '#F4E5E0', icon: 'poem', description: '诗、词、曲' },
  { id: 'idiom', name: '成语', short: '成', color: '#8A5B36', soft: '#F3E7D8', icon: 'fable', description: '释义与例句' },
  { id: 'classical', name: '文言文', short: '文', color: '#4A657D', soft: '#E2EAF0', icon: 'three', description: '古文名篇' },
  { id: 'fable', name: '寓言', short: '寓', color: '#9A6A2F', soft: '#F2E8D5', icon: 'fable', description: '寓言故事' },
  { id: 'myth', name: '神话传说', short: '神', color: '#6E6244', soft: '#EEE9DC', icon: 'rules', description: '传统故事' },
  { id: 'sanzi', name: '三字经', short: '三', color: '#8A5B36', soft: '#F3E7D8', icon: 'three', description: '蒙学经典' },
  { id: 'lunyu', name: '论语', short: '论', color: '#4A657D', soft: '#E2EAF0', icon: 'three', description: '孔子言行' },
  { id: 'dizigui', name: '弟子规', short: '规', color: '#3D6159', soft: '#E2EBE5', icon: 'rules', description: '行为规范' },
  { id: 'qianziwen', name: '千字文', short: '千', color: '#9A6A2F', soft: '#F2E8D5', icon: 'poem', description: '识字启蒙' },
  { id: 'daily', name: '日积月累', short: '积', color: '#8A5B36', soft: '#F6EADA', icon: 'book', description: '谚语、名言与文化常识' },
  { id: 'text-recitation', name: '课文背诵', short: '背', color: '#245544', soft: '#E4EEE7', icon: 'book', description: '课后要求背诵的课文' },
];

const categoryById = Object.fromEntries(categories.map(c => [c.id, c]));
const gradeLabels = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
const pinyinFixes = {
  'pack-2-上-poem-18': pinyin => pinyin.replace('chì lēi chuān', 'chì lè chuān').replace('dī jiàn niú', 'dī xiàn niú'),
  'pack-5-上-poem-82': pinyin => pinyin.replace('mò ér shí zhī', 'mò ér zhì zhī').replace('shì zhī yě', 'shì zhì yě'),
  'pack-6-上-poem-100': pinyin => pinyin.replace('hū jiàn', 'hū xiàn'),
};

function normalize(item, index, extra = false) {
  const category = categoryById[item.category] || categories[0];
  return {
    order: index,
    ...item,
    pinyin: pinyinFixes[item.id]?.(item.pinyin) ?? item.pinyin,
    category: category.id,
    categoryName: category.name,
    image: item.image || (category.id === 'classical' ? 'classic-books' : 'poetry-mountain-river'),
    gradeLabel: extra ? '课外拓展' : (item.sourceType === 'classics' ? gradeLabels[item.grade - 1] : (item.gradeLabel || (gradeLabels[item.grade - 1] + item.volume + '册'))),
    volumeLabel: extra ? '课外' : (item.volume + '册'),
    scopeType: extra ? 'extra' : 'textbook',
    scopeName: extra ? '课外拓展' : '教材内容',
    sourceLabel: extra ? (item.sourceLabel || '拓展诗词包') : (item.sourceLabel || (item.sourceType === 'classics' ? '国学经典' : (gradeLabels[item.grade - 1] + item.volume + '册 · 必背'))),
  };
}

const baseItems = [
  ...packData.lesson.map((item, index) => normalize(item, index, false)),
  ...packData.extra.map((item, index) => normalize(item, 1000 + index, true)),
  ...classicData.map((item, index) => normalize(item, 2000 + index, false)),
  ...textbookRecitations.map((item, index) => ({ ...normalize(item, 3000 + index), scopeType: 'recitation', scopeName: '课本必背' })),
];

const titleKey = title => title.replace(/[\p{P}\p{Z}\s]/gu, '');
const textKey = text => (text || '').replace(/[\p{P}\p{Z}\s]/gu, '');
const explicitMatches = {
  'guide-6b-07': 'pack-6-下-poem-112',
  'guide-6b-11-1': 'pack-6-下-poem-113',
};
const existingById = new Map(baseItems.map(item => [item.id, item]));
export const reciteAliases = {
  'recite-4b-stars': ['guide-4b-06', 'guide-4b-07', 'guide-4b-08'],
};
export const handoutItems = attachmentRecitations.map((row, index) => {
  const matched = existingById.get(explicitMatches[row.id]) || baseItems.find(item => item.grade === row.grade && item.volume === row.volume && item.scopeType !== 'extra' && titleKey(item.title) === titleKey(row.title));
  const name = gradeLabels[row.grade - 1] + row.volume + '册';
  const guide = lessonStudy[matched?.id];
  const excerpt = row.text || (row.existingTextOnly ? matched?.excerpt : '') || guide?.reading?.join('\n') || row.notes.find(([label]) => /主旨|学习重点|赏析/.test(label))?.[1] || row.requirement;
  const aligned = Boolean(matched?.pinyin && textKey(excerpt) === textKey(matched.excerpt));
  const item = normalize({ ...matched, ...row, id: matched?.id || row.id, gradeLabel: name,
    excerpt, sourceLabel: '随附复习资料', sourceType: 'handout-recitation',
    range: row.requirement, audioId: aligned ? matched.id : '', pinyin: aligned ? matched.pinyin : '',
    author: row.author || matched?.author || '', dynasty: row.dynasty || matched?.dynasty || '',
    hasOriginal: Boolean(row.text || (row.existingTextOnly && matched?.excerpt)), importKey: row.id,
  }, index);
  return { ...item, handout: true, scopeType: matched?.scopeType || 'recitation', scopeName: matched?.scopeName || '课本必背' };
});
const updates = new Map(handoutItems.map(item => [item.id, item]));
export const items = [...baseItems.map(item => updates.get(item.id) || item), ...handoutItems.filter(item => !existingById.has(item.id))];

export const lessonItems = items.filter(i => i.scopeType === 'textbook');
export const extraItems = items.filter(i => i.scopeType === 'extra');
export const classicItems = items.filter(i => i.sourceType === 'classics');
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
    return [item.title, item.author, item.dynasty, item.excerpt, item.meaning, item.tags, item.sourceLabel, item.range, item.notes?.flat().join(' ')]
      .filter(Boolean).join(' ').toLowerCase().includes(query);
  });
}
