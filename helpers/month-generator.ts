export function monthGenerator({ days, startIndex }: Month) {
  // Initialize an array to hold the month's days
  const monthDays = Array.from(Array(days).keys()).map((i) => i + 1);

  // Initialize the table as a 2D array with 7 columns and 5 rows
  const table = Array(5)
    .fill(null)
    .map(() => Array(7).fill("*"));

  const iterations =
    7 - startIndex + 28 <= monthDays.length
      ? 7 - startIndex + 28
      : monthDays.length;

  // Iterate through the days array and insert the day into the table
  for (let i = 0; i < iterations; i++) {
    const day = monthDays[i];
    const row = Math.floor((i + startIndex) / 7);
    const col = (i + startIndex) % 7;
    table[row][col] = day;
  }

  // Place the remaining days in the top row
  for (let i = 0; i < monthDays.length - iterations; i++) {
    table[0][i] = monthDays[iterations + i];
  }

  return table;
}
