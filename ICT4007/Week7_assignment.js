//just setting up variables and grabing what I need from the HTML
const select = document.querySelector('select');
const para = document.getElementById("era_select");
const low = document.getElementById("low");
const high = document.getElementById("high");
//This is the dataset.  I set them up as objects to sort through.
let cars = [
  {"make": "Aston Martin",
  "model":"DB5",
  "year":1964},
  {"make": "Ferrari",
  "model":"250 GTO",
  "year":1962},
  {"make": "Jaguar",
  "model":"E-Type",
  "year":1961},
  {"make": "Porsche",
  "model":"911",
  "year":1963},
  {"make": "Chevrolet",
  "model":"El Camino SS",
  "year":1970},
  {"make": "Oldsmobile",
  "model":"Starfire Convertible",
  "year":1962},
  {"make": "British Motor Corporation",
  "model":"Mini",
  "year":1959},
  {"make": "Ford",
  "model":"Mustang Shelby GT350",
  "year":1965},
  {"make": "Mercedes",
  "model":"300SL Gullwing",
  "year":1954},
  {"make": "Chevrolet",
  "model":"Corvette",
  "year":1963},
  {"make": "Bugatti",
  "model":"Type 57 Atlantic",
  "year":1938},
  {"make": "Rolls-Royce",
  "model":"Dawn Drophead",
  "year":1949},
  {"make": "Ford",
  "model":"Thunderbird",
  "year":1971},
  {"make": "Jaguar",
  "model":"XJS",
  "year":1989},
  {"make": "Dodge",
  "model":"Viper",
  "year":1991},
  {"make": "BMW",
  "model":"CSL",
  "year":1972},
  {"make": "Lamborghini",
  "model":"Miura",
  "year":1966},
  {"make": "Land Rover",
  "model":"Land Rover",
  "year":1948},
  {"make": "Volkswagen",
  "model":"Beetle",
  "year":1938},
  {"make": "Ford",
  "model":"Model T",
  "year":1908},


];

select.addEventListener("change", setWeather,false);

function setWeather() {
  const choice = select.value;
  let era
  //This section switched between the predetermined eras for display
  switch (choice) {
    case 'All':
      era = "all";
      low_range = 0;
      high_range = 20000;
      // para.textContent = era;
      break;
    case '1900-1940':
      low_range = 1900;
      high_range = 1940;
      break;
    case '1941-1960':
      low_range = 1941;
      high_range = 1960;
      break;
    case '1961-1970':
      low_range = 1961;
      high_range = 1970;
      break;
    case '1971-1980':
      low_range = 1971;
      high_range = 1980;
      break;
    case '1981-2000':
      low_range = 1981;
      high_range = 2000;
      break;
  };

  output = document.getElementById('carReadout');
  //This part sorts through an filters based on year of the car.  Then loops the information 
  //to a variable to "print" out on the HTML side.
    let car = cars.filter(car=> car.year>=low_range && car.year <= high_range);
    console.log(car);
    let cLen = car.length;
      console.log(cLen);
  let text = "<ol>";
  for (let i = 0; i < cLen; i++) {
      specific_car = car[i];
    text += "<li>" + specific_car.year+" "+specific_car.make +" "+specific_car.model+"</li>";
  }
  text += "</ol>";

  console.log(text);
  output.innerHTML = text;
  };
