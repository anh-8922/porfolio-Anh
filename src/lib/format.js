const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// "2025-10" -> "Oct 2025", "2026" -> "2026", null -> "Present"
export function formatDate(value) {
  if (!value) return 'Present';
  const [year, month] = String(value).split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatRange(start, end) {
  const from = formatDate(start);
  const to = formatDate(end);
  return from === to ? from : `${from} – ${to}`;
}
