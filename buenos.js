window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
let stateOfTime = document.getElementById("stateOfTime");
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  // hh = hh < 10 ? "0" + hh : hh;
  // mm = mm < 10 ? "0" + mm : mm;

  let time = hh + ":" + mm;

  if (time > "06:00" && time < "12:00") {
    stateOfTime.textContent = time + ". " + " GOOD MORNING!";
  } else if (time > "12:00" && time < "18:00") {
    stateOfTime.textContent = time + ". " + " GOOD DAY!";
  } else if (time > "18:00" && time < "23:59") {
    stateOfTime.textContent = time + ". " + " GOOD EVENING!";
  } else {
    stateOfTime.textContent = time + ". " + " Hello!";
  }
}
currentTime();
