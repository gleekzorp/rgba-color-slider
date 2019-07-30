const redRange = document.getElementById('red-range');
const greenRange = document.getElementById('green-range');
const blueRange = document.getElementById('blue-range');
const alphaRange = document.getElementById('alpha-range');
const redValueOutput = document.getElementById('red-value-output');
const greenValueOutput = document.getElementById('green-value-output');
const blueValueOutput = document.getElementById('blue-value-output');
const alphaValueOutput = document.getElementById('alpha-value-output');
const colorWrapper = document.getElementById('color-wrapper');
const rgbaColor = document.getElementById('rgba-color');
let red = redRange.value
let green = greenRange.value
let blue = blueRange.value
let alpha = alphaRange.value

redValueOutput.innerHTML = redRange.value
blueValueOutput.innerHTML = blueRange.value
greenValueOutput.innerHTML = greenRange.value
alphaValueOutput.innerHTML = '1.0'
colorWrapper.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 1)`
rgbaColor.innerHTML = `rgb(${red}, ${green}, ${blue})`

redRange.oninput = function() {
  redValueOutput.innerHTML = this.value;
  red = this.value;
  changeBackgroundColor()
}

greenRange.oninput = function() {
  greenValueOutput.innerHTML = this.value;
  green = this.value;
  changeBackgroundColor()
}

blueRange.oninput = function() {
  blueValueOutput.innerHTML = this.value;
  blue = this.value;
  changeBackgroundColor()
}

alphaRange.oninput = function() {
  if (this.value === '10') {
    alphaValueOutput.innerHTML = `1.0`;
    alpha = this.value;
    changeBackgroundColor()
  } else {
    alphaValueOutput.innerHTML = `0.${this.value}`;
    alpha = this.value;
    changeBackgroundColor()
  }
}

function changeBackgroundColor() {
  if (alpha === '10') {
    colorWrapper.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 1)`
    renderRgbaColor()
  } else {
    colorWrapper.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.${alpha})`
    renderRgbaColor()
  }
}

function renderRgbaColor() {
  if (alpha === '10') {
    rgbaColor.innerHTML = `rgb(${red}, ${green}, ${blue})`
  } else {
    rgbaColor.innerHTML = `rgba(${red}, ${green}, ${blue}, 0.${alpha})`
  }
}