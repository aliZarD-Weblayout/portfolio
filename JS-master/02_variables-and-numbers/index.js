// task 1

let x1 = 3
let y1 = 4


let x2 = 5
let y2 = 6

let cathetus = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log(cathetus);


// task 2

let a = 10.547123
let b = 3.4239841
let n = 6

let task2one = Math.round((a % 1) * Math.pow(10, n))
let task2two = Math.round((b % 1) * Math.pow(10, n))

console.log(
	task2one,
	task2two
)

// task 3

let randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
 
function randomOdd(min, max) {
    if (min % 2 === 0) ++min;
    let delta = max - min;
    if (delta && delta % 2) --delta;
    let r = randomizer(0, delta / 2);
    return min + r * 2;
}
console.log(randomOdd(120, -50));