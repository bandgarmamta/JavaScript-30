window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p')
const words = document.querySelector(".words")
words.appendChild(p);

recognition.addEventListener("result",(e)=>{
    let speech = Array.from(e.results).map(i=>i[0]).map(j=>j.transcript).join('')
    
    const exclaim =speech.replace(/exclamation mark|OMG/gi,"!");
        
    p.textContent = exclaim;

    if(e.results[0].isFinal){
        p = document.createElement('p')
        words.appendChild(p);
    }

    
    
})

recognition.addEventListener("end",recognition.start)

recognition.start();

