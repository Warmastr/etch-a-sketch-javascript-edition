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

function clearGrid() {
    clear.addEventListener('click', e => {
        e.target.createGrid();
    });
}
const repeatString = function(string, num) {
    const err = 'ERROR';
    let result = '';
    if (num < 0) result = 'ERROR';
    for (let i = 0; i < num; i++) {
        result += string;
        }
    return result
};

/* create grid and append to the grid container: What do we need to create a grid? 
1.) Since this is a square, we have to have the number of columns which is determined by the gridSize value.
2.)  */
function createGrid() {
    gridSize.addEventListener("change", function(e) {
        let value = e.target.value;
        console.log(value);
        let col = repeatString('1fr ', value);
        let row = repeatString('1fr', value);
        let grid = '';
        for (let i = 0; i < value; i++) {
            grid = document.createElement('div');
            gridContainer.append(grid);
            grid.style.border = '1px solid black';
            gridContainer.style.gridTemplateColumns = `${col}`;
            gridContainer.style.gridTemplateRows = `${col}`;
        }
    });
    return ;
}

createGrid();



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
