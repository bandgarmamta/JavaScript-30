const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function showTime(){
    const date = new Date();

    const seconds = date.getSeconds();
    const secondDegree = ((seconds/60)*360) + 90
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const min = date.getMinutes();
    const minDegree = ((min / 60) * 360) + ((seconds / 60) * 6 )+ 90
    minsHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360) + ((min / 60) * 30) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(showTime,1000);
showTime();