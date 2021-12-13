const timeArray = [...document.querySelectorAll('[data-time]')]

const seconds = timeArray.map(x=>x.dataset.time).map(y=>{
    const [mins,secs]=y.split(":").map(parseFloat)
    return (mins*60)+secs
}).reduce((total,sec)=>total+sec);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft % 60

console.log(hours,mins,secondsLeft);