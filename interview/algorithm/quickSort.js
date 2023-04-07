function quickSort(arr) {
   if (arr.length <= 1) {
     return arr;
   } else {
     const pivotIndex = Math.floor(arr.length / 2);
     const pivot = arr[pivotIndex];
     const less = [];
     const greater = [];
     for (let i = 0; i < arr.length; i++) {
       if (i === pivotIndex) {
         continue;
       }
       if (arr[i] < pivot) {
         less.push(arr[i]);
       } else {
         greater.push(arr[i]);
       }
     }
     return [...quickSort(less), pivot, ...quickSort(greater)];
   }
 }
 
 const arr = [8, 7, 6, 5, 4, 3, 2, 1];
 console.log(quickSort(arr)); // 输出 [1, 2, 3, 4, 5, 6, 7, 8]
 
//  在这个实现中，我们首先检查数组的长度是否小于等于1。如果是，则返回该数组，因为已经完成了排序。否则，我们选择数组中的一个中心点（pivot），然后将小于该点的元素放入一个新数组 less 中，将大于该点的元素放入另一个新数组 greater 中。最后，将 less、pivot 和 greater 拼接成一个新数组，并分别对 less 和 greater 进行递归调用 quickSort 函数，直到所有子数组的长度均小于等于1。