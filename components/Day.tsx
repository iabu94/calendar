type Props = {
  day: number | string;
  holiday: Holiday | undefined;
};

export default function Day({ day, holiday }: Props) {
  return (
    <div className="hover:cursor-pointer">
      <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
        <p
          className={
            "text-xl md:text-4xl font-semibold " + (!!holiday && "text-red-600")
          }
        >
          {day === "*" ? (
            <p className="font-thin text-xl md:text-4xl">&#10033;</p>
          ) : (
            day
          )}
        </p>
        {!!holiday && (
          <p className="w-10 md:w-16 absolute text-[0.5rem] leading-[0.6rem] md:text-xs font-semibold md:px-1 text-black">
            {holiday.description} {holiday.isPublic && <>&#9733;</>}{" "}
            {holiday.isBank && <>&#9768;</>}{" "}
            {holiday.isMercantile && <>&#x2756;</>}
          </p>
        )}
      </div>
    </div>
  );
}
