function timer(id, deadline) {
  // timer
  // YYYY-MM-DDTHH:mm:ss.sssZ

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.now(),
          days = Math.floor(total / (1000 * 60 * 60 * 24)).toString().padStart(2,0),
          hours = Math.floor((total / (1000 * 60 * 60)) % 24).toString().padStart(2,0),
          minutes = Math.floor((total / (1000 * 60)) % 60).toString().padStart(2,0),
          seconds = Math.floor((total / 1000) % 60).toString().padStart(2,0);
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function setClock(timerName, endtime) {
    const t = document.querySelector(timerName),
          d =  t.querySelector("#days"),
          h =  t.querySelector("#hours"),
          m =  t.querySelector("#minutes"),
          s =  t.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();
    
    function updateClock() {
      const { total, days, hours, minutes, seconds } = getTimeRemaining(endtime);

      if (total >= 0) {
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
      } else {
        clearInterval(timeInterval);
        d.innerHTML = "00";
        h.innerHTML = "00";
        m.innerHTML = "00";
        s.innerHTML = "00";
      }
    }
  }

  setClock(id, deadline);
}

export default timer;
