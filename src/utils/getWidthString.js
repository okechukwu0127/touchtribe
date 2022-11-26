export default function getWidthString(span) {
  if (!span) return;

  const width = (span / 12) * 100;

  return `width:${width}%;`;
}
