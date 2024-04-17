/****************** YOUR NAME: Aidan Sawatzky ******************/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// Declare variables modelName and duration with initial values.
var modelName = 'XYZ';
var duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// Initialize the recalculate function and calculate the new total cost based on the modelName and duration values.
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let newTotalCost;

    if (modelName === "XYZ") {
        newTotalCost = duration * 100;
    } else if (modelName === "CPRG") {
        newTotalCost = duration * 213;
    } else {
        newTotalCost = 0;
    }

    costLabel.innerHTML = newTotalCost;
}

/****************** model button logic ******************/
/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel);
var modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

// This changeModel function switches between models, updates the displayed model name, and recalculates the total cost.
function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost.
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/


var durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);

function changeDuration() {
    let newDuration = prompt("Enter the new duration:");
    let durationText = document.getElementById("duration-text");
    durationText.innerHTML = newDuration;
    duration = newDuration;
    recalculate();
}
