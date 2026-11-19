export const isTranslationLabel = label => /^(?:通俗译文|译文|释义|句意|句子翻译|翻译句子|翻译|重点字词句意)$/u.test(label);
const standalone = /^(?:通俗译文|译文)$/u;
const textKey = text => (text || '').normalize('NFKC').replace(/[\p{P}\p{Z}\s]/gu, '');

export function distinctTexts(values, excluding = '') {
  const seen = new Set([textKey(excluding)]);
  return values.map(value => value.trim()).filter(value => {
    const key = textKey(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function readerMeaning(item) {
  const idiom = item.category === 'idiom';
  const rows = item.notes?.filter(([label]) => isTranslationLabel(label)) || [];
  const full = distinctTexts(rows.filter(([label]) => standalone.test(label)).map(([, text]) => text), item.excerpt);
  const notes = full.length ? full : distinctTexts(rows.map(([, text]) => text), item.excerpt);
  const paragraphs = notes.length ? notes : distinctTexts([item.meaning || ''], item.excerpt);
  const label = idiom ? '例句' : item.category === 'daily' ? '释义' : notes.length && !full.length ? '字句释义' : '译文';
  let audioId = '';
  if (!idiom && paragraphs.length && (!item.handout || item.audioId && item.meaning)) {
    const replaced = item.translationCorrected || notes.length && textKey(paragraphs.join('')) !== textKey(item.meaning);
    audioId = `${item.id}${replaced ? '-revision' : ''}-meaning`;
  }
  return {label, paragraphs, audioId};
}
