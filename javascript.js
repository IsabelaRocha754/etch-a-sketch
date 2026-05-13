const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.textContent = "grid";
};