const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem("items")) || [];
const btns = document.querySelectorAll(".btn");

function newItem(e){
    
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    
    const item ={
        text,
        done: false
    };

    // console.log(item)
    items.push(item);
    // console.log("items: ",items)
    displayList(items,itemsList);
    localStorage.setItem("items",JSON.stringify(items))
    this.reset();
}

function displayList(plates=[],plateList){
    plateList.innerHTML=plates.map((plate,i) =>{
        return `
        <li> 
        <input type="checkbox" data-index=${i} id="item${i}"  ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join('');
}

 function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = ! items[index].done
    localStorage.setItem("items",JSON.stringify(items))
    displayList(items,itemsList);
 }

 function clearAll(){
     localStorage.clear();
     items = []
     //console.log(items)
     displayList(items,itemsList);
 }

 function checkAll(){
     for(var i=0;i<items.length;i++){
        items[i].done =true
     }
    //  console.log(items)
    localStorage.setItem("items",JSON.stringify(items))
    displayList(items,itemsList);
 }

 function uncheckAll(){
    for(var i=0;i<items.length;i++){
        items[i].done =false
     }
    //  console.log(items)
    localStorage.setItem("items",JSON.stringify(items))
    displayList(items,itemsList);
 }


addItems.addEventListener("submit",newItem);
itemsList.addEventListener("click",toggleDone)
btns[0].addEventListener("click",checkAll)
btns[1].addEventListener("click",uncheckAll)
btns[2].addEventListener("click",clearAll)
displayList(items,itemsList);