'use strict';

console.log('It is alive and running');

let dataURL = '../data/js/text.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('Data is recieved.');

req.onload = () => {
    const data = req.response;

    const elementH1 = document.createElement('h1');
    const elementP = document.createElement('p');

    elementH1.textContent = data.headline;
    elementP.textContent = data.intro;

    document.getElementById('Text').appendChild(elementH1);
    document.getElementById('Text').appendChild(elementP);

};
