const gridContainer = document.getElementById("grid-container");

function createRows(size) {
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement("div");
        grid.addEventListener("mouseover", changeColour);
        gridContainer.appendChild(grid).className = "grid";

    }
}

function changeColour(e) {
    this.style.backgroundColor = "red";
}


function reset() {
    let newSize = window.prompt("Enter new size");
    newSize = parseInt(newSize);

    if(newSize >= 101 || Number.isNaN(newSize) || newSize <= 0) {
        alert("Please enter a number (Max: 100)");
        newSize = 16;
    }


    let grid = document.getElementById("grid-container").childNodes;
    for (let i = grid.length - 1; i >= 0; i --) {
        grid[i].remove();
    }

    createRows(newSize);
    
    
}

createRows(16);