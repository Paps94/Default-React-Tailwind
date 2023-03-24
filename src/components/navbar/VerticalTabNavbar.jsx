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
    const tabs = ["menu", "settings"];
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
          <ReactCarousel className="react-carousel" showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} swipeable={true} emulateTouch={true} selectedItem={activeTab} onChange={handleTabClicked}>
            <div>
            <ul className="list-none m-0 tooltip-parent">
            {navbarContent.map((val, i) => (
              <li className="float-left w-full mt-0 mx-0 mb-2" key={i}  data-tooltip-id="navbarTooltip" data-tooltip-content={val.itemName} data-tooltip-place="right">
                <div className="float-left mt-0 ml-0 mr-0 mb-2 w-full last:mb-0">
                  <NavLink 
                    to={val.itemRoute}
                    className={({isActive}) => {
                      return (
                        'dark:text-white dark:before:bg-[#7A7A7A] active:before:w-full before:bg-[#F1F1F1] before:rounded-md before:h-full before:left-0 before:absolute before:top-0 before:w-0 before:z-[-1] before:transition-all before:duration-300  items-center rounded-md text-[#1a1a1a] flex text-sm font-medium relative no-underline capitalize transition-all duration-300 !cursor-pointer ' +
                        (navbar 
                        ? "py-4 px-3  "
                        : "p-3 ") +
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
                        : "fill-none h-8 mr-4 !w-8 transition-all duration-500 invert-[.3] dark:invert" 
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
            </div>
              {/* Right Navbar Option */}
              <div className="flex flex-col justify-start items-center gap-5 py-4 rounded-md w-auto">
                  <button 
                    className="cursor-pointer h-12 mx-auto p-0 relative w-12 bg-[#1a1a1a] border-none rounded-full dark:bg-[#f5f8fc]" 
                    onClick={handleNavbarToggle}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <div className={navbar ? "active" : ""}>
                      <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[-15px] dark:bg-[#111319] .active:rotate-45 .active:top-0"></span>
                      <span className="bottom-0 bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-[1px] dark:bg-[#111319]"></span>
                      <span className="bottom-[13px] bg-white duration-300 text-white h-0.5 left-0 m-auto absolute right-0 w-6 top-auto dark:bg-[#111319]"></span>
                    </div>
                  </button>

                  <button 
                    className="cursor-pointer h-12 w-12 mx-auto p-0 relative bg-black border-none rounded-full dark:bg-[#f5f8fc] z-[99]" 
                    onClick={handleThemeSwitch}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    {theme === 'dark' ? sun : moon}
                  </button>

                  <ColourPallet />
              </div>
          </ReactCarousel>
          
        </div>
        {/* End .menu */}        
      </div>
      
    // <aside className="sidebar">
    //   <div>
    //     <Nav activeTab={activeTab} onTabClicked={handleTabClicked}/>

    //     <ReactCarousel className="react-carousel" showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} swipeable={true} emulateTouch={true} selectedItem={activeTab} onChange={handleTabClicked}>
    //       <div>
    //         Menu
    //       </div>
    //       <div>
    //         Settings
    //       </div>
    //     </ReactCarousel>
    //   </div>
    // </aside>
    );
};

export default VerticalTabNavbar;

