export const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const FormatDate = (date: Date): string => {
  return `${MonthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
