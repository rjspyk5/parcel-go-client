import { ContactForm } from "./ContactForm";
import { Maps } from "./Maps";

export const GetInTouch = () => {
  return (
    <>
      <div className=" flex flex-col my-12 text-center ">
        <h5 className="font-bold text-lg">Office Adress</h5>
        <p>187,Malibag,Dhaka</p>
        <p>Phone: 01684883865</p>
        <p>Email: elegance.properties@gmail.com</p>{" "}
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white
"
      >
        <div className="relative z-10">
          <Maps />
        </div>
        <div className=" flex justify-center items-center rounded-lg ">
          <ContactForm />
        </div>
      </div>
    </>
  );
};
