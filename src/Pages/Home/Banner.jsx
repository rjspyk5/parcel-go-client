import banner from "../../assets/image/banner2.jpg";
import { Typewriter } from "react-simple-typewriter";
export const Banner = () => {
  return (
    <div className="">
      <header>
        <div
          className="w-full bg-center  bg-cover h-[38rem]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl  font-semibold text-white lg:text-4xl">
                Delivering Your{" "}
                <span className="text-[#f15a25] lg:text-5xl text-4xl">
                  <Typewriter
                    words={["Parcel", "Packages", "Anything"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>{" "}
                with Care!
              </h1>
              <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    placeholder="Search"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
