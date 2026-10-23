export const semesterOptions = [
  { id: 'all', label: '全册' },
  { id: '上', label: '上册' },
  { id: '下', label: '下册' },
];
export const gradeOptions = [1,2,3,4,5,6].map(grade => ({ grade, label: grade + '年级' }));
export const gradeThemes = [
  { grade: 1, title: '蒙以养正', subtitle: '识字 · 诵读 · 童趣' },
  { grade: 2, title: '童声诵雅', subtitle: '韵律 · 想象 · 积累' },
  { grade: 3, title: '文以载道', subtitle: '篇章 · 意象 · 表达' },
  { grade: 4, title: '思辨明理', subtitle: '古文 · 哲理 · 迁移' },
  { grade: 5, title: '博观约取', subtitle: '家国 · 群书 · 思辨' },
  { grade: 6, title: '融会贯通', subtitle: '综合 · 赏析 · 创作' },
];
export const volumeLabel = volume => volume === '上' ? '上册' : volume === '下' ? '下册' : '课外';
export const scopeLabels = {
  textbook: { name: '统编课文', color: '#A64B3C', soft: '#F1E1DA' },
  garden: { name: '语文园地', color: '#547C73', soft: '#E2EBE5' },
  classic: { name: '课外国学', color: '#8B744D', soft: '#F1E7D4' },
};
export const referenceLinks = [
  { name: '人教社教材中心', url: 'https://jc.pep.com.cn/?filed=%E5%B0%8F%E5%AD%A6&subject=%E8%AF%AD%E6%96%87', note: '小学语文教材电子版入口' },
  { name: '人教社官网', url: 'https://www.pep.com.cn/xxyw/', note: '语文教材与教研资讯' },
];

export const volumeOptions = [{ id: 'all', label: '全册' }, { id: '\u4e0a', label: '上册' }, { id: '\u4e0b', label: '下册' }];
