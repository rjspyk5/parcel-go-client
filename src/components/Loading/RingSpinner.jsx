import { Rings } from "react-loader-spinner";

export const RingSpinner = () => {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#f15a25"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
