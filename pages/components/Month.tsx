import { monthGenerator } from "../../helpers/month-generator";
import Day from "./Day";

type Props = {
  month: Month;
};

export default function Month({ month }: Props) {
  const monthTable = monthGenerator(month);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold">
        {month.name} - 2023
      </h2>
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
