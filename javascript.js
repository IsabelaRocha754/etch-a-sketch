const grid = document.createElement("button");
grid.classList.add("grid");
document.body.appendChild(grid);
grid.textContent = "Grid Size";

const erase = document.createElement("button");
erase.classList.add("erase");
document.body.appendChild(erase);
erase.textContent = "Erase";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

createGrid(16);

grid.addEventListener("click", () => {
    let gridSize = -1;

    while (gridSize > 100 || gridSize < 0 || Number.isInteger(gridSize) == false){
        gridSize = Number(prompt("Grid Size: "));
    };

    createGrid(gridSize);

    erase.addEventListener("click", () => {
        createGrid(gridSize);
    })
});

erase.addEventListener("click", () => {
    createGrid(16);
})

function createGrid(size){
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'blue';
        });
        square.style.width = `${800 / size}px`;
        square.style.height = `${800 / size}px`;
    }
};