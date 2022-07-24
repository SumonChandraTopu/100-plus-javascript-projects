const btn = document.getElementById("btn");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mil = document.getElementById("mil");

let stopMode = false;

const stopWatch = () => {
  btn.innerText = "Stop";
};

btn.addEventListener("click", () => {
  let mi = 0;
  let s = 0;
  let m = 0;

  setInterval(() => {
    mi += 1;
    mil.innerText = mi <= 9 ? `0${mi}` : mi;
    if (mi === 60) {
      s += 1;
      sec.innerText = s <= 9 ? `0${s}` : s;
      if (s === 60) {
        m += 1;
        min.innerText = m <= 9 ? `0${m}` : m;
      }
      mi = 0;
    }
  }, 17);
  stopMode = true;
  console.log(stopMode);
  stopMode && stopWatch();
});
