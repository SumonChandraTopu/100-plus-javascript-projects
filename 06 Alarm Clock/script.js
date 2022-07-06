const time = document.getElementById("time");
const selectMenu = document.querySelectorAll("select");
const setBtn = document.getElementById("set-btn");
const small = document.querySelector("small");
const todos = document.getElementById("todos");

// ==== Set times
for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i === 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

// ===== Global variables
let alarmTime;
let ringtone = new Audio("./assets/ringtone.mp3");
let isAlarmSet = false;

// ===== Set Timer
setInterval(() => {
  // --> Get Times
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h === 0 ? (h = 12) : h;
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  time.innerHTML = `${h}:${m}:${s} ${ampm}`;
  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

// ----> Set alarm function
const setAlarm = () => {
  if (isAlarmSet) {
    ringtone.pause();
    alarmTime = "";
    setBtn.innerText = "Set alarm";
    todos.firstElementChild.removeChild(p);
    return (isAlarmSet = false);
  }
  const time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  const notAllowed =
    time.includes("hour") || time.includes("minute") || time.includes("am/pm");
  if (notAllowed) {
    alert("Select valid time to set alarm !!");
  }

  console.log(time);
  alarmTime = time;
  isAlarmSet = true;
  setBtn.innerText = "Clear alarm";
  notAllowed ? (small.style.display = "block") : (small.style.display = "none");
  let p = `<p id="set-todo" class="todo">
    <span>${time}</span>
    <img title="Stop" id="stop" src="./assets/cross.svg" alt="stop alarm" />
  </p>`;
  !notAllowed && todos.firstElementChild.insertAdjacentHTML("afterend", p);
};

// ===== Event Handler
setBtn.addEventListener("click", setAlarm);
