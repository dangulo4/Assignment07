//STEP 1
console.log('Exercise 1..................');
let favMovies = ['Goodfellas', 'Donnie Brasco', 'Predator', 'Point Break', 'Tombstone'];
console.log(favMovies);
console.log('');
//STEP 2
console.log('Exercise 2..................');
let movies = new Array(5);
for (i = 0; i < favMovies.length; i++) {
  movies.shift();
  movies = movies.concat(favMovies[i]);
}
console.log(`first movie in new array: ${movies[0]}`);
console.log('');
//STEP 3
console.log('Exercise 3..................');
movies.splice(1, 0, 'Casino Royal');
console.log(`The new length is: ${movies.length}`);
console.log('');
//STEP 4
console.log('Exercise 4..................');
let movies2 = ['Goodfellas', 'Donnie Brasco', 'Predator', 'Point Break', 'Tombstone'];
delete movies2[0];
console.log(movies2);
console.log('');
//STEP 5
console.log('Exercise 5..................');
let movies3 = [
  'Star Wars',
  'Raider of the Lost Ark',
  'Close Encounters of the Third Kind',
  'Predator 2',
  'Office Space',
  'Football Factory',
  'War of the Worlds',
];
let counter = 1;
console.log('Using for in loop to iterate....');
for (let movie in movies3) {
  console.log(`${counter}. ${movies3[movie]}`);
  counter++;
}
console.log('');
//STEP 6
console.log('Exercise 6..................');
console.log('Using for of loop to iterate....');
let counter2 = 1;
for (let i of movies3) {
  console.log(`${counter2}. ${i}`);
  counter2++;
}
console.log('');
//STEP 7
console.log('Exercise 7..................');
let counter3 = 1;
movies3.sort();
for (let i of movies3) {
  console.log(`${counter3}. ${i}`);
  counter3++;
}
console.log('');
//STEP 8
console.log('Exercise 8..................');
let counter4 = 1;
let FavMovies2 = ['Tombstone', 'Predator', 'Interstellar'];
let leastFavMovies = ['Titanic', 'Iron Man', 'Any super hero movie'];
console.log('\tMovies I like:');
console.log('');
for (let i of FavMovies2) {
  console.log(`Movie ${counter4}. ${i}`);
  counter4++;
}
let counter5 = 1;
console.log('');
console.log('\tMovies I regret watching:');
console.log('');
for (let i of leastFavMovies) {
  console.log(`Movie ${counter5}. ${i}`);
  counter5++;
}
console.log('');
//STEP 9
console.log('Exercise 9..................');
let allMovies = FavMovies2.concat(leastFavMovies);
let counter6 = 1;
allMovies.sort().reverse();
for (let i of allMovies) {
  console.log(`${counter6}. ${i}`);
  counter6++;
}
console.log('');
//STEP 10
console.log('Exercise 10.................');
console.log('Displaying the last item only');
console.log(allMovies[allMovies.length - 1]);
console.log('');
//STEP 11
console.log('Exercise 11.................');
console.log('Displaying the first item only');
console.log(allMovies[0]);
console.log('');
//STEP 12
console.log('Exercise 12.................');
let boringMovies = [];
for (i = 0; i < allMovies.length; i++) {
  if (allMovies[i] === 'Iron Man' || allMovies[i] === 'Titanic' || allMovies[i] === 'Any super hero movie') {
    boringMovies.push(i);
  }
}
// FIND THE INDEX AND REMOVE THE BORING MOVIE AND REPLACE
allMovies.splice(boringMovies[0], 1, 'Casino Royal');
allMovies.splice(boringMovies[1], 1, 'Football Factory');
allMovies.splice(boringMovies[2], 1, 'Office Space');
console.log(allMovies);
console.log('');
//STEP 13
console.log('Exercise 13.................');
let favMovies3 = [
  ['Predator', 1],
  ['Close Encounters of the Third Kind', 2],
  ['Raider of the Lost Ark', 3],
  ['Star Wars', 4],
  ['Office Space', 5],
];
for (let i = 0; i < favMovies3.length; i++) {
  let movieNames = favMovies3.filter((item) => {
    return typeof item !== 'number';
  });
  console.log(movieNames[i][0]);
}
console.log('');
//STEP 14
console.log('Exercise 14.................');
let employees = ['Tony', 'Amy', 'Holly', 'Bob'];
console.log('\tEmployees:');
let showEmployees = employees.forEach((employee) => {
  console.log(employee);
});
console.log('');
//STEP 15
console.log('Exercise 15.................');
let newArray = [58, '', 'abcd', true, null, false, 0];
console.log(
  newArray
    .filter((x) => {
      return x !== false;
    })
    .filter((x) => {
      return x !== null;
    })
    .filter((x) => {
      return x !== '';
    })
);
//STEP 16
console.log('Exercise 16.................');
let randomNum = Math.round(Math.random() * 10);
let numArray = [100, 50, 80, 99, 708, 89, 65, 120, 500, -900];
console.log(numArray);
console.log(`Random Number: ${randomNum}`);
console.log(`The random number picked: ${numArray[randomNum - 1]}`);
console.log('');
//STEP 17
console.log('Exercise 17.................');
biggestNum = 0;
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > biggestNum) {
    // assign new value to biggest num
    biggestNum = numArray[i];
  }
}
console.log(biggestNum);
