function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const a = 48;
const b = 18;
console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);