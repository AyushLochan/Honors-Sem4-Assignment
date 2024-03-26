function getUniqueNumbers(array) {
    const uniqueNumbers = array.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);

    return uniqueNumbers;
}

const numbersArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1, 4];

const uniqueNumbersArray = getUniqueNumbers(numbersArray);

console.log("Unique Numbers Array:", uniqueNumbersArray);
