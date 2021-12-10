window.addEventListener('keyup',isKonamiCode)

let arr=[];
let secretCode = "tarkash"

function isKonamiCode(e){
   // console.log(e)
    arr.push(e.key);
    arr.splice(-secretCode.length-1, arr.length-secretCode.length)
    console.log(arr)
    if(arr.join('').includes(secretCode)){
        console.log("wohooooooooo!!")
        cornify_add()
    }
    
}