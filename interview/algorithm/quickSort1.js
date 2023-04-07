function quickSort(arr, left = 0, right = arr.length - 1) {
   if (arr.length > 1) {
      //下次划分左右子数组的索引位
      const lineIndex = partition(arr, left, right)
      if (left < lineIndex - 1){
         quickSort(arr, left, lineIndex -1)
      }
      if(lineIndex < right){
         quickSort(arr, lineIndex, right)
      }
   }
   return arr
}
// 分成 左 pivot 右

function partition(arr, left, right) {
   let pivotValue = arr[Math.floor(left + (right - left) / 2)]
   let i = left
   let r = right
   while (i < j) {
      // 找到左侧大于pivotValue
      // 找到右侧小于pivotValue
      // 交换
      while (arr[i] < pivotValue) {
         i++
      }
      while (arr[j] > pivotValue) {
         j--
      }
      if (i < j) {
         swap(arr, i, j)
         i++
         j--
      }
   }
   return i // 
}