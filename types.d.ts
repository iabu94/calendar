type Month = {
  id: number;
  name: string;
  days: number;
  startIndex: number;
};

type Holiday = {
  monthIndex: number;
  day: number;
  name: string;
  description: string;
  isMercantile: boolean;
  isPublic: boolean;
  isBank: boolean;
};

type Calendar = {
  year: number;
  months: Month[12];
  holidays: Holiday[];
};
