import { RotatingLines } from "react-loader-spinner";

export const UploadSpinner = () => {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#f15a25"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
