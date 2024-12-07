/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const fullDay = 35;
const halfDay = 20;
const fullDayClick = document.getElementById("full");
const halfDayClick = document.getElementById("half");
const listOfDays = document.querySelectorAll("li");
const reset = document.getElementById("clear-button");

let numOfDays = 0;
let dailyRate = fullDay;
let totalCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

listOfDays.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.classList.contains("clicked")) {
            numOfDays = numOfDays - 1;
            button.classList.remove("clicked");
        } 
        else {
            numOfDays = numOfDays + 1;
            button.classList.add("clicked");
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

reset.addEventListener("click", function() {
    listOfDays.forEach(function(button) {
        button.classList.remove("clicked");
    });
    numOfDays = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayClick.addEventListener("click", function() {
    dailyRate = halfDay;
    halfDayClick.classList.add("clicked");
    fullDayClick.classList.remove("clicked");
    calcRate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayClick.addEventListener("click", function() {
    dailyRate = fullDay;
    fullDayClick.classList.add("clicked");
    halfDayClick.classList.remove("clicked");
    calcRate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calcRate() {
    const total = numOfDays * dailyRate;
    totalCost.innerHTML = total;
}

