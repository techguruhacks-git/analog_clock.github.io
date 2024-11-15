const body = document.querySelector("body");
const Hourhand = document.querySelector(".hour");
const minuteshand = document.querySelector(".minutes");
const secondHand = document.querySelector(".second");
const theme = document.querySelector(".theme");

const changeTime = () =>{
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60)* 360;
    minToDeg = (date.getMinutes() / 60)* 360;
    hourToDeg = (date.getHours() / 12)* 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteshand.style.transform = `rotate(${minToDeg}deg)`;
    Hourhand.style.transform = `rotate(${hourToDeg}deg)`;



};

setInterval(changeTime, 1000);


theme.addEventListener("click", () => {
body.classList.toggle("themes");
});
changeTime();

