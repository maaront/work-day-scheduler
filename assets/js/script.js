var now = dayjs();
var todaysDateEl = document.getElementById("todays-date");   
var timeSlotEL = document.getElementById("time-slot");
var saveBtn = document.querySelector('.save');

// Create new function for populateDate
function populateDate() {
// Add the value of the variable "now" to the todays date element
    todaysDateEl.innerHTML = now.format('dddd, MMMM D, YYYY h:mm A');
  }
// Run populateDate function
  populateDate();

// Get the time-slot elements
let form800El = document.getElementById("form_800");
let form900El = document.getElementById("form_900");
let form2300El = document.getElementById("form_2300")
 // Add more due times here for each time slot

// Get the due times for each task
let eightDue = dayjs("8:00 AM", "h:mm A");
let nineDue = dayjs("10:00 AM", "h:mm A");
let twentyThreeDue = dayjs("11:00 PM", "h:mm A");
// Add more due times here for each time slot

// Add an array with all the time slot elements
let timeSlots = [form800El, form900El, form2300El];
// Add more time slot elements to the array here

 // Add an array with all the due times
 let dueTimes = [eightDue, nineDue, twentyThreeDue];
 // Add more due times elements to the array here

// Loop through the time slot elements
for (let i = 0; i < timeSlots.length; i++) {
    // Get the due time for the current task
    let dueTime = dueTimes[i]// Add the due time for the current task here
    // Check if the due time is in the past, present, or future
    if (dueTime.isBefore(now, "hour")) {
      timeSlots[i].classList.add("past");
    } else if (dueTime.isSame(now, "hour")) {
      timeSlots[i].classList.add("present");
    } else {
      timeSlots[i].classList.add("future");
    }
  }
  





 
  function saveInput(formId) {
    // Prevent page reload
    event.preventDefault();
    // Get the input element
    let inputEl = document.querySelector(`#${formId} input`);

    // Get the value of the input
    let inputValue = inputEl.value;

    // Save the value to localStorage with a unique key
    let key = `savedInput_${formId}`;
    localStorage.setItem(key, inputValue);
}

// Check if there's a saved input for each form and populate the input element
let forms = document.querySelectorAll('form');
forms.forEach(form => {
    let formId = form.getAttribute('id');
    let key = `savedInput_${formId}`;
    let savedInput = localStorage.getItem(key);
    if (savedInput) {
        let inputEl = form.querySelector('input');
        inputEl.value = savedInput;
    }
});


    // // Get the value of the input field with a class of "description"
    //     var inputEl = document.querySelector(".description").value;
    // // Set the value of the input field with a class of "description"
    //     document.querySelector(".description").value = inputEl;

    //     }

        