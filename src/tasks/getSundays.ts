/*
 * Find 1st January is being a Sunday between 2014 and 2050.
 * */

export function getSundays() {
  const result = [];

  for (let year = 2014; year <= 2050; year++) {
    console.log("year", year);
    const date = new Date(year, 0, 1);
    const day = date.getDay();
    if (day === 0) {
      result.push(date);
    }
  }
}
