function displayDate(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}
const createClock = setInterval(displayDate, 1000);