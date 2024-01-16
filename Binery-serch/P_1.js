// This function performs a binary search on a rotated sorted array.
/**
 
https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
* @param {number[]} A - The rotated sorted array
 * @param {number} l - The low index of the array
 * @param {number} h - The high index of the array
 * @param {number} key - The target element to search for
 * @return {number} - The index of the target element if found, otherwise -1
 */
class Solution {
    search(arr, l, h, k) {
        while (l <= h) {
            let mid = Math.floor((l + h) / 2);

            if (arr[mid] == k) {
                return mid;
            }

            if (arr[mid] >= arr[l]) {
                if(arr[l] <= k && arr[mid] >= k) {
                    h = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if(arr[mid] <= k && k <= arr[h]) {
                    l = mid + 1;
                } else {
                    h = mid - 1;
                }
            }
        }

        return -1;
    }
}
