import Head from "next/head";
import { useEffect, useState } from "react";
import Month from "../components/Month";
import Spinner from "../components/Spinner";

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/calendar2023`);
//   const data = await res.json();

//   return { props: { months: data } };
// }

// type Props = {
//   months: Month[];
// };

export default function Home() {
  const [months, setMonths] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchMonths = async () => {
      const res = await fetch(`/api/months${year}`);
      const months = await res.json();

      setMonths(months);
    };
    const fetchHolidays = async () => {
      const res = await fetch(`/api/holidays${year}`);
      const holidays = await res.json();

      setHolidays(holidays);
    };

    fetchMonths();
    fetchHolidays();
  }, [year]);

  return (
    <>
      <Head>
        <title>Sri Lankan Calendar - 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1 className="text-xl md:text-3xl font-bold text-center p-4">
          Sri Lankan Calendar - 2023
        </h1>
        {months?.length > 0 ? (
          <Month months={months} holidays={holidays} />
        ) : (
          <Spinner />
        )}
      </main>
    </>
  );
}
