export function recitationDay(date = new Date()) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function restoreRecitation(ids, dates, aliases) {
  const memorized = new Set(Array.isArray(ids) ? ids.filter(id => typeof id === 'string') : []);
  const completedAt = new Map(Object.entries(dates && typeof dates === 'object' ? dates : {})
    .filter(([id, day]) => memorized.has(id) && typeof day === 'string' && (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(day) || /^\d{4}-\d{2}-\d{2}T/.test(day) && Number.isFinite(Date.parse(day)))));
  for (const [previous, current] of Object.entries(aliases)) {
    if (!memorized.delete(previous)) continue;
    const day = completedAt.get(previous);
    completedAt.delete(previous);
    for (const id of current) {
      memorized.add(id);
      if (day && !completedAt.has(id)) completedAt.set(id, day);
    }
  }
  return {memorized, completedAt};
}

export function completionDay(stamp) {
  if (!stamp) return '';
  return stamp.length === 10 ? stamp : recitationDay(new Date(stamp));
}

// The board uses fixed semester cutoffs rather than any particular school's calendar.
export function recitationSemester(entries, date = new Date()) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear() - Number(month === 1);
  const spring = month >= 2 && month <= 7;
  const start = `${year}-${spring ? '02' : '08'}-01`;
  const today = recitationDay(date);
  const count = entries.filter(({stamp}) => {
    const day = completionDay(stamp);
    return day >= start && day <= today;
  }).length;
  return {year, season: spring ? '春季' : '秋季', start, count};
}

export function completedRecitations(items, memorized, completedAt) {
  const itemById = new Map(items.map(item => [item.id, item]));
  const entries = [];
  for (const id of memorized) {
    const item = itemById.get(id);
    if (item) entries.push({item, stamp: completedAt.get(id) || ''});
  }
  // Keep insertion order within legacy dates, for which no exact time was recorded.
  return entries.reverse().sort((a, b) => {
    const byDay = completionDay(b.stamp).localeCompare(completionDay(a.stamp));
    return byDay || b.stamp.localeCompare(a.stamp);
  });
}
