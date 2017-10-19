class Strings {
    // Reverses a string.
    reverse(toReverse) {
        return toReverse.split('').reverse().join('')
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck)  {
         return true; 
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {

    }

    // Checks to see if the target string is a number - decimal like currency
    isNumber(toCheck) {
    }
}

module.exports = Strings