function isPrime(num) {
    // Handle edge cases
    if (num <= 1) {
        return false;  // Numbers less than or equal to 1 are not prime
    }

    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  // num is divisible by i, hence not prime
        }
    }

    return true;  // num is prime if no factors were found
}

// Example usage
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false