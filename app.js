'use strict';
let form = document.getElementById('form');
let table = document.getElementById('table');
let submit = document.getElementById('submit');
let userinput = localStorage.getItem("form");

var val = 0;

// constructor
const allfood = [];
function Food(val,nameVal, typeVal, priceVal) {
    this.FoodID = val;
    this.FoodName = nameVal;
    this.Type = typeVal;
    this.Price = priceVal;
    allfood.push(this);

    // this.printFoodInfo();
    // this.saveData(); 
}

Food.FoodID

let properties= JSON.parse(userinput);
function checknull(){
 if (properties!= null){
    allfood = properties;
 }else {
    allfood = [];
 }
}
checknull();

form.addEventListener('submit', handleSubmit);

  function handleSubmit(event){
   event.preventDefault();
   let nameVal = event.target.foodname.value;
   let typeVal = event.target.foodtypes.value;
   let priceVal = event.target.price.value;
   let IDVal = uniqueID();
   const newFood = new Food(val, nameVal, typeVal, priceVal);

   console.log(event);
}


function uniqueID(){
    val=Math.floor(Math.random() * (1100) + 1000);
    return val;
}

function saveData(data) {
    let stringObject = JSON.stringify(data);
    localStorage.setItem("foods", stringObject);
  }
saveData(allfood);

//   for (let j = 0; j <= allfood.length ; j++){
//     allfood[j].saveData;
//   }



Food.prototype.printFoodInfo = function(){
    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    let newId = document.createElement('td');
    newId.textContent = this.FoodID;
    newRow.appendChild(newId);

    let newName = document.createElement('td');
    newName.textContent = this.FoodName;
    newRow.appendChild(newName);

    let newType = document.createElement('td');
    newType.textContent = this.Type;
    newRow.appendChild(newType);

    let newPrice = document.createElement('td');
    newPrice.textContent = this.Price;
    newRow.appendChild(newPrice);

    newRow.classList.add('row');
}



//