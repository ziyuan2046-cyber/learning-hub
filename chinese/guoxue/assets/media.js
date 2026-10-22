export const mediaFinders = {
  poetry: { label: '古诗讲解与朗读', source: 'B站课堂', note: '适合课前理解、课后跟读' },
  idiom: { label: '成语动画与典故', source: 'B站课堂', note: '用故事理解成语' },
  fable: { label: '寓言动画与讲读', source: 'B站课堂', note: '先看故事，再说道理' },
  sanzi: { label: '三字经诵读', source: 'B站课堂', note: '听节奏，跟读背诵' },
  lunyu: { label: '论语精讲', source: 'B站课堂', note: '从一句话理解一个人' },
  dizigui: { label: '弟子规讲读', source: 'B站课堂', note: '联系生活做践行' },
  qianziwen: { label: '千字文诵读', source: 'B站课堂', note: '识字、正音、明义' },
};

export function bilibiliSearchUrl(query) {
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(query)}`;
}

export function douyinSearchUrl(query) {
  return `https://www.douyin.com/search/${encodeURIComponent(query)}`;
}

export function makeVideoLinks(item) {
  const q = item.videoQuery || `${item.title} ${item.category === 'poetry' ? '古诗' : '讲解'} 儿童`;
  return [
    { name: 'B站', label: '打开视频课堂', url: bilibiliSearchUrl(q), tone: 'bili' },
    { name: '抖音', label: '短视频讲解', url: douyinSearchUrl(q), tone: 'douyin' },
  ];
}
