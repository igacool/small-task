let isStarted = false;
const defaultValue = 10;
setDafaultValue();

function setDafaultValue() {
  const countEl = document.getElementById("count");
  const timeEl = document.getElementById("timedown");

  timeEl.innerHTML = defaultValue;
  countEl.innerHTML = 0;
}

function push(ev) {
  const targetButton = ev.target;

  targetButton.style.top = toppa() + "px";
  targetButton.style.left = lefta() + "px";
  score();
  start();
}

function toppa() {
  return Math.floor(
    Math.random() * (document.getElementById("container").offsetHeight - 21)
  );
}

function lefta() {
  return Math.floor(
    Math.random() * (document.getElementById("container").offsetWidth - 60)
  );
}

function downMe() {
  const timeEl = document.getElementById("timedown");
  let time = timeEl.innerHTML;
  time = time - 1;
  timeEl.innerHTML = time;
  if (time == 0) {
    stop();
    yourScore();
    setDafaultValue();
  }
}

function start() {
  if (!isStarted) {
    isStarted = true;
    myInterval = setInterval(downMe, 1000);
  }
}

function stop() {
  clearInterval(myInterval);
  isStarted = false;
}

function score() {
  const countEl = document.getElementById("count");
  let count = +countEl.innerHTML;
  count = count + 1;
  countEl.innerHTML = count;
}

function yourScore() {
  const countEl = document.getElementById("count");
  alert("Your score is " + countEl.innerHTML);
}
