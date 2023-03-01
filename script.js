let containerDiv = document.createElement('div');
containerDiv.classList.add('container');
// document.body.appendChild(containerDiv)

const custBtn = document.getElementById("add-btn");
let size = 16;
custBtn.onclick = () => {
    size = parseInt(prompt("Specify grid density"));
    if (size > 100) {
        alert("Please specify a number less than or equal 100 only")
    } else {
        reset_grid();
        make_grid(size);
    }
}

make_grid(size)
// let cols = nGrid;
// let rows = nGrid;
// console.log(nGrid);

function make_grid(size) {
    for (let i = 0; i < size; i++) {
        let colDiv = document.createElement('div');
        colDiv.classList.add('col');
        for (let j=0; j < size; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            //rowDiv.textContent = i + '-' +j; // set text
            colDiv.appendChild(rowDiv);
        }
        containerDiv.appendChild(colDiv);
    }   
    document.body.appendChild(containerDiv);
    apply_brush()
}

function reset_grid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }
}

function apply_brush() {
   let gridList = document.querySelectorAll(".row");
    gridList.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'red';
        });
        // grid.addEventListener('mouseout', () => {
        //     grid.style.backgroundColor = 'aqua';
        // });
    });
}
