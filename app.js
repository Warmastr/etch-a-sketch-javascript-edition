// set up the html structure for the design
const outerContainer = document.querySelector('.containerOuter');
const innerContainer = document.querySelector('.containerInner');
const controls = document.querySelector('.controls');
const heading = document.querySelector('h1');
const brushColor = document.querySelector('.colorBrush');
const backgroundColor = document.querySelector('.colorBg');
const shadeBtnContainer = document.querySelector('.btnContainer');
const darkBtn = document.querySelector('.darken');
const lightBtn = document.querySelector('.lighten');
const gridSize = document.querySelector('#gridSize');
const gridToggle = document.querySelector('#gridToggle');
const gridContainer = document.querySelector('.gridContainer');
const clear = document.querySelector('.clear');
let value = gridSize.value;
// get the value of the range slider in real time.
value = gridSize.addEventListener("change", function(e) {
    return console.log(e.target.value);
});




/* if range slider is set to 10, then we need 100 total squares that take up the entire space of gridContainer. if range slider value = 10 then gridContainer.grid-template-columns = 'repeat(gridSize, 1fr * 10)(some function to repeat a phrase...where have I seen this before?)

// This algorithm allows you to concatenate a string any number of times. Handles negative numbers.
const repeatString = function(string, num) {
    const err = 'ERROR';
    let result = '';
    if (num < 0) result = 'ERROR';
    for (let i = 0; i < num; i++) {
        result += string;
        }
    return result
}; */
