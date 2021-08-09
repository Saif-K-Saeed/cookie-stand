'use strict';



let container = document.getElementById('container');

let tableEl = document.createElement('table');
container.appendChild(tableEl);




let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let stores = [];

function Location(location, minCustomer, maxCustomer, avgCookies) {

  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  stores.push(this);
  this.randCustomer = [];
  this.avgCookiesPerH = [];
  this.total = 0;
}

Location.prototype.calcRandomCustPerH = function (min, max) {
  min;
  max;
  for (let i = 0; i < hours.length; i++) {
    min = Math.ceil(this.minCustomer);
    max = Math.floor(this.maxCustomer);
    let randCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.randCustomer.push(randCust);
  }
};

Location.prototype.calcAvgCookiesPerH = function () {
  for (let i = 0; i < hours.length; i++) {
    this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
    this.total += this.avgCookiesPerH[i];
  }
};
Location.prototype.render = function () {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.location;
  for (let i = 0; i < hours.length; i++) {

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.avgCookiesPerH[i];
  }

  let tdEl4 = document.createElement('td');
  trEl.appendChild(tdEl4);
  tdEl4.textContent = this.total;
};

function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Location';
  for (let i = 0; i < hours.length; i++) {
    let thEl01 = document.createElement('th');
    trEl.appendChild(thEl01);
    thEl01.textContent = `${hours[i]}`;
  }
  let thEl02 = document.createElement('th');
  trEl.appendChild(thEl02);
  thEl02.textContent = 'Daily Location Total';
}

function createTableFooter() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = 'Totals';

  let totalOfTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    for (let j = 0; j < stores.length; j++) {
      total += stores[j].avgCookiesPerH[i];

    }
    totalOfTotal += total;
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = total;

  }
  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = `= ${totalOfTotal}`;

}

createTableHeader();

let seattle = new Location('Seattle', 23, 65, 6.3);

seattle.calcRandomCustPerH();
seattle.calcAvgCookiesPerH();
seattle.render();

let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.calcRandomCustPerH();
tokyo.calcAvgCookiesPerH();
tokyo.render();

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.calcRandomCustPerH();
dubai.calcAvgCookiesPerH();
dubai.render();

let paris = new Location('Paris', 20, 38, 2.3);
paris.calcRandomCustPerH();
paris.calcAvgCookiesPerH();
paris.render();

let lima = new Location('Lima', 11, 38, 3.7);
lima.calcRandomCustPerH();
lima.calcAvgCookiesPerH();
lima.render();

createTableFooter();
