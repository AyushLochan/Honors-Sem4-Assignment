let num = 1;
let sum = 0;

while (num <= 100) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}

console.log("Sum of even numbers from 1 to 100:", sum);
