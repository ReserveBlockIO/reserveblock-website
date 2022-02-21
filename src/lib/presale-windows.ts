interface PresaleWindow {
  start: number;
  end: number;
}

// 6pm EST => 11pm UTC
// 11pm EST => 4am UTC

export const presaleWindows: PresaleWindow[] = [
  { start: 1645473600000, end: 1645502770000 }, // MONDAY TEST DAY 1 hour
  { start: 1645570800000, end: 1645588800000 },
  { start: 1645657200000, end: 1645675200000 },
  { start: 1645743600000, end: 1645761600000 },
  { start: 1645830000000, end: 1645848000000 },
];

export const presaleIsLive = (): boolean => {
  const now = Date.now();
  for (let pw of presaleWindows) {
    if (now >= pw.start && now <= pw.end) {
      return true;
    }
  }

  return false;
};

export const nextSaleWindowStarts = () => {
  const now = Date.now();

  for (let pw of presaleWindows) {
    if (pw.start >= now) {
      return new Date(pw.start);
    }
  }
  return null;
};
