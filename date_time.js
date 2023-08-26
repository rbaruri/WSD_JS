function getCurrentDayAndTime() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const formattedTime = `${dayOfWeek} ${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

const currentDayAndTime = getCurrentDayAndTime();
console.log(currentDayAndTime);
