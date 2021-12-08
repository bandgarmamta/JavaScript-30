const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  console.log("Q1. Array.prototype.some() // is at least one person 19 or older?")
const somePeople = people.some(i=> (new Date()).getFullYear() - i.year >= 19);
console.log(somePeople);
  
console.log("Q2. Array.prototype.every() // is everyone 19 or older?")
  const allPeople = people.every(i=> (new Date()).getFullYear() - i.year >= 19);
  console.log(allPeople);
  // Array.prototype.find()
  
  console.log(`Q3. Find is like filter, but instead returns just the one you are looking for
  find the comment with the ID of 823423`)
const findID = comments.find(i=>i.id === 823423 )
console.table(findID);

  // Array.prototype.findIndex()
  
  console.log("Q4. Find the index of comment with this ID = 823423")
  const findIndexofID = comments.findIndex(i=>i.id === 823423 )
  console.table(findIndexofID);

  console.log("Q5. delete the comment with the ID of 823423")
  console.log("method 1:")
  comments.splice(findIndexofID,1)
  console.table(comments)
//   console.log("method 2:")
//   const newComments = [
//       ...comments.slice(0,findIndexofID),
//       ...comments.slice(findIndexofID+1)
//   ]
//   console.table(newComments)
