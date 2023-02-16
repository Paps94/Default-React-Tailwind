import { useContext } from "react";
import { StylingContext } from "../../contexts/StylingContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ColourPallet from "../misc/ColourPallet";

const OptionsNavbar = () => {
  const {theme, setTheme} = useContext(StylingContext);
  const {navbar, setNavbar} = useContext(StylingContext);
  
  const handleNavbarToggle = () => setNavbar(!navbar);

  const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

  const sun = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-yellow-400 hover:cursor-pointer" icon={faSun} />;
	const moon = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-white hover:cursor-pointer" icon={faMoon} />;

  return (
    <>
        
      {/* Right Navbar Option */}
      <div className="flex flex-col justify-around items-center gap-2 py-4 shadow-main rounded-md fixed right-8 top-8 bottom-8 z-[96] w-20 bg-gradient-to-l from-[#FFAFBD] to-[#FFC3A0] dark:bg-gradient-to-l dark:from-[#414141] dark:to-[#121212]">
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
    </>
  );
};

export default OptionsNavbar;
