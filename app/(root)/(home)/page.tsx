'use client'

import { useEffect, useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to IST (UTC+5:30)
      const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours and 30 minutes in milliseconds
      const istTime = new Date(now.getTime() + istOffset);

      const currentTime = istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const currentDate = istTime.toLocaleDateString('en-US', { dateStyle: 'full' });

      setTime(currentTime);
      setDate(currentDate);
    };

    updateTime(); // Initial call to set time and date immediately
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11"> 
          <h2 className="glassmorphism max-w-[193px] rounded py-2 text-center text-base font-normal">
            WELCOME TO NEXUS
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-aqua-4 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
