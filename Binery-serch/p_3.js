/**
 * @param {number[]} nums
 * @return {number}
 */

//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
var findMin = function(arr) {
   
    let min = 9999999;
    let low=0;
    let high= arr.length-1;
    while(low<=high)
    {
       let mid = Math.floor((low + high) / 2);
       if(arr[low]<=arr[mid])
       {
           min= Math.min(min,arr[low]);
           low=mid+1;
       }
       else
       {
           min= Math.min(min,arr[mid]);
           high= mid-1;
       }
 
    }
    return min;
 };
 