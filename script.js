let containerDiv = document.createElement('div');
containerDiv.classList.add('container');
// document.body.appendChild(containerDiv)

let cols = 16;
let rows = 16;

for (let i = 0; i < cols; i++) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('col');
    for (let j=0; j < rows; j++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.textContent = i + '-' +j; // set text
        colDiv.appendChild(rowDiv);
    }
    containerDiv.appendChild(colDiv);
}

document.body.appendChild(containerDiv);

let gridList = document.querySelectorAll(".row");

gridList.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'red';
    });
    // grid.addEventListener('mouseout', () => {
    //     grid.style.backgroundColor = 'aqua';
    // });
});