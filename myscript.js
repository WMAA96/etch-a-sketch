const gridContainer = document.getElementById("grid-container");

function createRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement("div");
        
        gridContainer.appendChild(grid).className = "grid";

    }
}

createRows (32, 32);