const panels = document.querySelectorAll(".panel")

function animateImage() {
    this.classList.toggle("open");

}

function openActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle("open-active")
    }
}
panels.forEach(i => i.addEventListener("click", animateImage))

panels.forEach(i => i.addEventListener("transitionend", openActive))