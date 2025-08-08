import {
  format,
  addDays,
  subDays,
  startOfYear,
  setMonth,
  setDate,
} from "date-fns";

export interface Holiday {
  name: string;
  date: string;
}

const getEaster = (year: number) => {
  // Same calculation logic as before
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n0 = h + l + 7 * m + 114;
  const n = Math.floor(n0 / 31) - 1;
  const p = (n0 % 31) + 1;
  return new Date(year, n, p);
};

export default (year: number): Holiday[] => {
  const easter = getEaster(year);
  const baseDate = new Date(year, 0, 1);

  return [
    {
      name: "Palmesøndag",
      date: format(subDays(easter, 7), "yyyy-MM-dd"),
    },
    {
      name: "Skjærtorsdag",
      date: format(subDays(easter, 3), "yyyy-MM-dd"),
    },
    {
      name: "Langfredag",
      date: format(subDays(easter, 2), "yyyy-MM-dd"),
    },
    {
      name: "1. påskedag",
      date: format(easter, "yyyy-MM-dd"),
    },
    {
      name: "2. påskedag",
      date: format(addDays(easter, 1), "yyyy-MM-dd"),
    },
    {
      name: "Kristi Himmelsprettsdag",
      date: format(addDays(easter, 39), "yyyy-MM-dd"),
    },
    {
      name: "1. pinsedag",
      date: format(addDays(easter, 49), "yyyy-MM-dd"),
    },
    {
      name: "2. pinsedag",
      date: format(addDays(easter, 50), "yyyy-MM-dd"),
    },
    {
      name: "Nyttårsdag",
      date: format(startOfYear(baseDate), "yyyy-MM-dd"),
    },
    {
      name: "1. mai",
      date: format(setMonth(setDate(baseDate, 1), 4), "yyyy-MM-dd"),
    },
    {
      name: "17. mai",
      date: format(setMonth(setDate(baseDate, 17), 4), "yyyy-MM-dd"),
    },
    {
      name: "1. juledag",
      date: format(setMonth(setDate(baseDate, 25), 11), "yyyy-MM-dd"),
    },
    {
      name: "2. juledag",
      date: format(setMonth(setDate(baseDate, 26), 11), "yyyy-MM-dd"),
    },
    {
      name: "Nyttårsaften",
      date: format(setMonth(setDate(baseDate, 31), 11), "yyyy-MM-dd"),
    },
  ];
};
