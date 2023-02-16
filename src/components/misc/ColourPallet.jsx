const ColourPallet = () => {

    const handleColourSwitch = (e) => {
		const root = document.querySelector(":root");
		let colour = e.target.value;
		let group = e.target.getAttribute('data-group');

		//Set the CSS variables to the desired colours
		root.style.setProperty("--theme-colour", `var(--${colour})`);
		root.style.setProperty("--theme-colour-1", `var(--${colour})`);
		root.style.setProperty("--theme-colour-2", `var(--${group}c2)`);
		root.style.setProperty("--theme-colour-3", `var(--${group}c3)`);
		root.style.setProperty("--theme-colour-4", `var(--${group}c4)`);
		root.style.setProperty("--theme-colour-5", `var(--${group}c5)`);

		//Set the checked status on the radio box for the css to take effect
		e.target.checked = true;
	}

    const palletGroups = [
        { colour: "red", group: "g1", top: "12%"},
        { colour: "orange", group: "g2", top: 24},
        { colour: "yellow", group: "g3", top: 63},
        { colour: "green", group: "g4", top: 48},
        { colour: "blue", group: "g5", top: 60},
        { colour: "indigo", group: "g6", top: 72},
        { colour: "violet", group: "g7", top: 84},
    ];

    return (
        <div id="example-wrapper" className='w-[min(60px,calc(100%_-_2rem))] '>
        <div id="theme-picker-section" className="bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border flex items-center flex-col gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)]">      
            <div className='theme-picker-group'>
                <input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value="white" onClick={handleColourSwitch} />
            </div>

            {palletGroups.map((val, i) => (
                <div className='theme-picker-group' key={i}>
                <input className="h-[1.8rem] w-[1.8rem] relative cursor-pointer m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value={val.colour} data-group={val.group} onClick={handleColourSwitch} />
                  <div className={'theme-picker-pallet bg-[rgba(50,50,50,0.2)] backdrop-blur-[3px] border items-center flex-col gap-4 p-4 rounded-[0.3rem] border-solid border-[rgba(255,255,255,0.1)] absolute right-16 top-[50%] translate-y-[-50%] hidden'}>
                      <input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value={val.group + 'c2'}/>
                      <input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value={val.group + 'c3'}/>
                      <input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value={val.group + 'c4'}/>
                      <input className="h-[1.6rem] w-[1.6rem] relative m-0 after:h-[104%] after:w-[104%] before:hidden before:h-[120%] before:w-[120%] before:border-[0.2rem] before:border-solid before:border-[white] checked:before:block" type="radio" name='theme' value={val.group + 'c5'}/>
                  </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ColourPallet;