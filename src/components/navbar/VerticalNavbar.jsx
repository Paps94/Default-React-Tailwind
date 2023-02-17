import React, { useContext } from "react";
import { StylingContext } from "../../contexts/StylingContext";
import ScrollspyNav from "react-scrollspy-nav";
import { Tooltip as ReactTooltip } from 'react-tooltip';

// sidebar content
const sidebarContent = [
  { icon: "house", itemName: "Home", itemRoute: "home", activeClass: "active" },
  { icon: "modal", itemName: "Modal", itemRoute: "modal", activeClass: "" },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/myImages/about.jpeg",
  name: "Title",
  email: "Subititle or email",
  emailRef: "mailto:antreas.paps@yahoo.com?subject=Contact forms in websites should be banned!",
};

const VerticalNavbar = () => {
  const {navbar, setNavbar, theme} = useContext(StylingContext);

  // Default is light mode logo
  let logo = "tab_logo";
  if (theme === 'dark') {
    logo = "tab_logo_white";
  }

  // const handleNavbarToggle = () => setNavbar(!navbar);
  
  return (
    <>
      {/* <div className="hidden fixed right-[20px] top-[13px] z-[96] xl:block ">
        <button className="cursor-pointer h-12 ml-auto p-0 relative w-12 bg-black border-none rounded-full dark:bg-white" onClick={handleNavbarToggle}>
          <div className={navbar ? "active" : ""}>
            <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[-15px] dark:bg-[#111319] .active:rotate-45 .active:top-0"></span>
            <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[1px] dark:bg-[#111319]"></span>
            <span className="bottom-[13px] bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-auto dark:bg-[#111319]"></span>
          </div>
        </button>
      </div> */}
      <div className={
        navbar 
        ? " shadow-main fixed left-8 top-8 bottom-8 rounded-md transition-all duration-500 w-[320px] z-[96] bg-gradient-to-l from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-l dark:from-[#414141] dark:to-[#121212] dark:shadow-none" 
        : " shadow-main fixed left-8 top-8 bottom-8 rounded-md transition-all duration-500 w-20 z-[96] bg-gradient-to-l from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-l dark:from-[#414141] dark:to-[#121212] dark:shadow-none"
      }>
        <div className={
              navbar 
              ? "clear-both flex float-left h-auto p-10 w-full border-b border-solid border-[#F1F1F1]" 
              : "clear-both flex float-left h-auto p-2 w-full border-b border-solid border-[#F1F1F1]"
            }>
            <img className={
              navbar 
              ? "max-w-[120px] mr-8 p-2 align-middle" 
              : "max-w-[120px] m-auto p-2 align-middle"
            }
              src={`img/logo/${logo}.png`}
              alt="brand"
            />
        </div>
        {/* End .logo */}

        <div className={
          navbar 
          ? "clear-both float-left h-auto py-14 px-10 w-full" 
          : "clear-both float-left h-auto py-6 px-3 w-full"
        }>
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
            <ul className="list-none m-0 tooltip-parent">
              {sidebarContent.map((val, i) => (
                <li className="float-left w-full mt-0 mx-0 mb-2" key={i}  data-tooltip-id="navbarTooltip" data-tooltip-content={val.itemName} data-tooltip-place="right">
                  <div className="float-left mt-0 ml-0 mr-0 mb-2 w-full last:mb-0">
                    <a
                      href={`#${val.itemRoute}`}
                      className={
                        navbar 
                        ? "dark:text-white dark:before:bg-[#7A7A7A] active:before:w-full before:bg-[#F1F1F1] before:rounded-md before:h-full before:left-0 before:absolute before:top-0 before:w-0 before:z-[-1] before:transition-all before:duration-300  items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline py-4 px-3 transition-all duration-300 !cursor-pointer " + val.activeClass 
                        : "dark:text-white dark:before:bg-[#7A7A7A] active:before:w-full before:bg-[#F1F1F1] before:rounded-md before:h-full before:left-0 before:absolute before:top-0 before:w-0 before:z-[-1] before:transition-all before:duration-300  items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline p-3 transition-all duration-300 !cursor-pointer " + val.activeClass 
                      }
                    >
                      <img
                        id={val.itemRoute}
                        className={
                          navbar 
                          ? "fill-none h-5 mr-4 w-5 transition-all duration-500 invert-[.3] dark:invert" 
                          : "fill-none h-8 mr-4 w-8 transition-all duration-500 invert-[.3] dark:invert" 
                        }
                        src={`img/navbar/${val.icon}.svg`}
                        alt="icon"
                      />
                      {/* Only show the tooltip if the navbar is collapsed */}
                      {!navbar && (
                        <ReactTooltip
                          id='navbarTooltip'
                          place="right"
                          variant="light"
                          noArrow="true"
                          className="light-theme dark:text-white dark:bg-[#121212] dark:bg-opacity-50 dark:text-lg dark:tracking-wide dark:rounded-md"
                        >
                          <span>{val.itemName}</span>
                        </ReactTooltip>
                       )}
                      {navbar ? val.itemName: ''}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollspyNav>
        </div>
        {/* End .menu */}
        {
          navbar 
          ? <div className="bottom-0 left-0 absolute right-0 border-t border-solid border-[#F1F1F1]">
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
          : ''
        }
        
      </div>
    </>
  );
};

export default VerticalNavbar;
