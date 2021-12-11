// start with strings, numbers and booleans

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:
    const team = players

    // however what happens when we update that array?
    team[1] = 'neaa'

    // now here is the problem!
    console.log("Reference : ",players,team)

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    const team1 = players.slice()
    console.log("team1 : ",team1)
    // or create a new array and concat the old one in
    const team2=[].concat(players)
    console.log("team2 : ",team2)

    // or use the new ES6 Spread
    const team3 = [...players]
    console.log("team3 : ",team3)

    // now when we update it, the original one isn't changed
    team1[1] = 'mamta'
    team2[1] = 'mamta'
    team2[1] = 'mamta'

    console.log("Copy: ")
    console.log("players: ",players)
    console.log("team1 : ",team1)
    console.log("team2 : ",team1)
    console.log("team3 : ",team1)
    
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const people = person;
    console.log(people)
    people.age=100
    console.log("Reference : ",people,person)

    // how do we take a copy instead?
    const Obj = Object.assign({}, person, {age:30})
    console.log("Copy: ",Obj,person)
    

    // We will hopefully soon see the object ...spread

    const objSpread = {...people}
    
    console.log("Object spread:",objSpread)

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const wes = {
        name: 'wes',
        age : 100,
        social : {
            twitter : '@wesbos',
            facebook: 'wesbos.developer'
        }
    }

    //console.clear()
    console.log("Original",wes);

    const dev1 = Object.assign({},wes)
    dev1.social.twitter='@tarkash'
    console.log("reference",wes,dev1)
    const dev2 = JSON.parse(JSON.stringify(wes));
    dev2.social.twitter='@JS30'
    console.log("Copy: ",wes,dev2)
