export const ContactForm = () => {
  return (
    <div className="w-full ">
      <form>
        <fieldset className=" flex flex-col gap-4 *:w-full *:rounded-md">
          <div className="flex gap-4 *:rounded-md *:focus:ring-c-sucess">
            <input
              type="text"
              name="Firstname"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring "
              placeholder="Enter your firstname"
            />
            <input
              type="email"
              name="Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
              placeholder="Enter your email"
            />
          </div>

          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
            type="number"
            placeholder="Enter your number"
          />

          <textarea
            name=""
            id=""
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-500 focus:ring-orange-300 focus:ring-opacity-40 dark:focus:border-orange-300 focus:outline-none focus:ring"
            cols="30"
            rows="5"
            placeholder="Your Message Here"
          ></textarea>
          <button type="button" className="bg-orange-500 text-white p-2">
            Send Message
          </button>
        </fieldset>
      </form>
    </div>
  );
};
