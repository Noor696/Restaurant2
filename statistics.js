'use strict';
let count = 1000;

const totalfood = [];
function Food(foodId, foodName, foodType, foodPrice) {
    this.foodId = count++;
    this.foodName = foodName;
    this.foodType = foodType;
    this.foodPrice = foodPrice;
  
    totalfood.push(this);
  }

  Food.prototype.render = function () {

  let table = document.getElementById("foodTableId");

  let row = document.createElement("tr");
  table.appendChild(row);

  let id = document.createElement("td");
  id.textContent = this.foodId;

  let name = document.createElement("td");
  name.textContent = this.foodName;

  let type = document.createElement("td");
  type.textContent = this.foodType;

  let price = document.createElement("td");
  price.textContent = this.foodPrice;

  row.append(id, name, type, price);
}

function saveData(data) {
    let stringObject = JSON.stringify(data);
    localStorage.setItem("foods", stringObject);
  }
  
  function getData() {
    let retarveData = localStorage.getItem("foods"); 
    let arrData = JSON.parse(retarveData); 
  
    if (arrData !== null) {
      for (let i = 0; i < arrData.length; i++) {
        new Food(
          arrData[i].foodId,
          arrData[i].foodName,
          arrData[i].foodType,
          arrData[i].foodPrice
        );
        totalfood[i].render();
      }
    }
  }
  getData();