const container = document.querySelector('#container');

const square = document.createElement('div');
square.style.cssText = 'color: white; background-color: blue'; 
square.textContent = 'hello world';

function makeGrid() {
    container.appendChild(square);
}

makeGrid();