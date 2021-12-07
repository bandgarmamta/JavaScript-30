const inputs = document.querySelectorAll(".controls input");

function changeImgStyle(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>input.addEventListener("change",changeImgStyle));
inputs.forEach(input=>input.addEventListener("mousemove",changeImgStyle));