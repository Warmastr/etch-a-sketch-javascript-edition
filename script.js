// set up the html structure for the design
const outerContainer = document.querySelector('.containerOuter');
const innerContainer = document.querySelector('.containerInner');
const controls = document.querySelector('.controls');
const heading = document.querySelector('h1');
const brushColor = document.querySelector('#brush');
const backgroundColor = document.querySelector('#bg');
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
let rgb = document.querySelector('.rgb');
let color;
let count = 0;

const userPick = function draw(target){
    target.style.backgroundColor = brushColor.value;
}
let drawMode = userPick;

const rainbow = function draw(target){
    target.style.backgroundColor = getRandomColor();
}

rgb.addEventListener('click', () => {
    drawMode = rainbow;
})

function getRandomColor() {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    let color = '#';
    color += hexColor;
    return color;
}

backgroundColor.addEventListener('change', () => {
    gridContainer.style.backgroundColor = backgroundColor.value;
})

function draw() {
    let cell = gridContainer.children;
    let mouseIsDown = false;
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', () => {
            drawMode(cell[i]);
        });
        cell[i].addEventListener('mousedown', function(){mouseIsDown = true});
        cell[i].addEventListener('mouseup', function(){mouseIsDown = false});
        cell[i].addEventListener('mousemove', function() {
            if (mouseIsDown) {
                drawMode(cell[i]);
            }
        });
    }
}

function clearGrid() {
    count = 0;
    let lastGridElem = gridContainer.lastElementChild;
    gridContainer.style.backgroundColor = '#737874';
    backgroundColor.value = '#737874';
    while (lastGridElem) {
        gridContainer.removeChild(lastGridElem);
        lastGridElem = gridContainer.lastElementChild;
    }
}

clear.addEventListener('click', () => {
    clearGrid();
    defaultGrid();
    draw();
});
const repeatString = function(string, num) {
    const err = 'ERROR';
    let result = '';
    if (num < 0) result = err;
    for (let i = 0; i < num; i++) {
        result += string;
        }
    return result
};

gridToggle.addEventListener('change', () => {
    let children = gridContainer.children;
    if (gridToggle.checked) {
        for (let i = 0; i < children.length; i++) {
            let grid = children[i];
            grid.classList.remove('noGrid');
            grid.classList.add('grid');
        }
    } else if (!gridToggle.checked) {
        for (let i = 0; i < children.length; i++) {
            let grid = children[i];
            grid.classList.remove('grid');
            grid.classList.add('noGrid');
        }
    }
});

function defaultGrid() {
    gridSize.value = '10';
    size.textContent = 'Grid Size: 10x10';
    // create a 10x10 grid
    let colRows = repeatString('1fr ', 10);
    // create columns
    for (let i = 1; i <= 10; i++) {
        // create rows
        for (let j = 1; j <=10; j++) {
            let grid = document.createElement('div');
            gridContainer.append(grid);
            grid.className = 'grid';
            gridContainer.style.gridTemplateColumns = `${colRows}`;
            gridContainer.style.gridTemplateRows = `${colRows}`;
        }
    }
}

function createGrid() {
    
    // set a default size of 10x10
    defaultGrid();
    draw();
    // wait for an input change to the value to happen
    gridSize.addEventListener("change", function(e) {
        // delete the current grid
        clearGrid();
        // selects the size of the columns and rows based on the range slider value
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
                document.getElementById('gridToggle').checked = true;
                let grid = document.createElement('div');
                gridContainer.appendChild(grid);
                grid.className = "grid";
                gridContainer.style.gridTemplateColumns = `${colRow}`;
                gridContainer.style.gridTemplateRows = `${colRow}`;
            }
        }
        draw();
    });
}
createGrid();