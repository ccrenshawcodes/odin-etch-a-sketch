const container = document.querySelector('#container');

function makeGrid(num) {
    let size = num * num;
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `sq${i}`); 

        container.appendChild(square);
    }
    container.style.cssText = `grid-template-rows: repeat(${num}, 1fr)`;
    container.style.cssText = `grid-template-columns: repeat(${num}, 1fr)`;
    
}

makeGrid(16);

function drawOnHover() {
    const divs = document.querySelectorAll('.square');

    divs.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.cssText = 'background-color: black;';
        });
    });
}

drawOnHover();