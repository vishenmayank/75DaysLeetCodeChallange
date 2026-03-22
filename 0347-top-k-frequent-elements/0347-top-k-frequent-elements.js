/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();

    // Step 1: Count frequency
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Create buckets
    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    // Step 3: Collect top k elements
    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
};