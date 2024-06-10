import CountUp, { useCountUp } from "react-countup";

export const ReactCount = ({ endCount }) => {
  useCountUp({
    ref: "counter",
    end: endCount,
    start: 0,
    duration: 1,
    easing: "easeOutCubic",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="font-bold">
      <br />
      +<span id="counter" />
    </div>
  );
};
