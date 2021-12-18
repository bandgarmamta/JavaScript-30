const slider = document.querySelector('.items');
let isDown = false; // flag for mousedown
let startX, scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    isDown = true;
    slider.classList.add('active') // adds the class 
    startX = e.pageX -slider.offsetLeft; // point where mouse is clicked on mousedown
    scrollLeft = slider.scrollLeft;   // Left distance of scrolling to see where we have scrolled
})

slider.addEventListener('mouseup',()=>{
    isDown = false;
    slider.classList.remove('active')
})


slider.addEventListener('mouseleave',()=>{
    isDown = false;
    slider.classList.remove('active');
})

slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return; // if isDown is false then don't return anything
    e.preventDefault(); // prevent from all the default things provided like selecting text,
    const x = e.pageX -slider.offsetLeft; // point where mouse is moving on mousemove
    const walk = (x - startX)*3; // number of pixels moved
    slider.scrollLeft = scrollLeft - walk; //pixels to be scrolled
})
