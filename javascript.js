const grid = document.createElement("button");
grid.classList.add("grid");
document.body.appendChild(grid);
grid.textContent = "Grid Size";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.style.width = `${800/16}px`;
    square.style.height = `${800/16}px`;
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "blue";
    })
}

grid.addEventListener("click", () => {
    let gridSize = -1;

    while (gridSize > 100 || gridSize < 0 || Number.isInteger(gridSize) == false){
        gridSize = Number(prompt("Grid Size: "));
    };

    container.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);

            square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'blue';
        })
        square.style.width = `${800 / (gridSize)}px`;
        square.style.height = `${800 / (gridSize)}px`;
    };
});