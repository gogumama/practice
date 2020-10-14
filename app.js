const moonPath = "M55 94C55 145.915 94 188 94 188C42.0852 188 0 145.915 0 94C0 42.0852 42.0852 0 94 0C94 0 55 42.0852 55 94Z"
const sunPath = "M188 94C188 145.915 145.915 188 94 188C42.0852 188 0 145.915 0 94C0 42.0852 42.0852 0 94 0C145.915 0 188 42.0852 188 94Z"

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//we need to click on the sun
//here we set up the timeline
darkMode.addEventListener('click', () => {
	//we need to use anime.js
	const timeline = anime.timeline({
		duration : 750,
		easing : "easeOutExpo"
	});
	//add different animations to the timeline
	timeline.add({
		targets: ".sun",
		d: [
			{value: moonPath}//can add a comma and another morph if you want
		]
	});
});
