'use strict'

function onBallClick(elBall) {
    const currHeight = +elBall.innerText
    const currWidth = +elBall.innerText
    if (currHeight >= 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
        return
    }
    elBall.style.width = currWidth + 50 + 'px'
    elBall.style.height = currHeight + 50 + 'px'
    elBall.innerText = +elBall.innerText + 50
}