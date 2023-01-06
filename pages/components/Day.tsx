type Props = {
  day: number | string;
};

export default function Day({ day }: Props) {
  const isHoliday = false;
  return (
    <div>
      <div className="w-24 h-24 flex items-center justify-center">
        <p
          className={"text-6xl font-semibold " + (isHoliday && "text-red-600")}
        >
          {day === "*" ? <p className="font-thin text-4xl">&#10033;</p> : day}
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
