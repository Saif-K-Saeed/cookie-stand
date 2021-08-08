'use strict';


let container = document.getElementById('location');

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];



let seattle  = {

  location: 'Seattle',
  min:23,
  max:65,
  average: 6.3,
  avgOfCookies :[],
  totel:0,

  randomNumber  : function(min,max) {

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },

  calculatAvgOfCookies: function(){
    for (let i = 0; i< hours.length;i++){
      this.avgOfCookies.push(this.randomNumber(this.min,this.max)*this.average);
      this.totel+= this.avgOfCookies[i];
    }
    console.log(this.totel);
  },
  render :function(){
    console.log(this.avgOfCookies);
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Sales Data';
    let pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = ` Location (${this.location}) `;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${parseInt(this.avgOfCookies[i])}  cookies`;
    }
    let li1El = document.createElement('li');
    ulEl.appendChild(li1El);
    li1El.textContent=`Totel : ${parseInt(this.totel)}`;
  },

};
seattle.calculatAvgOfCookies();
seattle.render();

let tokyo   = {

  location: 'Tokyo',
  min:3,
  max:24,
  average: 1.2,
  avgOfCookies :[],
  totel:0,

  randomNumber  : function(min,max) {

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  },
  calculatAvgOfCookies: function(){
    for (let i = 0; i< hours.length;i++){
      this.avgOfCookies.push(this.randomNumber(this.min,this.max)*this.average);
      this.totel+= this.avgOfCookies[i];
    }
    console.log(this.totel);
  },
  render :function(){
    console.log(this.avgOfCookies);
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Sales Data';
    let pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = ` Location (${this.location}) `;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${parseInt(this.avgOfCookies[i])}  cookies`;
    }
    let li1El = document.createElement('li');
    ulEl.appendChild(li1El);
    li1El.textContent=`Totel : ${parseInt(this.totel)}`;
  },

};
tokyo .calculatAvgOfCookies();
tokyo .render();

let dubai   = {

  location: 'Dubai',
  min:11,
  max:38,
  average:3.7,
  avgOfCookies :[],
  totel:0,

  randomNumber  : function(min,max) {

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  },
  calculatAvgOfCookies: function(){
    for (let i = 0; i< hours.length;i++){
      this.avgOfCookies.push(this.randomNumber(this.min,this.max)*this.average);
      this.totel+= this.avgOfCookies[i];
    }
    console.log(this.totel);
  },
  render :function(){
    console.log(this.avgOfCookies);
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Sales Data';
    let pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = ` Location (${this.location}) `;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${parseInt(this.avgOfCookies[i])} cookies`;
    }
    let li1El = document.createElement('li');
    ulEl.appendChild(li1El);
    li1El.textContent=`Totel : ${parseInt(this.totel)}`;
  },

};
dubai.calculatAvgOfCookies();
dubai.render();

let paris   = {

  location: 'Paris',
  min:20,
  max:38,
  average: 2.3,
  avgOfCookies :[],
  totel:0,

  randomNumber  : function(min,max) {

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  },
  calculatAvgOfCookies: function(){
    for (let i = 0; i< hours.length;i++){
      this.avgOfCookies.push(this.randomNumber(this.min,this.max)*this.average);
      this.totel+= this.avgOfCookies[i];
    }
    console.log(this.totel);
  },
  render :function(){
    console.log(this.avgOfCookies);
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Sales Data';
    let pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = ` Location (${this.location}) `;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${parseInt(this.avgOfCookies[i])} cookies`;
    }
    let li1El = document.createElement('li');
    ulEl.appendChild(li1El);
    li1El.textContent=`Totel : ${parseInt(this.totel)}`;
  },

};
paris.calculatAvgOfCookies();
paris.render();


let lima   = {

  location: 'Lima',
  min:2,
  max:16,
  average: 4.6,
  avgOfCookies :[],
  totel:0,

  randomNumber  : function(min,max) {

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  },
  calculatAvgOfCookies: function(){
    for (let i = 0; i< hours.length;i++){
      this.avgOfCookies.push(this.randomNumber(this.min,this.max)*this.average);
      this.totel+= this.avgOfCookies[i];
    }
    console.log(this.totel);
  },
  render :function(){
    console.log(this.avgOfCookies);
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Sales Data';
    let pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = ` Location (${this.location}) `;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:  ${parseInt(this.avgOfCookies[i])} cookies`;
    }
    let li1El = document.createElement('li');
    ulEl.appendChild(li1El);
    li1El.textContent=`Totel :${parseInt(this.totel)}`;
  },

};
lima.calculatAvgOfCookies();
lima.render();



