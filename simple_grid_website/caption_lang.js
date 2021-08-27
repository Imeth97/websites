/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = getRandomInt(1,4)

var msg = 'Keep it Simple.'

if (rand == 2){
    msg = 'Mantenlo Simple.'
}else if (rand ==4){
    msg = 'Halte es einfach.'
}

document.write('<h3>' + msg + '</h3>');