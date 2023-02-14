const container = document.querySelector('#container');
const msg = document.querySelector('p');

//darken a div when the mouse passes over it
function drawOnHover() {
    const divs = document.querySelectorAll('.square');

    divs.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.cssText = 'background-color: black;';
        });
    });
}

//Delete any existing grid items
//create a new grid
//activate the draw on hover function
function makeGrid(num) {

    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    } 

    let size = num * num;
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `sq${i}`); 

        container.appendChild(square);
    }
    container.style.cssText = `grid-template-rows: repeat(${num}, 1fr)`;
    container.style.cssText = `grid-template-columns: repeat(${num}, 1fr)`;
    
    drawOnHover();
}

makeGrid(16);

//prompt user for side length.
//make a new grid if they enter < 100. 
function newGrid() {
    let userInput = prompt('Enter a number to represent the number of pixels on one side of the grid.\
    Must be less than 100. Default: 16');
    if (Number(userInput) < 100) {
        makeGrid(Number(userInput));
        msg.style.cssText = 'background-color: white';
        msg.textContent = '';
    } else {
        msg.textContent = 'please enter a number less than 100';
        msg.style.cssText = 'background-color: red';
    }
    
}

//button listener for generating another grid 
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    newGrid();
})

