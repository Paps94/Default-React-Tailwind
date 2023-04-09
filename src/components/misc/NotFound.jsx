import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-full flex items-center">
      <div className="text-center w-full">
        <h1 data-aos="fade-up" data-aos-duration="1200" className="font-black leading-none text-9xl	tracking-[5px]">
          404!
        </h1>
        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50" className="mb-8 mt-4 text-lg">
          The page you are looking for could not be found.
        </p>

        <div
          className="transition-all duration-300 border-2 border-black dark:border-[#7e7e7e] border-solid py-2 px-9 rounded-md inline-block text-lg font-medium no-underline hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-gray-900"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Link to="/">BACK HOME</Link>
        </div>
        {/* End purchase_button */}
      </div>
      {/* End .hero */}
    </div>
  );
};

export default NotFound;
