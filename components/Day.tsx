type Props = {
  month: number;
  day: number | string;
  holiday: Holiday | undefined;
};

export default function Day({ day, holiday, month }: Props) {
  const isToday = new Date().getDate() === day;
  const isThisMonth = new Date().getMonth() === month;
  return (
    <>
    <div className={"hover:cursor-pointer " + (isToday && isThisMonth && " bg-blue-100")}>
      <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
        <p
          className={
            "text-xl md:text-4xl font-semibold " + (!!holiday && "text-red-600")
          }
        >
          {day === "*" ? (
            <span className="font-thin text-xl md:text-4xl">&#10033;</span>
          ) : (
            day
          )}
        </p>
        {!!holiday && (
          <p className="w-10 md:w-16 absolute text-[0.5rem] leading-[0.6rem] md:text-xs font-semibold md:px-1 text-black">
            {holiday.name} <br />
            <span>
              {holiday.isPublic && <>&#9733;</>}{" "}
              {holiday.isBank && <>&#9768;</>}{" "}
              {holiday.isMercantile && <>&#x2756;</>}
            </span>
          </p>
        )}
      </div>
    </div>
    </>
  );
}
