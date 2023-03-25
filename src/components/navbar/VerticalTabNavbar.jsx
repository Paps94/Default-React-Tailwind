import { useState, useContext } from "react";
import { StylingContext } from "../../context/StylingContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import navbarContent from '../../data/navbarData.json';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ColourPallet from "../misc/ColourPallet";



const VerticalTabNavbar = () => {
    const {navbar, setNavbar, theme, setTheme} = useContext(StylingContext);
    const handleNavbarToggle = () => setNavbar(!navbar);
    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const sun = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-yellow-400 hover:cursor-pointer" icon={faSun} />;
    const moon = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-white hover:cursor-pointer" icon={faMoon} />;

    // Default is light mode logo
    let logo = 'tab_logo.png';
    if (theme === 'dark') {
      logo = 'tab_logo_white.png';
    }

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClicked = (index) => setActiveTab(index);

    // Header Navbar Icons (Menu & Settings)
    const Icon = ({ icon }) => (
      <img className={
        navbar 
        ? "relative flex px-1 mb-4 flex-auto items-center h-12 text-base font-normal leading-none invert-[.3] dark:invert" 
        : "relative flex px-1 mb-4 flex-auto items-center h-12 text-base font-normal leading-none invert-[.3] dark:invert"
      }
        src={`../src/components/navbar/assets/img/svg/${icon}.svg`}
        alt="brand"
      />
      );
    // List of headers
    const tabs = ["menu", "settings"];
    // Create the header
    const Nav = ({ activeTab, onTabClicked }) => (
      <header className={
        navbar 
        ? "relative flex gap-8 place-content-evenly w-auto h-[70px] mb-4 border-b-[rgb(26_26_26/_50%)] border-b border-solid dark:border-b-[rgb(255_255_255_/_50%)]" 
        : "relative flex gap-1 place-content-evenly w-auto h-[50px] mb-4 border-b-[rgb(26_26_26/_50%)] border-b border-solid dark:border-b-[rgb(255_255_255_/_50%)]"
      }>
        {tabs.map((tab, index) => (
          <button 
            key={tab} 
            type="button" 
            onClick={() => onTabClicked(index)} 
            className={`${activeTab === index ? "active opacity-100" : "opacity-60"}`}
          >
            <Icon icon={tab}/>
          </button>))
          }          
        <div className="absolute bottom-[-2px] w-6/12 h-1 transition-[0.3s] rounded-sm left-0 bg-[rgb(26_26_26/_80%)] dark:bg-white" style={{
            translate: `${activeTab * 100}% 0`,
        }}/>
      </header>
    );

    return (
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
              src={`../src/components/navbar/assets/img/logo/${logo}`}
              alt="brand"
            />
        </div>
        {/* End .logo */}

        <div className={
          navbar 
          ? "clear-both float-left h-auto py-14 px-10 w-full" 
          : "clear-both float-left h-auto py-6 px-3 w-full"
        }>
          <Nav activeTab={activeTab} onTabClicked={handleTabClicked}/>
          <ReactCarousel className="react-carousel shadow-3d dark:shadow-dark-3d rounded-md" showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} swipeable={true} emulateTouch={true} selectedItem={activeTab} onChange={handleTabClicked}>
            {/* List all menu content */}
            <ul className="list-none m-0 tooltip-parent w-full">
            {navbarContent.map((val, i) => (
              <li className="float-left w-full h-15 m-0 p-1" key={i}  data-tooltip-id="navbarTooltip" data-tooltip-content={val.itemName} data-tooltip-place="right">
                <div className="float-left mx-0 my-0 w-full h-full last:mb-0">
                  <NavLink 
                    to={val.itemRoute}
                    className={({isActive}) => {
                      return (
                        'dark:text-white dark:before:bg-[#7A7A7A] active:before:w-full before:bg-[#F1F1F1] before:rounded-md before:h-12 before:left-0 before:absolute before:top-0 before:w-0 before:z-[-1] before:transition-all before:duration-300  items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline capitalize transition-all duration-300 !cursor-pointer ' +
                        (navbar 
                        ? "py-4 px-3 w-full "
                        : "p-0 w-12 h-12 ") +
                        (isActive
                        ? "active"
                        : "")
                      )
                    }}
                  >
                    <img
                      id={val.itemRoute}
                      className={
                        navbar 
                        ? "fill-none h-5 mr-4 !w-5 transition-all duration-500 invert-[.3] dark:invert" 
                        : "fill-none h-8 m-auto !w-8 transition-all duration-500 invert-[.3] dark:invert" 
                      }
                      src={`../src/components/navbar/assets/img/svg/${val.icon}.svg`}
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
                  </NavLink>
                </div>
              </li>
              ))}
            </ul>
            {/* Settings Navbar Option */}
            <div className="flex flex-col justify-start items-center gap-5 rounded-md w-auto shadow-3d dark:shadow-dark-3d p-0">
              <ul className="list-none m-0 tooltip-parent w-full">
                <li className="float-left w-full m-0 p-1 !cursor-pointer" data-tooltip-id="navbarTooltip" data-tooltip-content="{val.itemName}" data-tooltip-place="right" >
                  <div className="float-left mx-0 my-0 w-full last:mb-0">
                  <button 
                      className={'dark:text-white dark:hover:bg-[#7A7A7A] hover:bg-[#F1F1F1] items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline capitalize transition-all duration-300 ' +
                      (navbar 
                      ? "py-4 px-3 w-full "
                      : "p-0 m-0 w-12 h-12")}
                      onClick={handleNavbarToggle}

                    >
                      <img
                        id="{val.itemRoute}"
                        className={
                          navbar 
                          ? "fill-none h-5 mr-4 !w-5 transition-all duration-500 invert-[.3] dark:invert" 
                          : "fill-none h-8 m-auto !w-8 transition-all duration-500 invert-[.3] dark:invert" 
                        }
                        src={`../src/components/navbar/assets/img/svg/toggle.svg`}
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
                          <span>Toggle Navbar</span>
                        </ReactTooltip>
                        )}
                      {navbar ? "Toggle Navbar": ''}
                    </button>
                  </div>
                </li>
                <li className="float-left w-full m-0 p-1 !cursor-pointer" data-tooltip-id="navbarTooltip" data-tooltip-content="{val.itemName}" data-tooltip-place="right" >
                  <div className="float-left mx-0 my-0 w-full last:mb-0">
                  <button 
                      className={'dark:text-white dark:hover:bg-[#7A7A7A] hover:bg-[#F1F1F1] items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline capitalize transition-all duration-300 ' +
                      (navbar 
                      ? "py-4 px-3 w-full "
                      : "p-0 m-0 w-12 h-12")}
                      onClick={handleThemeSwitch}
                    >
                      
                      <img
                        className={
                          navbar 
                          ? "fill-none h-5 mr-4 !w-5 transition-all duration-500 invert-[.3] dark:invert" 
                          : "fill-none h-8 m-auto !w-8 transition-all duration-500 invert-[.3] dark:invert" 
                        }
                        src={theme == 'dark' 
                          ? "../src/components/navbar/assets/img/svg/sun.svg"
                          : "../src/components/navbar/assets/img/svg/moon.svg"
                        }
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
                          <span>Toggle Theme</span>
                        </ReactTooltip>
                        )}
                      {navbar 
                        ? (theme == 'dark' 
                            ? "Enable Light Mode"
                            : "Enable Dark Mode"
                          )
                        : ''
                      }
                    </button>
                  </div>
                </li>
              </ul>

              {/* <button 
                className="cursor-pointer h-12 w-12 mx-auto p-0 relative bg-black border-none rounded-full dark:bg-[#f5f8fc] z-[99]" 
                onClick={handleThemeSwitch}
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                {theme === 'dark' ? sun : moon}
              </button> */}

              {/* <ColourPallet /> */}
            </div>
          </ReactCarousel>
          
        </div>
        {/* End .menu */}        
      </div>
    );
};

export default VerticalTabNavbar;

