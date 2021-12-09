const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const arr = []
fetch(endpoint)
.then(i=>i.json())
.then(i=>arr.push(...i))

function findMatches(e,arr){
   
    const matchInput = arr.filter(i=>{
        const regex = new RegExp(e,'gi'); //g for global, i for insenitive
        return i.city.match(regex)|| i.state.match(regex);
    });
    return matchInput
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches(){
    const ip = findMatches(this.value,arr)
    const listhtml = ip.map(i=>{
    
    const regex = new RegExp(this.value ,'gi')
    const cityName = i.city.replace(regex,`<span class="hl">${this.value}</span>`)
    const stateName = i.state.replace(regex,`<sapn class="hl">${this.value}</span>`)

    return `
    <li>
       <span class="name">${cityName},${stateName}</span>
       <span class="population">${numberWithCommas(i.population)}</span>
    </li>
    `
    
    }).join('')
    suggestions.innerHTML = listhtml
     
 }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// console.log(arr)