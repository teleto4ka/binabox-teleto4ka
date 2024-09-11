/* typing */

const textBox = document.getElementById('typeText');
const text = '\\Hello World!/';

let i = 0;

const typeText = () => {
  textBox.innerText = text.substring(0, i++);
  if (i <= text.length + 1) {
    setTimeout('typeText()', 300);
  } else {
    i = 0;
    typeText();
  }
}

/* error!!! */
const container = document.getElementById('container');
const template = document.getElementById('template');
const errorBtn = document.getElementById('error-btn');

const errorNum = 140;
let errorBoxes = [];

const err1 = errorNum / 7;
const err2 = (errorNum * 2) / 7;
const err3 = (errorNum * 3) / 7;
const err4 = (errorNum * 4) / 7;
const err5 = (errorNum * 5) / 7;
const err6 = (errorNum * 6) / 7;
const err7 = errorNum-5;

let j = 0;

for (let i = 0; i < errorNum; i++) {
  let errorBox = template.content.cloneNode(true);
  errorBoxes.push(errorBox);
}

const error = () => {

  errorBoxes[j]
  container.appendChild(errorBoxes[j]);

  let error = document.querySelectorAll('.error');

  if (j < err1) {
    error[j].style.top = -200 + j * 50 + 'px';
    error[j].style.left = 100 + j * 50 + 'px';
  } else if (j < err2) {
    error[j].style.top = -200 + (j - err1) * 50 + 'px';
    error[j].style.left = 550 + (j - err1) * 50 + 'px';
  } else if (j < err3) {
    error[j].style.top = -200 + (j - err2) * 50 + 'px';
    error[j].style.left = -300 + (j - err2) * 50 + 'px';
  } else if (j < err4) {
    error[j].style.top = -200 + (j - err3) * 50 + 'px';
    error[j].style.left = 900 + (j - err3) * 50 + 'px';
  } else if (j < err5) {
    error[j].style.top = -200 + (j - err4) * 50 + 'px';
    error[j].style.left = -750 + (j - err4) * 50 + 'px';
  } else if (j < err6) {
    error[j].style.top = -200 + (j - err5) * 50 + 'px';
    error[j].style.left = 300 + (j - err5) * 50 + 'px';
  } else if (j < err7) {
    error[j].style.top = -200 + (j - err6) * 50 + 'px';
    error[j].style.left = 0 + (j - err6) * 50 + 'px';
  } else {
    error[j].style.top = 0 + (j - err7) * 50 + 'px';
    error[j].style.left = 100 + (j - err7) * 50 + 'px';
  }

  j++;

  if (j < errorNum) {
    setTimeout('error()', 100);
  }
}

errorBtn.addEventListener('click', error);

window.addEventListener('load', typeText);
