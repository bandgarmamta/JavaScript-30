const divs = document.querySelectorAll("div")

function logText(e){
    console.log(this.classList.value);
    // e.stopPropagation();//stop bubbling
}
// if capture true then it shows the elements from parent to child else it shows elements from child to parent.
divs.forEach(i=>i.addEventListener("click",logText,{capture:true}));

// this button can be clicked only once
document.querySelector("button").addEventListener("click",()=>{
    console.log("You have clicked button!!")
    console.log("You can click this button only once")
},{once:true})