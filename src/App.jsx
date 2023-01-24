import React, { useEffect, useState, useLayoutEffect } from 'react';
import AnimatedCursor from "react-animated-cursor";		//Animate our cursor
import ScrollToTop from "./components/ScrollToTop";		//Our component that adds the QoL improvement to scroll tto the top after 250 units
import AOS from "aos";									//Small library to animate elements on your page as you scroll.
import "aos/dist/aos.css";

import Intro from './components/Intro';
import Loader from './components/Loader';
import WorkArea from './components/WorkArea';

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

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-[25px] h-[25px] m-auto hover:cursor-pointer"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1}
			stroke="white"
			className="w-[25px] h-[25px] m-auto hover:cursor-pointer"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

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
			className="fixed z-10 top-[20px] right-[15px] w-[45px] h-[45px] bg-[#1a1a1a] dark:bg-[#f5f8fc] rounded-[3px]"
			data-aos="fade-down-left"
			data-aos-duration="1500"
		>
			{theme === 'dark' ? sun : moon}
		</button>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter ">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				{/* <WorkArea /> */}
				<Loader />
			</div>
		</div>
		<ScrollToTop />
	 </>
  )
}

export default App
