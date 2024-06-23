import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
      <div className="  bg-accent pt-16 ">
        <div className="grid px-3 max-w-[1150px] mx-auto gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img className="w-14" alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                Parcel Go
              </span>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm ">
                At Parcel Go, we are dedicated to revolutionizing the courier
                service industry. Our mission is to deliver excellence with
                every parcel, ensuring reliable and efficient service that meets
                your delivery needs. With a focus on innovation and customer
                satisfaction, Parcel Go is your trusted partner for fast and
                secure deliveries.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide ">Contacts</p>
            <div className="flex">
              <p className="mr-1 ">Phone:</p>
              <a
                href="tel:+8801684883865"
                aria-label="Our phone"
                title="Our phone"
                className=""
              >
                +8801684883865
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Email:</p>
              <a
                href="mailto: imrakibul9@gmail.com"
                aria-label="Our email"
                title="Our email"
                className=""
              >
                imrakibul9@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Address:</p>
              10/2,Malibag,Dhaka
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide ">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <Link className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <FaFacebook size={26} />
              </Link>
              <Link className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <RiInstagramFill size={26} />
              </Link>
              <Link className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <FaTwitter size={26} />
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Stay connected with us on social media for the latest updates.
            </p>
          </div>
        </div>
        <div className="flex px-8 max-w-[1150px] mx-auto flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024 Parcel Go. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                F.A.Q
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
