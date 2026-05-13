const grid = document.createElement("button");
grid.classList.add("grid");
document.body.appendChild(grid);
grid.textContent = "Grid Size";

const erase = document.createElement("button");
erase.classList.add("erase");
document.body.appendChild(erase);
erase.textContent = "Erase";

const rainbow = document.createElement("button");
rainbow.classList.add("rainbow");
document.body.appendChild(rainbow);
rainbow.textContent = "Rainbow";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let colorful = false;

createGrid(16);

grid.addEventListener("click", () => {
    let gridSize = -1;

    while (gridSize > 100 || gridSize <= 0 || Number.isInteger(gridSize) == false){
        gridSize = Number(prompt("Grid Size (1-100): "));
    };

    createGrid(gridSize);

    erase.addEventListener("click", () => {
        createGrid(gridSize);
    });
});

erase.addEventListener("click", () => {
    createGrid(16);
});

rainbow.addEventListener("click", () => {
    colorful = true;
});

function createGrid(size){
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener('mouseenter', () => {
            if (colorful == true){
                square.style.backgroundColor = randomColor();
            }
            else{
                square.style.backgroundColor = 'blue';
            }
        });
        square.style.width = `${800 / size}px`;
        square.style.height = `${800 / size}px`;
    };
};

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};