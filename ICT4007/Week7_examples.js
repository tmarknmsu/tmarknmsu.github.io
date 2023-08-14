// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// const index = cities.indexOf('Liverpool');
// if (index !== -1) {
//   cities.splice(index, 2);
// }
// console.log(cities);     // [ "Manchester", "Carlisle" ]

// const birds = ['Parrot', 'Falcon', 'Owl'];

// for (const bird of birds) {
//   console.log(bird);
// }

// function double(number) {
//     return number * 2;
//   }
//   const numbers = [5, 2, 7, 6];
//   const doubled = numbers.map(double);
//   console.log(doubled);  // [ 10, 4, 14, 12 ]

//   function isLong(city) {
//     return city.length > 8;
//   }
//   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
//   const longer = cities.filter(isLong);
//   console.log(longer);  // [ "Liverpool", "Edinburgh" ]

//   Converting between strings and arrays
// const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// const cities = data.split(',');
// cities;
// cities.length;
// console.log(cities[0]); // the first item in the array
// console.log(cities[1]); // the second item in the array
// console.log(cities[cities.length - 1]); // the last item in the array

// const commaSeparated = cities.join(',');
// console.log(commaSeparated);

// const dogNames = ['Rocket','Flash','Bella','Slugger'];
// dogNames.toString(); // Rocket,Flash,Bella,Slugger
// console.log(dogNames);

// let shoppingDone = false;
// let childsAllowance;

// if (shoppingDone === true) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }
// console.log("childsAllowance = ",childsAllowance);

// const select = document.getElementById('weather');
// const para = document.getElementById('output');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = '';
//   }
// }

// let cheese = 'Cheddar';

// if (cheese) {
//   console.log('Yay! Cheese available for making cheese on toast.');
// } else {
//   console.log('No cheese on toast for you today.');
// }
 
// if (iceCreamVanOutside || houseStatus === 'on fire') {
//     console.log('You should leave the house quickly.');
//   } else {
//     console.log('Probably should just stay in then.');
//   }

// const results = document.querySelector('#results');

// function calculate() {
//   for (let i = 1; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i}`;
//     results.textContent += `${newResult}\n`;
//   }
//   results.textContent += '\nFinished!';
// }

// const calculateBtn = document.querySelector('#calculate');
// const clearBtn = document.querySelector('#clear');

// calculateBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', () => results.textContent = '');

// function countdown(){
// for ( let i = 10; i>=0; i--) {
       
//     // para.textContent = 'T minus ${i}\n';
//     console.log(i);
//  }
// }
// countdown()

// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);

// const myText = 'I am a string';
// const newString = myText.replace('string', 'sausage');
// console.log(newString);

// var i = 1;
// do {
//     document.write("<p>The number is " + i + "</p>");
//     i++;
// }
// while(i <= 5);


// let pieTotal = 8
// for (let i = 1; i<=pieTotal;i++) {
//     console.log('Lets Eat a piece of pie!');
//     console.log("I've now eaten ",i," piece(s) of pie!");
//     console.log('There are now ', pieTotal-i,' pieces left');
// }
// console.log("Can't believe I ate the whole thing!");


// let pieTotal = 8
// let stomach = 'starving'
// let i = 1
// while (stomach != 'full') {    
//     console.log('Lets Eat a piece of pie!');
//     console.log("I've now eaten ",i," piece(s) of pie!");
//     console.log('There are now ', pieTotal-i,' pieces left');
//     if (i > 4){
//         stomach = 'full'
//     }

//     i++
// }
// console.log("I still ate too much!");

// pieTotal = 8
// piecesDesired = 20

// function eat_some_pie(pieTotal, piecesDesired){
//         if (piecesDesired > pieTotal){
//             piesNeeded = Math.ceil((piecesDesired - pieTotal)/8)
//             console.log("Guess I'll need to get ",piesNeeded," more pie(s)!");
//             pieTotal = pieTotal + 8 * piesNeeded
//         }
//       for (let i = 1; i<=pieTotal;i++) {
//         piecesLeft = pieTotal-i
//           console.log('Lets Eat a piece of pie!');
//           console.log("I've now eaten ",i," piece(s) of pie!");
//           console.log('There are now ', piecesLeft,' pieces left');
//         if (i == piecesDesired){
          
//           break
//         }
//         else {console.log("I am still going to eat ", piecesDesired - i ," more pieces!");}
//       }

//       console.log("Can't believe I ate that much!");
//     }

// eat_some_pie(pieTotal, piecesDesired)   
pieTotal = 8
piecesDesired = 20

function eat_some_pie(pieTotal, piecesDesired){
        if (piecesDesired > pieTotal){
            piesNeeded = Math.ceil((piecesDesired - pieTotal)/8)
            console.log("Guess I'll need to get ",piesNeeded," more pie(s)!");
            pieTotal = pieTotal + 8 * piesNeeded
        }
        let i = 1
      while ( i <= pieTotal && i<piecesDesired) {
          piecesLeft = pieTotal-i
          console.log('Lets Eat a piece of pie!');
          console.log("I've now eaten ",i," piece(s) of pie!");
          console.log('There are now ', piecesLeft,' pieces left');    
          console.log("I am still going to eat ", piecesDesired - i ," more pieces!")
          i++}
      
      

      console.log("Can't believe I ate that much!");
    }

eat_some_pie(pieTotal, piecesDesired)   

