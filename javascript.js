const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'blue';
    })
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'white';
    })
};