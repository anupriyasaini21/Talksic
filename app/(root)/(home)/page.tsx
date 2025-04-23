import { useEffect, useState } from 'react';
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const [istDate, setIstDate] = useState(getISTTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setIstDate(getISTTime());
    }, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  function getISTTime() {
    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60 * 1000;
    return new Date(utc + istOffset);
  }

  const time = istDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const date = istDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-[url('/images/hero-background.png')] bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-[#C9DDFF] lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
