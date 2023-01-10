const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); // to get seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // converting seconds to degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes(); // to get minutes
    const minsDegrees = ((mins / 60)* 360) + 90; // converting minutes to degrees
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours(); // to get hours
    const hoursDegrees = ((hours / 12)* 360) + 90; // converting hours to degrees
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds,mins, hours);
}

setInterval(setDate, 1000);