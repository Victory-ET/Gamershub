import { React, useState } from "react";
import { Transition } from "@headlessui/react";
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCog, faCartShopping, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-lg fixed w-full z-10 backdrop-blur-md">
        <span className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center items mx-20 justify-between w-full flex-row-reverse">
              <span className="flex items-center justify-center flex-shrink-0">
                <h1 className=" font-bold cursor-pointer text-xl">
                  Gamers<span className=" text-purple-800">hub</span>
                </h1>
              </span>
              <span className="hidden md:block">
                <div className=" ml-10 flex items-baseline space-x-4">
                  <a
                    href="#Home"
                    className="cursor-pointer text-purple-800 font-semibold px-3 py-2 text-md hover:font-black"
                  >
                    Home<FontAwesomeIcon icon={faHome} className=" text-purple-800 ml-2" />
                  </a>
                  <a
                    href="#Home"
                    className="cursor-pointer hover:bg-purple-800 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Account<FontAwesomeIcon icon={faUser} className=" text-purple-800 ml-2" />
                  </a>
                  <a
                    href="#Home"
                    className="cursor-pointer hover:bg-purple-800 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Settings<FontAwesomeIcon icon={faCog} className=" text-purple-800 ml-2" />
                  </a>
                  <a
                    href="#Home"
                    className="cursor-pointer hover:bg-purple-800 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cart<FontAwesomeIcon icon={faCartShopping} className=" text-purple-800 ml-2" />
                  </a>
                </div>
              </span>
            </div>
            <span className="mr-10 flex md:hidden">
              <button
                onClick={() => {
                  isOpen(!open);
                }}
                className="bg-purple-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600 outline-none focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
                arial-aria-controls="mobile-menu"
                arial-aria-expanded="false"
              >
                <span className=" sr-only">Main menu</span>
                {!open ? (
                  <svg
                    className=" block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    arial-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // <FontAwesomeIcon icon={faCoffee} />
                  <svg
                    className=" block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    arial-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </span>
          </div>
        </span>

        {open ? (
          <div className=" md:hidden id=mobile-menu">
            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="cursor-pointer hover:bg-purple-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => {
                  isOpen(!open);
                }}>
                Home
              </a>
              <a className="cursor-pointer hover:bg-purple-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => {
                  isOpen(!open);
                }}>
                Account
              </a>
              <a className="cursor-pointer hover:bg-purple-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => {
                  isOpen(!open);
                }}>
                Settings
              </a>
              <a className="cursor-pointer hover:bg-purple-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => {
                  isOpen(!open);
                }}>
                Cart
              </a>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
