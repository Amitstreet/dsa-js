
 //https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * Function to search for a target element in a rotated sorted array.
 * @param {number[]} arr - The rotated sorted array
 * @param {number} target - The element to search for
 * @return {boolean} - True if the target is found, false otherwise
 */
var search = function(arr, target) {
    // Initialize low and high pointers for binary search
    let low = 0;
    let high = arr.length - 1;

    // Perform binary search
    while (low <= high) {
        // Calculate the middle index
        let mid = Math.floor((low + high) / 2);

        // Check if the middle element is the target
        if (arr[mid] == target) {
            return true;
        }

        // Handle the case where elements at low, mid, and high are equal
        if (arr[mid] == arr[low] && arr[mid] == arr[high]) {
            low++;
            high--;
            continue;
        }

        // Check which part of the array is sorted
        if (arr[mid] >= arr[low]) { // Left part is sorted
            if (target >= arr[low] && target <= arr[mid]) {
                high = mid - 1; // Search in the left sorted part
            } else {
                low = mid + 1; // Search in the right unsorted part
            }
        } else { // Right part is sorted
            if (target >= arr[mid] && target <= arr[high]) {
                low = mid + 1; // Search in the right sorted part
            } else {
                high = mid - 1; // Search in the left unsorted part
            }
        }
    }

    // If the target is not found in the array
    return false;
};
