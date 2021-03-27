function findOppositeNumber(n, inputNumber) {
    if (n < 0 || n > 20 || inputNumber > n) {
        return null
    }
    if (inputNumber < n / 2) {
        return n / 2 + inputNumber
    } else {
        return n / 2 - inputNumber
    }
}

console.log(findOppositeNumber(25, 2))
