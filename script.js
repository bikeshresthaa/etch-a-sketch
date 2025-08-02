const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

const body = document.querySelector("body");
body.appendChild(gridContainer);

//function to create grid
function createGrid(input){
    let newInput = input.toLowerCase().replace(" ", "");
    let dimensionArray;

    if(newInput.includes("*")){
        dimensionArray = newInput.split("*");
    }else if(newInput.includes("by")){
        dimensionArray = newInput.split("by");
    }else{
        alert("Please Enter a valid input format(eg. 10*10, 10by10)");
    }
    
    let gridDimension = dimensionArray[0] * dimensionArray[1];

    for(i=0; i<gridDimension;i++){
        const item = document.createElement("div");
        item.classList.add('grid-item');
        item.textContent = `item ${i}`;
        gridContainer.appendChild(item);
    }
}

