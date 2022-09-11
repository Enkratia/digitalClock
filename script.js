setInterval(function () {
  const clock = document.querySelector(".display");

  let time = new Date();
  let secs = time.getSeconds();
  let mins = time.getMinutes();
  let hrs = time.getHours();

  let day = "AM";

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (hrs > 12) {
    day = "PM";
    hrs = hrs - 12;
  }
  if (hrs === 0) {
    hrs = 12;
  }

  clock.textContent = hrs + ":" + mins + ":" + secs + " " + day;
})

