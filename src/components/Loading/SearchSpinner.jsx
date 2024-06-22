import { MagnifyingGlass } from "react-loader-spinner";

export const SearchSpinner = () => {
  return (
    <div className="flex min-h-72 items-center justify-center">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#f15a25"
      />
    </div>
  );
};
