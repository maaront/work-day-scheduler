var now = dayjs().format('dddd, MMMM D, YYYY h:mm A');
var todaysDateEl = document.getElementById("todays-date");   
var timeSlotEL = document.getElementById("time-slot");


// Get the hour-slot elements
let nineEl = document.getElementById("900");
let tenEl = document.getElementById("1000");
let twentyThreeEl = document.getElementById("2300")
 // Add 10 more due times here for each task


// Get the due times for each task
let nineDue = dayjs("9:00 AM", "h:mm A");
let tenDue = dayjs("10:00 AM", "h:mm A");
let twentyThreeDue = dayjs("11:00 PM", "h:mm A");
// Add 10 more due times here for each task

// Add an array with all the task elements
let timeSlots = [nineEl, tenEl, twentyThreeEl];
// Add 10 more task elements to the array here

 // Add an array with all the due times
 let dueTimes = [nineDue, tenDue, twentyThreeDue];
 // Add 10 more task elements to the array here

// Loop through the time slot elements
for (let i = 0; i < timeSlots.length; i++) {
    // Get the due time for the current task
    let dueTime = dueTimes[i]// Add the due time for the current task here

    // Check if the due time is in the past, present, or future
    if (dueTime.isBefore(now, "minute")) {
      timeSlots[i].classList.add("past");
    } else if (dueTime.isSame(now, "hour")) {
      timeSlots[i].classList.add("present");
    } else {
      timeSlots[i].classList.add("future");
    }
  }
  

// Create new function for populateDate
function populateDate() {
    // Add the value of the variable "now" to the todays date element
    todaysDateEl.innerHTML = now;
  }
// Run populateDate function
  populateDate();
