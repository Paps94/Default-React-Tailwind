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
import BasicModal from './components/modal/BasicModal';
import VerticalNavbar from "./components/navbar/VerticalNavbar";


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

	const handleColourSwitch = (e) => {
		let colour = e.target.value;
		const root = document.querySelector(":root");
		e.target.checked = true;
		console.log();
		root.style.setProperty("--theme-colour", `var(--${colour})`);
	}

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
			className="fixed top-[20px] right-[15px] w-[55px] h-[55px] bg-[#1a1a1a] dark:bg-[#f5f8fc] rounded-full xl:bottom-auto xl:h-12 xl:w-12 xl:left-auto xl:top-[13px] xl:right-[80px] z-[99]"
			data-aos="fade-down-left"
			data-aos-duration="1500"
		>
			{theme === 'dark' ? sun : moon}
		</button>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter pl-[320px]">
			{/* <Intro /> */}
			<VerticalNavbar />
			<h1 className='text-theme-colour'>Test</h1>

			{/* <WorkArea /> */}
			{/* <Loader /> */}
			{/* <BasicModal 
				title= 'Test Title'
				message= 'Test message'
				onConfirm={''}
			 /> */}
			 <div id="example-wrapper" className='w-[min(60px,calc(100%_-_2rem))] fixed -translate-y-2/4 z-[99] right-3 top-2/4'>
				<div id="theme-picker-section" className="bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border flex items-center flex-col gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)]">      
					<div className='theme-picker-group'>
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="white" onClick={handleColourSwitch} />
					</div>
					<div className='theme-picker-group'>
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="red" onClick={handleColourSwitch} />
			 			<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[12%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g1c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g1c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g1c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g1c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="orange" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[24%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g2c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g2c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g2c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g2c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>	
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="yellow" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[36%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g3c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g3c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g3c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g3c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>	
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="green" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[48%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g4c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g4c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g4c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g4c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>	
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="blue" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[60%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g5c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g5c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g5c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g5c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>	
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="indigo" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[72%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g6c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g6c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g6c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g6c5"/>
						</div>
					</div>
					<div className='theme-picker-group'>
						<input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="violet" onClick={handleColourSwitch} />
						<div className='theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border hidden items-center flex-row-reverse gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[84%]'>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g7c2"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g7c3"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g7c4"/>
							<input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="g7c5"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ScrollToTop />
	 </>
  )
}

export default App
