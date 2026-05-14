const title = document.createElement("header");
title.classList.add("title");
document.body.appendChild(title);
title.textContent = 'ETCH - A - SKETCH';

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const menu = document.querySelector(".menu");
wrapper.appendChild(menu);

const grid = document.createElement("button");
grid.classList.add("grid");
menu.appendChild(grid);
grid.textContent = "Grid Size";

const erase = document.createElement("button");
erase.classList.add("erase");
menu.appendChild(erase);
erase.textContent = "Erase";

const rainbow = document.createElement("button");
rainbow.classList.add("rainbow");
menu.appendChild(rainbow);
rainbow.textContent = "Rainbow";

const chooseColor = document.createElement("input");
chooseColor.type = "color";
menu.appendChild(chooseColor);

const container = document.createElement("div");
container.classList.add("container");
wrapper.appendChild(container);

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

let color = '#f8729f';
chooseColor.addEventListener("input", (e) => {
    color = e.target.value;
    colorful = false;
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
                square.style.backgroundColor = color;
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