type Props = {
  day: number | string;
};

export default function Day({ day }: Props) {
  const isHoliday = false;
  return (
    <div className="hover:cursor-pointer">
      <div className="w-10 h-10 md:w-24 md:h-24 flex items-center justify-center">
        <p
          className={
            "text-xl md:text-6xl font-semibold " + (isHoliday && "text-red-600")
          }
        >
          {day === "*" ? (
            <p className="font-thin text-xl md:text-4xl">&#10033;</p>
          ) : (
            day
          )}
        </p>
        {isHoliday && (
          <p className="absolute text-xs font-semibold flex items-center text-center px-1">
            Duruthu Full Moon Poya Day &#9733; &#9768; &#x2756;
          </p>
        )}
      </div>
    </div>
  );
}
