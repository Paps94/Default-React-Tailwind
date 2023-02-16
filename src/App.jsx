import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StylingContext } from './contexts/StylingContext';

import AnimatedCursor from "react-animated-cursor";		//Animate our cursor
import ScrollToTop from "./components/ScrollToTop";		//Our component that adds the QoL improvement to scroll tto the top after 250 units
import AOS from "aos";									//Small library to animate elements on your page as you scroll.
import "aos/dist/aos.css";

import Intro from './components/Intro';
import Loader from './components/Loader';
import Main from './components/Main';
import BasicModal from './components/modal/BasicModal';
import VerticalNavbar from "./components/navbar/VerticalNavbar";
import OptionsNavbar from "./components/navbar/OptionsNavbar";



function App() {
	var style = getComputedStyle(document.body);
	let themeColour = style.getPropertyValue('--theme-colour-1');
	
	const [theme, setTheme] = useState('dark');
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		//Initialize AOS library on page load
		AOS.init();
		setTheme('dark');
		// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 	setTheme('dark');
		// } else {
		// 	setTheme('light');
		// }
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	// const sun = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto hover:cursor-pointer" icon={faSun} />;
	// const moon = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-white hover:cursor-pointer" icon={faMoon} />;

  return (
	<>
		<AnimatedCursor
			innerSize={8}
			outerSize={44}
			color="255, 183, 3"
			outerAlpha={0.3}
			innerScale={0.7}
			outerScale={1.4}
		/>
		{/* <button
			type="button"
			onClick={handleThemeSwitch}
			className="fixed top-[20px] right-[15px] w-[55px] h-[55px] bg-[#1a1a1a] dark:bg-[#f5f8fc] rounded-full xl:bottom-auto xl:h-12 xl:w-12 xl:left-auto xl:top-[13px] xl:right-[80px] z-[99]"
			data-aos="fade-down-left"
			data-aos-duration="1500"
		>
			{theme === 'dark' ? sun : moon}
		</button> */}
		<div className="bg-[#dbdbdb] dark:bg-[#dbdbdb] text-stone-900 dark:text-stone-300 min-h-screen font-inter pl-[320px]">
			{/* <Intro /> */}
			<StylingContext.Provider value={{navbar, setNavbar, theme, setTheme}}>
				<VerticalNavbar />
				<Main />
				<OptionsNavbar />
			</StylingContext.Provider>
			

			


			{/* <WorkArea /> */}
			{/* <Loader /> */}
			{/* <BasicModal 
				title= 'Test Title'
				message= 'Test message'
				onConfirm={''}
			 /> */}
			
		</div>
		<ScrollToTop />
	 </>
  )
}

export default App
