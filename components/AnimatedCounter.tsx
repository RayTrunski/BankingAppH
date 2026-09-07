"use client";

import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className="w-full">
      <CountUp
        decimals={2}
        decimal=","
        prefix="$"
        duration={1.75}
        end={amount}
      />
    </span>
  );
};

export default AnimatedCounter;
