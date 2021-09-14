var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
//already sorted
// max is n-1
let min = 0
let max = primes.length

// Compute guess as the average of max and min, rounded down (so that it is an integer).
// are we sure these are whole numbers?
// can we even expect numbers?

//this only works if the number is in the array to continue
// what happens if its not in the array
function findPrimes(input: number): number {

    while (max > 0) {

    }
    // const index = primes.indexOf(input)
    // if (index) {
    //     const primesBeforeIndex = primes.slice(0, index)
    //     return primesBeforeIndex.length
    if (primes[input] === input) {
        return input // early exit you guessed correct the first time
    }
    const firstGuess = primes.indexOf(input)
    if (firstGuess === input) {
//solved you guessed right
    } else if (firstGuess > input) {
        max = firstGuess - 1
    } else if (firstGuess < input) {
        min = firstGuess + 1
    }
}

findPrimes(19)
//call recursively until solved