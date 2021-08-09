'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');


let seattle = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  randCustomer: [],
  avgCookiesPerH: [],
  total: 0,
  calcRandomCustPerH: function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randCustomer.push(randCust);
    }
  },
  calcAvgCookiesPerH: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
      this.total += this.avgCookiesPerH[i];
    }
  },
  render: function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${this.avgCookiesPerH[i]}  cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total =  ${this.total} cookies`;
  }
};

seattle.calcRandomCustPerH();
seattle.calcAvgCookiesPerH();
seattle.render();

let tokyo = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  randCustomer: [],
  avgCookiesPerH: [],
  total: 0,
  calcRandomCustPerH: function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randCustomer.push(randCust);
    }
  },
  calcAvgCookiesPerH: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);

      this.total += this.avgCookiesPerH[i];
    }
  },
  render: function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${this.avgCookiesPerH[i]}  cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total =  ${this.total} cookies`;
  }
};

tokyo.calcRandomCustPerH();
tokyo.calcAvgCookiesPerH();
tokyo.render();


let dubai = {
  location: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  randCustomer: [],
  avgCookiesPerH: [],
  total: 0,
  calcRandomCustPerH: function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randCustomer.push(randCust);
    }
  },
  calcAvgCookiesPerH: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);

      this.total += this.avgCookiesPerH[i];
    }
  },
  render: function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${this.avgCookiesPerH[i]}  cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total =  ${this.total} cookies`;
  }
};

dubai.calcRandomCustPerH();
dubai.calcAvgCookiesPerH();
dubai.render();



let paris= {
  location: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  randCustomer: [],
  avgCookiesPerH: [],
  total: 0,
  calcRandomCustPerH: function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randCustomer.push(randCust);
    }
  },
  calcAvgCookiesPerH: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);

      this.total += this.avgCookiesPerH[i];
    }
  },
  render: function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${this.avgCookiesPerH[i]}  cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total =  ${this.total} cookies`;
  }
};

paris.calcRandomCustPerH();
paris.calcAvgCookiesPerH();
paris.render();


let lima = {
  location: 'Lima ',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  randCustomer: [],
  avgCookiesPerH: [],
  total: 0,
  calcRandomCustPerH: function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randCustomer.push(randCust);
    }
  },
  calcAvgCookiesPerH: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);

      this.total += this.avgCookiesPerH[i];
    }
  },
  render: function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${this.avgCookiesPerH[i]}  cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total =  ${this.total} cookies`;
  }
};

lima .calcRandomCustPerH();
lima .calcAvgCookiesPerH();
lima .render();



