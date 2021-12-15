const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value

function populateVoice(){
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices.filter(i=>i.lang.includes('en')).map(i=>`<option value="${i.name}">${i.name}(${i.lang})</option>`).join('')
}

function setVoice(){
  msg.voice = voices.find(i=> i.name === this.value);
  toggle();

}

function setOption(){
    msg[this.name] = this.value;
    toggle();
}

function toggle(startover = true){
    speechSynthesis.cancel();
    if(startover){
        speechSynthesis.speak(msg);
    }
}

options.forEach(i=>i.addEventListener('change',setOption));
speechSynthesis.addEventListener('voiceschanged',populateVoice);
voicesDropdown.addEventListener('change',setVoice)
speakButton.addEventListener("click",toggle);
stopButton.addEventListener("click",()=>toggle(false));