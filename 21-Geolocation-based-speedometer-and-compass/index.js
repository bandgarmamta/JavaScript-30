const arrow = document.querySelector(".arrow")
const speed = document.querySelector(".speed-value")

navigator.geolocation.watchPosition((data)=>{
    // console.log(data.coords.speed)
    speed.textContent= data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
},(err)=>{
    console.error(err)
    alert("PLease allow to access your geolocation!")
});
