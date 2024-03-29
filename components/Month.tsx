import { useState } from "react";
import { monthGenerator } from "../helpers/month-generator";
import Day from "./Day";
import Modal from "./Modal";

type Props = {
  months: Month[];
  holidays: Holiday[];
};

export default function Month({ months, holidays }: Props) {
  const [monthId, setMonthId] = useState(new Date().getMonth());
  const [showModal, setShowModal] = useState(false);
  const [holiday, setHoliday] = useState<Holiday | undefined>(undefined);

  const handleDayClick = (day: number) => {
    setHoliday(findHoliday(day));
    setShowModal(true);
  }
  const handleOnClose = () => setShowModal(false);

  const monthTable = monthGenerator(months[monthId]);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const findHoliday = (day: number) =>
    holidays.find((h) => h.monthIndex === monthId && h.day === day);

  return (
    <div>
      <div className="w-72 md:w-[28rem] m-auto flex justify-between">
        <button
          onClick={() => (monthId > 0 ? setMonthId(monthId - 1) : "")}
          type="button"
          className="text-white w-8 h-8 bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center rotate-180"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
        <h2 className="text-lg md:text-4xl font-semibold text-red-600">
          {months[monthId].name} - 2023
        </h2>
        <button
          onClick={() => (monthId < 11 ? setMonthId(monthId + 1) : "")}
          type="button"
          className="text-white w-8 h-8 bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
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
                  "w-10 md:w-16 p-1 md:p-2 border border-black " +
                  (i === 5
                    ? " bg-slate-500 border-slate-500"
                    : i === 6
                    ? " bg-red-800 border-red-800"
                    : "")
                }
              >
                <p className="text-[0.6rem]">{d}</p>
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
                    "w-10 h-10 md:w-16 md:h-16 text-center border border-black " +
                    (i === 5
                      ? " text-slate-500"
                      : i === 6
                      ? "text-red-700"
                      : "")
                  }
                  onClick={() => handleDayClick(d)}
                >
                  <Day day={d} month={monthId} holiday={findHoliday(d)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-72 text-[0.6rem] flex justify-between pt-2 m-auto">
        <p>&#9733; Public Holidays</p>
        <p>&#9768; Bank Holidays</p>
        <p>&#x2756; Mercantile Holidays</p>
      </div>
      <div className="text-center text-[0.7rem] mt-2">
        <p>Click on a day to see the details.</p>
      </div>

      <Modal onClose={handleOnClose} show={showModal} holiday={holiday} />
    </div>
  );
}
