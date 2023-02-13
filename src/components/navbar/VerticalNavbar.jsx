import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

// logo name
const logo = "tab_logo";
const logo2 = "tab_logo_white";

// sidebar content
const sidebarContent = [
  { icon: "house", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "house", itemName: "Home", itemRoute: "#home", activeClass: "" },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/myImages/about.jpeg",
  name: "Title",
  email: "Subititle or email",
  emailRef: "mailto:antreas.paps@yahoo.com?subject=Contact forms in websites should be banned!",
};

const VerticalNavbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="hidden fixed right-[20px] top-[13px] z-[96] xl:block">
        <button className="cursor-pointer h-12 ml-auto p-0 relative w-12 bg-black border-none rounded-full dark:bg-white" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[-15px] dark:bg-[#111319] .active:rotate-45 .active:top-0"></span>
            <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[1px] dark:bg-[#111319]"></span>
            <span className="bottom-[13px] bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-auto dark:bg-[#111319]"></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div className={click ? "bg-white shadow-navbar h-screen left-0 fixed transition-all duration-500 w-[320px] z-[96] dark:bg-black dark:shadow-none menu-open" : "xl:translate-x-[-100%] shadow-navbar h-screen left-0 fixed transition-all duration-500 w-[320px] z-[96] dark:bg-black dark:shadow-none"}>
        <div className="">
          <div className="clear-both flex float-left h-auto p-10 w-full border-b border-solid border-[#cbd3d9]">
              <img
                className="max-w-[120px] mr-8 p-2 align-middle"//dark
                src={`img/logo/${logo}.png`}
                alt="brand"
              />
              <img
                className="hidden max-w-[120px] mr-8 p-2 align-middle"//light
                src={`img/logo/${logo2}.png`}
                alt="brand"
              />
          </div>
          {/* End .logo */}

          <div className="clear-both float-left h-auto py-14 px-10 w-full">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "projects",
                "blog",
                "subordinates",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="list-none m-0">
                {sidebarContent.map((val, i) => (
                  <li className="float-left w-full mt-0 mx-0 mb-2" key={i}>
                    <div className="float-left mt-0 ml-0 mr-0 mb-2 w-full last:mb-0">
                      <a
                        href={val.itemRoute}
                        className={" dark:text-white dark:before:bg-[#191c26] active:before:w-full before:bg-[#f5f5f5] before:rounded-md before:h-full before:left-0 before:absolute before:top-0 before:w-0 before:z-[-1] before:transition-all before:duration-300  items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline py-4 px-3 transition-all duration-300 !cursor-pointer " + val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="fill-none h-5 mr-4 w-5 transition-all duration-300 invert-[.3] dark:invert"
                          src={`img/navbar/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="bottom-0 left-0 absolute right-0 border-t border-solid border-[#cbd3d9]">
            <div className="items-center flex h-auto w-full py-10 px-5">
              <div className="inline-block h-12 object-cover relative w-12 rounded-full">
                <div
                  className="bg-no-repeat bg-cover bottom-0 left-0 absolute right-0 top-0 border border-solid border-[#34495e] bg-[50%] bg-[url('/img/hero-pattern.svg')]"
                ></div>
              </div>
              <div className="pl-3">
                <h3 className="text-base font-medium leading-none">{sidebarFooterContent.name}</h3>
                <h5 className="text-gray-600 text-sm no-underline transition-all duration-300" href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </h5>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
