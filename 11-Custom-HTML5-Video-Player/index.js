//dom elements
const player = document.querySelector(".player"); 
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector(".toggle")
const skip = player.querySelectorAll("[data-skip]")
const ranges = player.querySelectorAll(".player__slider")
const fullScreen = player.querySelector(".fullscreen")

// build functions
function toggleVideo(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function changeButton(){
    const toggleicon = this.paused ? "►":"❚ ❚";
    toggle.textContent = toggleicon;
}

function skipButton(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function rangesOfAll(){
    video[this.name]=this.value;
}

function correctTimeBar(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis= `${percent}%`;
}

function slideVideo(e){
    
    const videolocate = (e.offsetX/progress.offsetWidth)*video.duration ;
    video.currentTime = videolocate;
}

function makeFullScreen(){
    video.requestFullscreen();
}

// hook the functions to event listeners
let mousedown = false;

video.addEventListener("click",toggleVideo)
video.addEventListener("timeupdate",correctTimeBar)
video.addEventListener("play",changeButton)
video.addEventListener("pause",changeButton)
toggle.addEventListener("click",toggleVideo)
ranges.forEach(i=>i.addEventListener("change",rangesOfAll));
skip.forEach(i=>i.addEventListener("click",skipButton));


progress.addEventListener("mousemove",(e)=>mousedown&&slideVideo(e));
progress.addEventListener("mousedown",()=>mousedown = true)
progress.addEventListener("mouseup",()=>mousedown = false)
progress.addEventListener("click",slideVideo)

// bonus: add a fullscreen button
fullScreen.addEventListener("click",makeFullScreen)