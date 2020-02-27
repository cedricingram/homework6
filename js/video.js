var video;
var volume;
function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%";

	//Change its text
}

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate -=.2;
  	console.log("Speed is "+video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate +=.25;
	console.log("Speed is "+video.playbackRate);
}
//
// function skipAhead() {
//
// 	console.log("Current location is "+ );
// }
//
function mute() {
	console.log(video.muted);
	if (video.muted){
		let button = document.querySelector("#mute");
		button.innerHTML ="Muted";
		video.muted=false;
		console.log("Changing to Muted");
	}
	else {
		let button = document.querySelector("#mute");
		button.innerHTML ="Unmuted";
		video.muted=true;
		console.log("Changing to unmuted");
	}
}
//
function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume * 100) + "%";
}
//
//
// function gray() {
//
// 	console.log("In grayscale")
// }
//
// function color() {
//
// 	console.log("In color")
// }
