const band = document.querySelector("#bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(x){
    return x.replace(/^(a |the |an )/i,'').trim();
}

bands.sort((a,b)=> removeArticle(a)>removeArticle(b)?1:-1)

band.innerHTML = bands.map(i=>`<li>${i}</li>`).join('');