const grid = document.createElement("button");
grid.classList.add("grid");
document.body.appendChild(grid);
grid.textContent = "Grid Size";

const startOver = document.createElement("button");
startOver.classList.add("startOver");
document.body.appendChild(startOver);
startOver.textContent = "Start Over";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let gridSize = -1;
grid.addEventListener("click", () => {
    while (gridSize > 100 || gridSize < 0 || Number.isInteger(gridSize) == false){
        gridSize = Number(prompt("Grid Size: "));
    };

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