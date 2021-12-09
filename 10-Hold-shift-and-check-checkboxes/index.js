const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

checkboxes.forEach(i=>i.addEventListener("click",handleCheck))

let lastChecked;
function handleCheck(e){
    let inbetween = false
    
    if(e.shiftKey && this.checked){
        checkboxes.forEach(i=>{
            if(i === this || i === lastChecked){
                inbetween = !inbetween;
            }
            if(inbetween){
                i.checked = true
            }
        })
    }
    lastChecked = this;
}