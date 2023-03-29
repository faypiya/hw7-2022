var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

function onClick() {
	document.getElementById("status").innerHTML = "clicked"
}

function onHover() {
	document.getElementById("status").innerHTML = "moused over"
}

function onOut() {
	document.getElementById("status").innerHTML = "moused out"
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	video.playbackRate *= 0.9;
	console.log("Video speed: " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
    video.playbackRate /= 0.9; 
    console.log("Video speed: " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead Video");
    video.currentTime += 10;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Current time: " + video.currentTime)
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted==true) {
		video.muted = false;
		console.log("Video Unmuted");
		document.getElementById("mute").innerHTML = document.getElementById("mute").innerHTML.replace('Unmute', 'Mute');
	}
	else {
		video.muted = true;
		console.log("Video Muted");
		document.getElementById("mute").innerHTML = document.getElementById("mute").innerHTML.replace('Mute', 'Unmute');

	}
})

const volume = document.querySelector("#slider");
const volumeInfo = document.getElementById("volume");

function updateVolume() {
  const volumeFraction = volume.value / 100;
  video.volume = volumeFraction;
  console.log("The current value is " + volumeFraction);
  volumeInfo.innerHTML = volume.value + "%";
}

volume.addEventListener("change", updateVolume);

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
})


