setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hourOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();

    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", { 
        month: "long" 
    });

    let year = timeNow.getFullYear();

    hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hourOfDay + ":" + minutes + ":" + seconds;

    document.getElementById('Clock').innerHTML = time + "\n" + today + " " + months + " " + year; 

}
displayTime();
