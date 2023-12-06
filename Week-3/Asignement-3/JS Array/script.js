function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNums.push(num);
        } else {
            oddNums.push(num);
        }
    }

    console.log("Even numbers:", evenNums.length > 0 ? evenNums.join("\n") : "None");
    console.log("Odd numbers:", oddNums.length > 0 ? oddNums.join("\n") : "None");
}
let nums1 = [4, 2, 9, 1, 8];
divideArray(nums1);

let nums2 = [4, 2, 8];
divideArray(nums2);