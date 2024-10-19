// Tag: Date
function dayOfTheWeek(year: number, month: number, day: number): string {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  if (month < 3) {
    month += 12;
    year--;
  }

  const k = year % 100;
  const j = Math.floor(year / 100);

  let h = (day + Math.floor((13 * (month + 1)) / 5) + k + Math.floor(k / 4) +
    Math.floor(j / 4) + 5 * j) % 7;
  return days[h--];
}

export { dayOfTheWeek };
