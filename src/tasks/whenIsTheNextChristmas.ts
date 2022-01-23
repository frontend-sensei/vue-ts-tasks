export function whenIsTheNextChristmas(): void {
  const date = new Date();
  const christmasDate = new Date(date.getFullYear(), 11, 25);
  const differenceInTime: number = christmasDate.getTime() - date.getTime();
  const daysLeft = parseInt(String(differenceInTime / (1000 * 3600 * 24)));
  console.log(daysLeft);
}
