export const formatTimer = (method = {}, time = 0, minutes = 0, seconds = 0) => {
  const newTime = {
    totalSeconds: (minutes * 60) + seconds,
    textTime: '',
    running: true,
    newSeconds: 0,
    newMinutes: 0,
  }; 
  if (seconds < 59) {
    newTime.newSeconds = seconds + 1;
    if (seconds <= 9 && minutes <= 9) {
      newTime.textTime = `0${minutes}:0${seconds}`;
    } else if (seconds >= 10 && minutes <= 9) {
      newTime.textTime = `0${minutes}:${seconds}`;
    } else {
      newTime.textTime = `${minutes}:${seconds}`;
    }
  } else {
    newTime.newMinutes = minutes++;
    newTime.newSeconds = 0;
    newTime.textTime = `0${minutes}:00`;
  }
  return newTime;
}