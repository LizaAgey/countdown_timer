const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secEl = document.getElementById('sec')


const summerComes = "1 Jun 2022";

function getNumberOfDays(end) {
    const date1 = new Date();
    const date2 = new Date(end);

    // One day in milliseconds 
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.floor(diffInTime / oneDay);
    return diffInDays
}

function getNumberOfHours() {
    diffInHours = 24 - new Date().getHours()
    return diffInHours
}

function getNumberOfMins() {
    diffInMins = 60 - new Date().getMinutes()
    return diffInMins
}

function getNumberOfSec() {
    return 60 - new Date().getSeconds()
}



function countdown() {
    const days = getNumberOfDays(summerComes)
    const hours = getNumberOfHours()
    const mins = getNumberOfMins()
    const sec = getNumberOfSec()

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)
