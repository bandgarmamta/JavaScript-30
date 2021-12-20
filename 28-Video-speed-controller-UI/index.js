const speed = document.querySelector(".speed")
const speedBar = speed.querySelector(".speed-bar")
const video = document.querySelector("video")

function changeSpeed(e){
    const min = 0.4
    const max = 4

    const y = e.pageY - this.offsetTop; 
    const percent = y/this.offsetHeight;
    const height = Math.round(percent*100) + "%"
    const playbackRate = percent *(max-min) + min

    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + 'x';

    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove",changeSpeed)