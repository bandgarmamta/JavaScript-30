const canva = document.querySelector('#draw');

const cxt = canva.getContext("2d")
canva.width = window.innerWidth;
canva.height = window.innerHeight;
cxt.lineWidth= 100
cxt.strokeStyle = "#FF0000"
cxt.lineCap = 'round'
cxt.lineJoin = 'round'

let lastX = 0
let lastY = 0
let isDrawing = false;
let direction = true;
let hue = 0;
function drawOnCanvas(e){
    if(!isDrawing) return;
    // console.log(e)
    cxt.strokeStyle = `hsl(${hue},100%,50%)`;
    
    cxt.beginPath()
    cxt.moveTo(lastX,lastY)

    cxt.lineTo(e.offsetX ,e.offsetY)
    cxt.stroke();
    [lastX,lastY]=[e.offsetX , e.offsetY];

    hue++;
    if(hue>=360){
        hue = 0;
    }
    if(cxt.lineWidth>=100|| cxt.lineWidth<=1){
        direction = !direction;
    }
    if(direction){
        cxt.lineWidth++;
    }else{
        cxt.lineWidth--;
    }

}

canva.addEventListener("mousemove",drawOnCanvas)
canva.addEventListener("mouseup",()=>isDrawing = false)
canva.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    [lastX,lastY]=[e.offsetX , e.offsetY];
})
canva.addEventListener("mouseout",()=>isDrawing = false )
// 