
'use strict';


let hours  = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let allStores= [];


function Store(myLoc, myMin, myMax, myAvg, salesPH, dailyT) {

  this.location = myLoc;
  this.custMin = myMin;
  this.custMax = myMax;
  this.avgSalePerCust = myAvg;
  this.salesPerHour = salesPH;
  this.dailyTotal = dailyT;
  allStores.push(this);
  
}

Store.prototype.cookieSales = function (cMin, cMax) {

  for (let i = 0; i < hours.length; i++) {
    let randNum = Math.round(Math.random() * (cMax - cMin) + cMin);
    let dailySales = Math.round(this.avgSalePerCust * randNum);
    this.dailyTotal += dailySales;
    this.salesPerHour.push(dailySales);
  }
};


Store.buildTable = function () {

  if (document.getElementById('sales-page')) {
    Store.renderTableHeader();
    for (let i = 0; i < allStores.length; i++) {
      console.log('Rendering table for: ' + allStores[i].location);
      allStores[i].cookieSales(allStores[i].custMin, allStores[i].custMax);
      allStores[i].renderTableBody();
    }
    Store.renderTableFooter();
  }
};


Store.renderTableHeader = function () {

  let tHead = document.getElementById('tableSalesHeader');
  let hrEl = document.createElement('tr');
  tHead.appendChild(hrEl);
  let tdBlank = document.createElement('td');
  tdBlank.textContent = 'Location';
  hrEl.appendChild(tdBlank);
  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th');
    thEl.textContent = hours[i];
    hrEl.appendChild(thEl);
  }

  let tdSumTotal = document.createElement('td');
  tdSumTotal.textContent = 'Daily Totals';
  hrEl.appendChild(tdSumTotal);
};


Store.prototype.renderTableBody = function () {

  let tBody = document.getElementById('tableSalesBody');
  let trEl = document.createElement('tr');
  tBody.appendChild(trEl);
  let tdLoc = document.createElement('td');
  tdLoc.textContent = this.location;
  trEl.appendChild(tdLoc);
  for (let i = 0; i < hours.length; i++) {
    let tdHours = document.createElement('td');
    tdHours.textContent = this.salesPerHour[i];
    trEl.appendChild(tdHours);
  }

  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  trEl.appendChild(tdTotal);
};


Store.renderTableFooter = function () {

  let tFoot = document.getElementById('tableSalesFooter');
  let trEl = document.createElement('tr');
  tFoot.appendChild(trEl);
  let tdLoc = document.createElement('td');
  tdLoc.textContent = 'Totals';
  trEl.appendChild(tdLoc);
  for (let h = 0; h < hours.length; h++) {
    let hourlyTotal = 0;
    for (let i = 0; i < allStores.length; i++) {
      hourlyTotal += allStores[i].salesPerHour[h];
    }
    let tdDaily = document.createElement('td');
    tdDaily.textContent = hourlyTotal;
    trEl.appendChild(tdDaily);
  }

  let grandTotal = 0;
  for (let t = 0; t < allStores.length; t++) {
    grandTotal += allStores[t].dailyTotal;
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = grandTotal;
  trEl.appendChild(tdTotal);
};


Store.addStore = function (event) {

  event.preventDefault();
  let newLocation = event.target.storeLocation.value;
  let newCustMin = event.target.storeCustMin.value;
  let newCustMax = event.target.storeCustMax.value;
  let newAvgSalePerCust = event.target.storeAvgSalePerCust.value;


  new Store(newLocation, newCustMin, newCustMax, newAvgSalePerCust, [], 0);


  let clearTableHeader = document.getElementById('tableSalesHeader');
  let clearTableBody = document.getElementById('tableSalesBody');
  let clearTableFooter = document.getElementById('tableSalesFooter');
  clearTableHeader.textContent = '';
  clearTableBody.textContent = '';
  clearTableFooter.textContent = '';
  document.getElementById('formAddObject').reset();


  Store.buildTable();
};

new Store('Seattle', 23, 65, 6.3, [], 0);
new Store('Tokyo', 3, 24, 1.2, [], 0);
new Store('Dubai', 11, 38, 3.7, [], 0);
new Store('Paris', 20, 38, 2.3, [], 0);
new Store('Lima', 2, 16, 4.6, [], 0);

Store.buildTable();

let formNewStore = document.getElementById('formAddObject');
formNewStore.addEventListener('submit', Store.addStore);








