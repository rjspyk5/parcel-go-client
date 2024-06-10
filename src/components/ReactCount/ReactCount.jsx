import { useCountUp } from "react-countup";

export const ReactCount = ({ endCount, refName }) => {
  useCountUp({
    ref: refName,
    end: endCount,
    start: 0,
    duration: 1,
    easing: "easeOutCubic",
    enableScrollSpy: true,
    scrollSpyDelay: 500,
  });
  return (
    <h2 className="flex items-center">
      <span className="font-bold text-3xl text-[#f15a25]" id={refName} />+
    </h2>
  );
};
