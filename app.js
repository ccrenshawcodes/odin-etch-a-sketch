const container = document.querySelector('#container');



function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `sq${i}`);
        square.style.cssText = 'background-color: blue'; 
        square.textContent = `hello world ${i}`;

        container.appendChild(square);
    }
}

makeGrid(16);