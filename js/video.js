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
}

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate *=.8;
  	console.log("Speed is "+video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *=1.25;
	console.log("Speed is "+video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	video.addEventListener('ended', function(){
		video.currentTime = 0
	});
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	console.log(video.muted);
	if (video.muted){
		let button = document.querySelector("#mute");
		button.innerHTML ="Mute";
		video.muted=false;
		console.log("Changing to Muted");
	}
	else {
		let button = document.querySelector("#mute");
		button.innerHTML ="Unmute";
		video.muted=true;
		console.log("Changing to unmuted");
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume * 100) + "%";
}

function gray() {
	video.classList.add("grayscale");
	console.log("In grayscale")
}
//
function color() {
	video.classList.remove("grayscale");
	console.log("In color")
}
