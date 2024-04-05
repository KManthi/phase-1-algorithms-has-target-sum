function hasTargetSum(array, target) {
  const numberSet = {};

  for(const num of array) {
    const difference = target - num;
     if(difference in numberSet) return true;
     numberSet[num] = true;
  }

  return false;
}

/* 
  O(n)
*/

/* 
1. Declare an empty object called numberSet.
2. Iterate through each number in the array:
    a. Calculate the difference between the target and the current number.
    b. If the difference is found in the numberSet object, return true.
    c. If the difference is not found, add the current number to the numberSet object.
3. If the loop completes without finding a match, return false.
*/

/*
Declare an empty object numberSet that tracks numbers already encountered.
Iterate through every number in the array and find the difference between the target and the current number.
If the difference is found in the numberSet object (using the in operator), exit the loop and return true.
If the difference isn't found, add the current number to the numberSet object as a key with the value true, and continue looping.
If the loop completes without finding the difference in the array, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11], 11));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,-2,3,4,5], 2));
}

module.exports = hasTargetSum;
