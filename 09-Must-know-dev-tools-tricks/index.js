const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    console.log("1. Regular")
    console.log("hello");

    console.log("2. Interpolated")// Interpolated
    console.log("Hi I am %s string","😊");

    console.log("3. Styles")// Styled
    console.log("%c Hello","font-size:30px; background: blue; color:white;");
    
    console.log("4. warning!")// warning!
    console.warn("This is a warning")
    console.log("5. Error")// Error :|
    console.error("Error occured!")

    console.log("6. Information")// Info
    console.info("This is an information")

    console.log("7. Testing")// Testing
    console.assert(1===2,"This is wrong")

    console.log("8. clearing")// clearing
    //console.clear()
    

    console.log("9. Viewing DOM Elements")// Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);

    console.log("10. Grouping together")// Grouping together
    dogs.forEach(i=>{
        console.group(`${i.name}`)
        console.log(`This is ${i.name}`)
        console.log(`${i.name} is ${i.age} years old`)
        console.groupEnd()
    }) 
    
    console.log("11. counting")// counting
    console.count("mamta")
    console.count("neha")
    console.count("mamta")
    console.count("mamta")
    console.count("neha")
    console.count("neha")

    console.log("12. timing")// timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
      
      });