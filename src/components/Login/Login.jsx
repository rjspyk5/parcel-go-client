import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/image/login3.jpg";
import { GoogleLogin } from "../GoogleLogin/GoogleLogin";
import { useAuth } from "@/Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";
export const Login = () => {
  const { user, login, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [loading]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    login(data.email, data.pass)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully login",
          timer: 2000,
        });
      })
      .catch((er) => {
        Swal.fire({
          icon: "error",
          title: `${er}`,
        });
      });
  };

  return (
    <div>
      <section className="">
        <div
          style={{ backgroundImage: `url(${loginimg})` }}
          className="  bg-cover bg-no-repeat container flex flex-col items-center justify-center min-h-screen px-6 mx-auto"
        >
          <div className="absolute  h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-50"></div>
          <div className="w-full max-w-md bg-[#b6b5b52f] rounded-lg backdrop-blur-lg px-8 py-5">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <h1 className="mt-3 text-2xl text-white font-semibold text-center capitalize sm:text-3xl">
                sign In
              </h1>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 mt-1 ml-1">
                  This field is required
                </span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  {...register("pass", { required: true })}
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.pass && (
                <span className="text-red-500 mt-1 ml-1">
                  This field is required
                </span>
              )}

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>
            </form>{" "}
            <p className="mt-4 text-center text-white">or sign in with</p>
            <GoogleLogin name={"Sign In"} />
            <div className="mt-6 text-center ">
              <Link to="/reg" className="text-sm text-blue-500 hover:underline">
                Don’t have an account yet? Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
