export function getRelativeDate(hoursOffset = 0): Date {
  const date = new Date();
  date.setHours(date.getHours() + hoursOffset);
  return date;
}

export function dateToServerFormat(date: Date): number[] {
  const year = date.getFullYear();
  return [
    year & 0xFF,
    (year >> 8) & 0xFF,
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
} 