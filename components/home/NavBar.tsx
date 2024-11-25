"use client";
import React, { useState } from "react";
import { NavigationMenuItem } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { hamburgerIcon } from "@/public/assets/icons";
import Svg from "../common/Svg";
import NavContent from "./NavContent";
import SubscriptionModal from "./SubscriptionModal";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormControl from "../common/FormControl";

function NavBar() {
  const [isSubscribersModal, setIsSubscribersModal] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({ mode: "onChange" });
  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return undefined;
  };
  const email = watch("email");

  const ourMissionOptions = [
    "About Us",
    "Mission Statement",
    "Methodology",
    "Initiatives",
  ];
  const electionResultOptions = [
    "Presidential",
    "Gubernational",
    "House of Assembly",
    "Local Government",
    "Off-cycle elections",
  ];
  const eyeWitnessOptions = [
    "Objectives",
    "How to volunteer",
    "Available polling unit",
  ];
  const resourcesOptions = [
    "Publications",
    "Elelction update",
    "Find polling unit",
  ];
  const openSubcribersModal = () => {
    setIsSubscribersModal((x) => !x);
  };
  return (
    <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-xl border-b border-b-green-900 fixed z-20 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={"/Nigelctionpolls 4.svg"}
            width={250}
            height={50}
            alt="NG Election logo"
            className="w-[140px] h-auto"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:flex justify-right items-center md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700 items-center">
            <li className="group relative text-green-900 text-sm">
              <button
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Our Mission
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="p-4 text-sm text-green-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Initiatives
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative text-green-900 text-sm">
              <button
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Election Results
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="p-4 text-sm text-green-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Presidential
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Gubernotorial
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      House of Assembly
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Local Government
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Off-cycle Elections
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative text-green-900 text-sm">
              <button
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Eyewitness
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="p-4 text-sm text-green-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Objectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      How to Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Available Polling Units
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative text-green-900 text-sm">
              <button
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Resources
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="p-4 text-sm text-green-900 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Election Updates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Find Polling Unit
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-sm"
              >
                Contact Us
              </Link>
            </li>

            <Link href="/auth/login">
              <button className="bg-primary w-[128px] text-sm text-white font-bold uppercase  border border-primary hover:bg-transparent hover:text-green-900 py-3 rounded-lg">
                Login
              </button>
            </Link>

              <button
                onClick={openSubcribersModal}
                className="bg-transparent text-green-900 font-bold uppercase border border-primary hover:bg-primary hover:text-white text-sm py-3 px-3 rounded-lg"
              >
                Join us now
              </button>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {/* Modal */}
        {isSubscribersModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-1/2">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold"></h2>
                <button
                  onClick={openSubcribersModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="inline-flex gap-1 w-full items-end relative text-white  border-[#8E95A2] px-4">
                <button className=" left-0 bottom-0 bg-[#285D2D] h-12 w-1/2 z-10 rounded-[12px]">
                  Click to Subcribe
                </button>
                <Link
                  href="/auth/subscribers-email-verification"
                  className="w-full"
                >
                  <Controller
                    name="email"
                    control={control}
                    // rules={{
                    //   required: "Confirm password is required",
                    //   validate: (value) =>
                    //     value === email || "Passwords do not match",
                    // }}
                    render={({ field }) => (
                      <FormControl
                        className="w-1/2 !border-none right-0"
                        as="input"
                        labelText="Enter email"
                        placeholder="Enter email"
                        type="text"
                        {...field}
                        error={getErrorMessage(errors.email)}
                      />
                    )}
                  />
                </Link>
              </div>

              {/* Modal Footer */}
              <p className="text-[#525252] mt-4 p-5">
                I already have subscriber account{" "}
                <Link
                  href={"/auth/login"}
                  className="text-black-500 font-bold hover:text-black-500/80"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
