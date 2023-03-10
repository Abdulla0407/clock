setInterval(setAsosiy, 1000)

const milSoat = document.querySelector("#soat-mili");
const milMinut = document.querySelector("#minut-mili");
const milSekund = document.querySelector("#sekund-mili");

function setAsosiy() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRation(milSekund, secondsRatio)
    setRation(milMinut, minutesRatio)
    setRation(milSoat, hoursRatio)
}

function setRation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setAsosiy()