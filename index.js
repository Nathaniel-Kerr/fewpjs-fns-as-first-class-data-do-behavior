/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = parseInt(timeString);
  if (time < 12) return "Good Morning"
  else if (time > 17) return "Good Evening"
  else return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  let t = document.getElementById('greeting')
  t.innerHTML = msg
}
