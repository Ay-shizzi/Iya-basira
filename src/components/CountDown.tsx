"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-12-25");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <Countdown
          className="font-bold text-3xl md:text-5xl text-green-500"
          date={endingDate}
        />
      )}
    </div>
  );
};

export default CountDown;
