import { useEffect, useState } from "react";
import { monthGenerator } from "../../helpers/month-generator";
import Day from "./Day";

type Props = {
  months: Month[];
};

export default function Month({ months }: Props) {
  const [monthId, setMonthId] = useState(new Date().getMonth());
  const [month, setMonth] = useState(months[monthId]);

  useEffect(() => {
    setMonth(months[monthId]);
  }, [monthId]);

  const monthTable = monthGenerator(month);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div>
      <div className="w-[42rem] m-auto flex justify-between">
        <button
          onClick={() => (monthId > 0 ? setMonthId(monthId - 1) : "")}
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center rotate-180"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
        <h2 className="text-4xl font-semibold text-red-600">
          {month.name} - 2023
        </h2>
        <button
          onClick={() => (monthId < 11 ? setMonthId(monthId + 1) : "")}
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
      <table className="table-auto m-auto mt-4">
        <thead>
          <tr className="text-white bg-black">
            {weekDays.map((d, i) => (
              <th
                key={i}
                className={
                  "w-24 p-2 border border-black " +
                  (i === 5
                    ? " bg-slate-500 border-slate-500"
                    : i === 6
                    ? " bg-red-800 border-red-800"
                    : "")
                }
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthTable.map((w, i) => (
            <tr key={i}>
              {w.map((d, i) => (
                <td
                  key={i}
                  className={
                    "w-24 h-24 text-center border border-black " +
                    (i === 5
                      ? " text-slate-500"
                      : i === 6
                      ? "text-red-700"
                      : "")
                  }
                >
                  <Day day={d} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
