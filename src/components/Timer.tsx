"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Timer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const endingDate = new Date("2023-09-30");

  return (
    <>
      {isClient && (
        <Countdown
          className="font-bold text-5xl text-yellow-400"
          date={endingDate}
        />
      )}
    </>
  );
};

export default Timer;
