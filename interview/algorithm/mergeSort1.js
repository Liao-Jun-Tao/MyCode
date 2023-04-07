function mergeSort(arr) {
   const len = arr.length
   if(len<=1) return arr

   const mid = Math.floor(len / 2) // 取整
   const leftArr = mergeSort(arr.slice(0,mid))
   const rightArr = mergeSort(arr.slice(mid,len))
   arr = mergeArr(leftArr, rightArr)
   return arr
   // len 完成排序
}
/**
 * 
 * @param {*} arr 1
 * @param {*} arr2
 * arr1 arr2 都是有序的 
 * O(n)
 */

function mergeArr(arr1,arr2) {
   //初始化两个指针. 指向arr1 arr2
   let i= 0, j = 0;
   //结果数组
   const res = []
   const len1 = arr1.length
   const len2 = arr2.length
   while(i< len1 && j< len2) {
      if(arr1[i]<arr2[j]){
         res.push(arr[i])
         i++;
      }else{
         res.push(arr[j])
         j++
      }
   } 
   if (i< len1){
      return res.concat(arr.slice(i))
   }
}

console.log(mergeSort([8,7,6,5,4,3,2,1]));