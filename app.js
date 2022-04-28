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

function clearGrid() {
    let lastGridElem = gridContainer.lastElementChild;
    while (lastGridElem) {
        gridContainer.removeChild(lastGridElem);
        lastGridElem = gridContainer.lastElementChild;
    }
}
clear.addEventListener('click', (e) => {
    clearGrid();
    defaultGrid();
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

/* create grid and append to the grid container: What do we need to create a grid? 
1.) Since this is a square, we have to have the number of columns which is determined by the gridSize value.
2.)  */

function defaultGrid() {
    let colRows = repeatString('1fr ', 10);
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <=9; j++) {
            let grid = document.createElement('div');
            gridContainer.append(grid);
            grid.style.border = '1px solid black';
            gridContainer.style.gridTemplateColumns = `${colRows}`;
            gridContainer.style.gridTemplateRows = `${colRows}`;
        }
    }
}

function createGrid() {
    clearGrid();
    defaultGrid();
    gridSize.addEventListener("change", function(e) {
        let value = e.target.value;
        console.log(value);
        let colRow = repeatString('1fr ', value);
        // create the columns
        for (let i = 0; i <= value; i++) {
            // create the rows
            for (let j = 0; j <= value; j++) {
                let grid = document.createElement('div');
                gridContainer.appendChild(grid);
                grid.style.border = '1px solid black';
                gridContainer.style.gridTemplateColumns = `${colRow}`;
                gridContainer.style.gridTemplateRows = `${colRow}`;
            }
        }
    });
    
}

// grid take 2

/* function createGrid (x) {
    for (let rows = 0; rows < x; rows++) {
        for (let col = 0; col < x; col++) {
            gridContainer.append(gridDiv);
            gridDiv.classList.add("grid");
        };
    };
    gridDiv.style.width = (10/x);
    gridDiv.style.height = (10/x);
}

*/
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
