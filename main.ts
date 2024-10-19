// main.ts

/**
 * Calculates the day of the week for a given date.
 * 
 * The function uses the Zeller's Congruence algorithm to determine
 * the day of the week. It returns the name of the day (e.g., "Monday").
 * 
 * @param {number} year - The full year (e.g., 2024).
 * @param {number} month - The month as a number (1 for January, 2 for February, ..., 12 for December).
 * @param {number} day - The day of the month.
 * @returns {string} The name of the day of the week ("Saturday", "Sunday", etc.).
 * 
 * @example
 * dayOfTheWeek(2024, 10, 19); // returns "Saturday"
 */
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
