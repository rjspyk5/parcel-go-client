import { useCountUp } from "react-countup";

export const ReactCount = ({ endCount, refName }) => {
  useCountUp({
    ref: refName,
    end: endCount,
    start: 0,
    duration: 1,
    easing: "easeOutCubic",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <h2>
      <span className="font-bold" id={refName} />
      <span>+</span>
    </h2>
  );
};
