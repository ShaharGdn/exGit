'use strict'

function onBallClick(elBall) {
    const currHeight = +elBall.innerText
    const currWidth = +elBall.innerText
    const randomAmount = getRandomInt(20, 60)
    if (currHeight >= 400 || (currWidth + randomAmount) >= 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        return
    }
    elBall.style.width = currWidth + randomAmount + 'px'
    elBall.style.height = currHeight + randomAmount + 'px'
    elBall.innerText = +elBall.innerText + randomAmount
}