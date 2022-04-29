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
const gridStyle = document.querySelector('.gridStyle');
const gridDiv = document.createElement('div');
const size = document.querySelector('#size');
let grid = document.createElement('div');

function clearGrid() {
    let lastGridElem = gridContainer.lastElementChild;
    while (lastGridElem) {
        gridContainer.removeChild(lastGridElem);
        lastGridElem = gridContainer.lastElementChild;

    }
}

gridToggle.addEventListener('change', (e) => {
    
});

clear.addEventListener('click', (e) => {
    clearGrid();
});
const repeatString = function(string, num) {
    const err = 'ERROR';
    let result = '';
    if (num < 0) result = 'ERROR';
    for (let i = 0; i < num; i++) {
        result += string;
        }
    return result
};
function defaultGrid() {
    // create a 10x10 grid
    let colRows = repeatString('1fr ', 10);
    // create columns
    for (let i = 1; i <= 10; i++) {
        // create rows
        for (let j = 1; j <=10; j++) {
            grid = document.createElement('div');
            gridContainer.append(grid);
            grid.style.border = '1px solid black';
            gridContainer.style.gridTemplateColumns = `${colRows}`;
            gridContainer.style.gridTemplateRows = `${colRows}`;
        }
    }
    // add reset to input range slider to default 10x10.
}

function createGrid() {
    // set a default size of 10x10
    defaultGrid();
    // wait for an input change to the value to happen
    gridSize.addEventListener("change", function(e) {
        // delete the current grid
        clearGrid();
        // establish the width and height value for the grid since it will be square
        let value = e.target.value;
        // update the label to inform the user which size grid was selected
        size.textContent = `Grid Size: ${String(value) + 'x' + String(value)}`
        size.style.color = "maroon";
        // use flex size to automatically proportion the grid cells based on the container size
        let colRow = repeatString('1fr ', value);
        // create the columns
        for (let i = 1; i <= value; i++) {
            // create the rows
            for (let j = 1; j <= value; j++) {
                grid = document.createElement('div');
                gridContainer.appendChild(grid);
                grid.style.border = '1px solid black';
                gridContainer.style.gridTemplateColumns = `${colRow}`;
                gridContainer.style.gridTemplateRows = `${colRow}`;
            }
        }
    });
}
createGrid();