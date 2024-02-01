'use strict'

function onBallClick(elBall) {
    const currHeight = +elBall.innerText
    const currWidth = +elBall.innerText
    elBall.style.width = currWidth + 50 + 'px'
    elBall.style.height = currHeight + 50 + 'px'
    elBall.innerText = +elBall.innerText + 50
}