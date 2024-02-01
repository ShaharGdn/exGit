function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    var hexR = r.toString(16).padStart(2, '0'); // Convert to hex and ensure two digits
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
    
    return '#' + hexR + hexG + hexB;
}
