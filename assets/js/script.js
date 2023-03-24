var now = dayjs().format('dddd, MMMM D, YYYY h:mm A');
var todaysDateEl = document.getElementById("todays-date");   

function populateDate() {
    todaysDateEl.innerHTML = now;
    console.log(now);
  }

  populateDate();
//   // Get the element by its ID
// let element = document.getElementById("myElement");

// // Set the innerHTML property to add text to the element
// element.innerHTML = "Hello, world!";