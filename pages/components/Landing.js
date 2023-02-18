import React from "react";

function Landing() {
  return (
    <div className=" h-screen bg-white dark:bg-slate-800 dark:text-white ">
      <div className=" relative" id="Home">
        <div className=" relative w-full h-full top-36 flex justify-center items-center flex-col sm:flex-row">
          <span className=" px-6 md:w-3/6 sm:w-screen">
            <h2 className=" text-4xl font-semibold md:text-2xl">
              Welcome to <span className=" text-purple-800">GamersHub</span>
            </h2>
            <h4 className=" text-xl">
              Your number one choice to pre-order games and get information on
              your favorite games
            </h4>
            <button className=" text-white rounded-md px-12 py-4 mt-6 font-semibold border-2 bg-purple-800 hover:bg-purple-600 ">
              Order Now
            </button>
          </span>
          <span className="h-full w-3/6 relative flex justify-center items-center sm:w-full effect">
            <div className="imag"></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
