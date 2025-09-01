function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1; // 360/60 + smooth move
  const hourDeg = hours * 30 + minutes * 0.5; // 360/12 + smooth move

  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

// update every second
setInterval(updateClock, 1000);

// initialize at start
updateClock();
