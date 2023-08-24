"use client";
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-30");

const Timer = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-400"
      date={endingDate}
    />
  );
};

export default Timer;
