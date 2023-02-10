import React, { useEffect, useState, useLayoutEffect } from 'react';

import AnimatedCursor from "react-animated-cursor";		//Animate our cursor
import ScrollToTop from "./components/ScrollToTop";		//Our component that adds the QoL improvement to scroll tto the top after 250 units
import AOS from "aos";									//Small library to animate elements on your page as you scroll.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "aos/dist/aos.css";

import Intro from './components/Intro';
import Loader from './components/Loader';
import WorkArea from './components/WorkArea';
import Sidebar from "./components/navbar/Sidebar";


function App() {
	const [theme, setTheme] = useState('dark');

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

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto hover:cursor-pointer" icon={faSun} />;
	const moon = <FontAwesomeIcon className="w-[30px] h-[30px] m-auto text-white hover:cursor-pointer" icon={faMoon} />;

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
		<button
			type="button"
			onClick={handleThemeSwitch}
			className="fixed z-10 top-[20px] right-[15px] w-[55px] h-[55px] bg-[#1a1a1a] dark:bg-[#f5f8fc] rounded-full"
			data-aos="fade-down-left"
			data-aos-duration="1500"
		>
			{theme === 'dark' ? sun : moon}
		</button>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter ">
			{/* <Intro /> */}
			<Sidebar />
			{/* <WorkArea /> */}
			<Loader />
				
		</div>
		<ScrollToTop />
	 </>
  )
}

export default App
