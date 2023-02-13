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

makeGrid(50);

/*function createGridOnClick() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        let num = prompt('Enter a square number to create a grid to size')
        makeGrid(Number(num));
    })
}

createGridOnClick();*/

/*function drawOnHover() {
    const divs = document.querySelectorAll('.square');

    divs.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'black';
            console.log(item);
        });
    });
}

drawOnHover();*/