export function recitationDay(date = new Date()) {
  const pad = value => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function restoreRecitation(ids, dates, aliases) {
  const memorized = new Set(Array.isArray(ids) ? ids.filter(id => typeof id === 'string') : []);
  const completedAt = new Map(Object.entries(dates && typeof dates === 'object' ? dates : {})
    .filter(([id, day]) => memorized.has(id) && typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day)));
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

export function summarizeRecitations(items, memorized, completedAt, today = recitationDay()) {
  const days = new Map();
  const grades = Array.from({length: 6}, (_, i) => ({grade: i + 1, done: 0, total: 0}));
  let done = 0;
  for (const item of items) {
    if (!item.optional) grades[item.grade - 1].total++;
    if (!memorized.has(item.id)) continue;
    if (!item.optional) grades[item.grade - 1].done++;
    done++;
    const day = completedAt.get(item.id) || '';
    if (!days.has(day)) days.set(day, []);
    days.get(day).push(item);
  }
  const ranked = grades.filter(row => row.done > 0).sort((a, b) => b.done - a.done || a.grade - b.grade);
  let previous, rank;
  for (const [index, row] of ranked.entries()) {
    if (row.done !== previous) rank = index + 1;
    row.rank = rank;
    previous = row.done;
  }
  return {days: [...days.entries()].sort(([a], [b]) => b.localeCompare(a)), ranked, done, todayCount: days.get(today)?.length || 0};
}
