const keys = document.querySelectorAll(".key")
keys.forEach(key=> key.addEventListener("transitionend",transitionEnd))

function transitionEnd(){
    this.classList.remove("playing");  
}

window.addEventListener("keydown",playSound)

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.play();
    key.classList.add("playing");
    
}