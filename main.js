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

function onBall2Click(elBall, maxDiameter) {
    const currHeight = +elBall.innerText
    const currWidth = +elBall.innerText
    const randomAmount = getRandomInt(20, 60)
    if (currHeight >= maxDiameter || (currWidth + randomAmount) >= maxDiameter) {
        elBall.style.width = 50 + 'px'
        elBall.style.height = 50 + 'px'
        elBall.innerText = 50
        return
    }
    elBall.style.width = currWidth + randomAmount + 'px'
    elBall.style.height = currHeight + randomAmount + 'px'
    elBall.innerText = +elBall.innerText + randomAmount
}

function onBall3Click(elBall, ball1, ball2) {
    const elball1 = document.querySelector(ball1)
    const elball2 = document.querySelector(ball2)

    elball1.classList = ''
    elball2.classList = ''
    elball1.classList.add('ball2')
    elball2.classList.add('ball')
}

function onBall4Click(elBall, ball1, ball2, minDiameter) {
    const elball1 = document.querySelector(ball1)
    const elball2 = document.querySelector(ball2)

    const ball1Size = +elball1.innerText
    const ball2Size = +elball2.innerText

    const randomAmount = getRandomInt(20, 60)

    if (ball1Size <= minDiameter || (ball1Size - randomAmount) <= minDiameter) {
        elball1.style.width = 100 + 'px'
        elball1.style.height = 100 + 'px'
        elball1.innerText = 100
        elball2.style.width = 100 + 'px'
        elball2.style.height = 100 + 'px'
        elball2.innerText = 100
        return
    }
    
    elball1.style.width = ball1Size - randomAmount + 'px'
    elball1.style.height = ball1Size - randomAmount + 'px'
    elball1.innerText = +elball1.innerText - randomAmount
    
    elball2.style.width = ball2Size - randomAmount + 'px'
    elball2.style.height = ball2Size - randomAmount + 'px'
    elball2.innerText = +elball2.innerText - randomAmount
}