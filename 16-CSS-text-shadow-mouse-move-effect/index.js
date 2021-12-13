const hero = document.querySelector('.hero')
const text = hero.querySelector('h1');

function shadow(e){
    const {offsetHeight:height,offsetWidth:width} = hero
    let {offsetX:x , offsetY:y} = e;
    const walk = 100;
 
    if(this !== e.target){
        x = x + e.offsetLeft;
        y = y + e.offsetTop;
    }

    const xWalk = Math.round((x/width*walk) - (walk/2));
    const yWalk = Math.round((y/height*walk) - (walk/2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${yWalk}px ${xWalk*-1}px 0 green,
    ${yWalk*-1}px ${xWalk}px 0 yellow
    `
}

hero.addEventListener("mousemove",shadow)