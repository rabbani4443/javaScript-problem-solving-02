/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/


// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

// Main function to filter the array
function filterPrimes(arr) {
    if(!Array.isArray(arr)){
        return "please provide me an array of numbers"
    }
    else{
        return arr.filter(isPrime);
    }
    
}

let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(filterPrimes(nums)); // Output: [2, 3, 5, 7, 11, 13]
