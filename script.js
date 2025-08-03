const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

const btnContainer = document.createElement("div");
btnContainer.classList.add("buttons");

const body = document.querySelector("body");
body.appendChild(gridContainer);
body.appendChild(btnContainer);

const resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";
resetBtn.classList.add("button");

const newGrid = document.createElement("button");
newGrid.textContent = "NEW";
newGrid.classList.add("button");

btnContainer.appendChild(resetBtn);
btnContainer.appendChild(newGrid);

createGrid();






function createPrompt(){
    let input = prompt("Please Enter Grid Dimension(eg: 16*16, 16 by 16)\nNOTE:- max size is 100*100", "5*5");
    return input;
}


function createGrid(){

    const input = createPrompt();

    let newInput = input.toLowerCase().replace(" ", "");
    let dimensionArray;

    if(newInput.includes("*")){
        dimensionArray = newInput.split("*");
    }else if(newInput.includes("by")){
        dimensionArray = newInput.split("by");
    }else{
        alert("Please Enter a valid input format(eg. 10*10, 10by10)");
    }
    
    gridContainer.innerHTML= "";

    const itemSize = 600 / dimensionArray[0];
    let gridDimension = dimensionArray[0] * dimensionArray[1];

    for(let i=0; i<gridDimension;i++){
        const item = document.createElement("div");
        item.classList.add('grid-item');
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;
        gridContainer.appendChild(item);
    }


    

    
}

