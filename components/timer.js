import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const Timer = ({ deadline = new Date(), className }) => {
  deadline.setMinutes(deadline.getMinutes() + 30);
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${className}`}>
      {Object.entries({
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value], index, array) => (
        <span key={label}>
          {`${Math.floor(value)}`.padStart(2, "0")}
          {index != array.length - 1 && ":"}
        </span>
      ))}
    </span>
  );
};
