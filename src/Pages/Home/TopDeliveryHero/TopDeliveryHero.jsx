export const TopDeliveryHero = () => {
  return (
    <div>
      <section className=" ">
        <div className="container px-6  mx-auto">
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="w-full shadow-lg++ text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Ahmed Omer
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  CEO
                </span>
              </div>
            </div>

            <div className="w-full  text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Jane Doe
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Co-founder
                </span>
              </div>
            </div>

            <div className="w-full  text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Steve Ben
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  UI/UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
