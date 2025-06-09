```javascript
let twoSum = function(nums, target) {
    let hashMap = {};
    
    for (let i = 0; i < nums.length; i++) { 
        let complement = target - nums[i]; 
        if (complement in hashMap) { 
            return [hashMap[complement], i]; 
        } 
        hashMap[nums[i]] = i; 
    } 
    return []; 
}; 
```

**Explanation:**

* **`let twoSum=function(nums, target) { ... }`**: This defines a function named `twoSum` that takes two arguments:
  * `nums`: An array of numbers.
  * `target`: The target sum we're looking for.
* **`let hashMap={};`**: This initializes an empty object called `hashMap`. This will be used as a hash map (or dictionary) to store numbers from the `nums` array and their corresponding indices. This is the key to the efficiency of this solution.
* **`for (let i=0; i < nums.length; i++) { ... }`**: This loop iterates through each number in the `nums` array.
* **`let complement=target - nums[i];`**: Inside the loop, this calculates the `complement` needed to reach the `target` sum. In other words, it's the number we need to find in the array that, when added to the current number `nums[i]`, will equal `target`.
* **`if (complement in hashMap) { ... }`**: This is the core of the algorithm. It checks if the `complement` already exists as a *key* in the `hashMap`. If it does, it means we've already encountered the number that, when added to the current number, equals the target.
* **`return [hashMap[complement], i];`**: If the `complement` is found in the `hashMap`, this line returns an array containing two indices:
  * `hashMap[complement]`: This retrieves the index of the `complement` from the `hashMap`. This is the index of the first number that makes up the sum.
  * `i`: This is the index of the current number `nums[i]`, which is the second number that makes up the sum.
* **`hashMap[nums[i]]=i;`**: If the `complement` is *not* found in the `hashMap`, this line adds the current number `nums[i]` as a key to the `hashMap`, and its index `i` as the corresponding value. This way, if we encounter the `complement` later, we'll be able to find its index.
* **`return [];`**: If the loop completes without finding a pair of numbers that sum to the `target`, this line returns an empty array, indicating that no solution was found.

**How it works (example):** 

Let's say `nums=[2, 7, 11, 15]` and `target=9`.
1. **i=0, nums[i]=2**: `complement=9 - 2=7`. `7` is not in `hashMap`. Add `2: 0` to `hashMap`.
2. **i=1, nums[i]=7**: `complement=9 - 7=2`. `2` *is* in `hashMap` (with index 0). Return `[hashMap[2], 1]`, which is `[0, 1]`.

The function returns `[0, 1]` because `nums[0] + nums[1]=2 + 7=9`.

**Why is this efficient?**

Using a hash map makes this solution very efficient, with a time complexity of O(n). Instead of nested loops (which would be O(n^2)), it allows us to check if the `complement` exists in the array in *average* O(1) time. The space complexity is O(n) in the worst case, as we might store all the numbers in the `hashMap`.