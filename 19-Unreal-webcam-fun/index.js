const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let x = 0;

const btnFilters = document.querySelectorAll(".btn-filter");

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(localMediaStream =>{
        video.srcObject=localMediaStream
        video.play();
    }).catch(err=>{
        console.log("Permission denied!",err)
    })
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    console.log({width,height});

    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);
        let pixels = ctx.getImageData(0,0,width,height);
        if(x==1){
            pixels = redEffect(pixels);
        }else if(x==2){
            pixels = rgbsplit(pixels);
        }else if(x==3){
            pixels = greenScreen(pixels);
        }else if(x==4){
            pixels = funColor(pixels);
        }else if(x==5){
            pixels = ctx.getImageData(0,0,width,height);
        }else{
            pixels = ctx.getImageData(0,0,width,height);
        }
        //pixels = redEffect(pixels);
        //pixels = rgbsplit(pixels);
        //ctx.globalAlpha = 0.1;
        //pixels = greenScreen(pixels);
        // pixels = funColor(pixels);
        ctx.putImageData(pixels,0,0);

    },16)
}

function takePhoto(){
    // play click sound
    snap.currentTime = 0;
    snap.play();

    // take photo and download
    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download" ,  "handsome");
    // link.textContent = 'Download Image'; for only link of image 
    // image displayed on screen and can be downloaded on clicking
    link.innerHTML = `<img src="${data}" alt="Coooool"/>`
    strip.insertBefore(link,strip.firstChild);
}

function redEffect(pixels){
    for(let i=0;i<pixels.data.length;i+=4){
        pixels.data[i+0]+=100; // red
        pixels.data[i+1]-=50; // green
        pixels.data[i+2]*=0.5; // blue
    }
    return pixels;
}

function rgbsplit(pixels){
    for(let i=0;i<pixels.data.length;i+=4){
        pixels.data[i-150]=pixels.data[i+0] // red
        pixels.data[i+100]=pixels.data[i+1]; // green
        pixels.data[i-150]=pixels.data[i+2]; // blue
    }
    return pixels;
}

function greenScreen(pixels){
    let levels = {}

    document.querySelectorAll('.rgb input').forEach((input)=>{
        levels[input.name] = input.value
    })


    for(let i=0;i<pixels.data.length;i+=4){
        red=pixels.data[i+0] // red
        green=pixels.data[i+1]; // green
        blue=pixels.data[i+2]; // blue
        alpha = pixels.data[i+3];

        if(red >=levels.rmin && green >=levels.gmin && blue>=levels.bmin && red<=levels.rmax && green<=levels.gmax && blue<=levels.bmax){
            pixels.data[i+3]=0;
        }
    }
    return pixels;
}

function funColor(pixels){
    for(let i=0;i<pixels.data.length;i+=4){
        pixels.data[i+0]+=50; // red
        pixels.data[i+1]-=100; // green
        pixels.data[i+2]*=0.5; // blue
    }
    return pixels;
}

getVideo();
video.addEventListener("canplay",paintToCanvas)
btnFilters[0].addEventListener("click",(e)=>{
    if(e.isTrusted) x = 1;
    paintToCanvas()})

btnFilters[1].addEventListener("click",(e)=>{
    if(e.isTrusted) x = 2;
    paintToCanvas()})  
    
btnFilters[2].addEventListener("click",(e)=>{
    if(e.isTrusted) x = 3;
    paintToCanvas()}) 
        
btnFilters[3].addEventListener("click",(e)=>{
    if(e.isTrusted) x = 4;
    paintToCanvas()}) 

btnFilters[4].addEventListener("click",(e)=>{
    if(e.isTrusted) x = 5;
    paintToCanvas()}) 
    

