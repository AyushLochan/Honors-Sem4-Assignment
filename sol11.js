const stringsArray = ["apple", "banana", "orange", "strawberry", "kiwi", "pineapple", "grape", "watermelon", "mango", "peach"];

function findLongestString(array) {
    let longestString = "";
    let maxLength = 0;

    array.forEach(str => {
        if (str.length > maxLength) {
            longestString = str;
            maxLength = str.length;
        }
    });

    return longestString;
}

console.log("Longest string:", findLongestString(stringsArray));
