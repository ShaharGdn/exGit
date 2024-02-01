'use strict'

function onBallClick(elBall, maxDiameter) {
    const currHeight = +elBall.innerText
    const currWidth = +elBall.innerText
    const randomAmount = getRandomInt(20, 60)
    if (currHeight >= maxDiameter || (currWidth + randomAmount) >= maxDiameter) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        return
    }
    elBall.style.width = currWidth + randomAmount + 'px'
    elBall.style.height = currHeight + randomAmount + 'px'
    elBall.innerText = +elBall.innerText + randomAmount
}