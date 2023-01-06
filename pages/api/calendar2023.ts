// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Month[]>
) {
  const months: Month[] = generateMonths();
  res.status(200).json(months);
}

function generateMonths(): Month[] {
  return [
    {
      id: 1,
      name: "January",
      days: 31,
      startIndex: 6,
    },
    {
      id: 2,
      name: "February",
      days: 28,
      startIndex: 2,
    },
    {
      id: 3,
      name: "March",
      days: 31,
      startIndex: 2,
    },
    {
      id: 4,
      name: "April",
      days: 30,
      startIndex: 5,
    },
    {
      id: 5,
      name: "May",
      days: 31,
      startIndex: 0,
    },
    {
      id: 6,
      name: "June",
      days: 30,
      startIndex: 3,
    },
    {
      id: 7,
      name: "July",
      days: 31,
      startIndex: 5,
    },
    {
      id: 8,
      name: "August",
      days: 31,
      startIndex: 1,
    },
    {
      id: 9,
      name: "September",
      days: 30,
      startIndex: 4,
    },
    {
      id: 10,
      name: "October",
      days: 31,
      startIndex: 6,
    },
    {
      id: 11,
      name: "November",
      days: 30,
      startIndex: 2,
    },
    {
      id: 12,
      name: "December",
      days: 31,
      startIndex: 4,
    },
  ];
}
