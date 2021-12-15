const triggers = document.querySelectorAll("a")
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight);

function highlightLink(){
    const linkscoords = this.getBoundingClientRect();

    const coords = {
        width : linkscoords.width ,
        height : linkscoords.height,
        top : linkscoords.top +  window.scrollY,
        left : linkscoords.left + window.screenX
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform =`translate(${coords.left}px,${coords.top}px)`
}

triggers.forEach(i=>i.addEventListener('mouseenter',highlightLink));