let countDown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

function timer(seconds){
    const now = Date.now();
    const then = now+seconds*1000;
    displayTimeLeft(seconds)
    displayEndTime(then)
    
    countDown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);

        if(secondsLeft < 0){
            clearInterval(countDown)
            return;
        }


        displayTimeLeft(secondsLeft)
    }, 1000);
    
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60);
    const secondsRemaining = seconds % 60;
    const display = `${minutes}:${secondsRemaining<10? '0':""}${secondsRemaining}`
    document.title = display
    timerDisplay.textContent = display
    
}


function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHours = hour>12? hour-12:hour
    const minute =end.getMinutes();
    endTime.textContent = `Be Back at ${adjustedHours}:${minute<10?'0':''}${minute}`
}


