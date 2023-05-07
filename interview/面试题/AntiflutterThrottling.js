// 防抖函数
// 当事件被触发后，函数不会立即执行，而是等待一定时间后执行，如果在这段时间内再次触发了该事件，则重新计时。
function debounce (func, delay) {
  let timer = null; // 定义一个计时器
  return function (...args) {
    clearTimeout(timer); // 清除计时器
    timer = setTimeout(() => {
      func.apply(this, args); // 执行函数
    }, delay); // 延迟执行时间
  };
}

// 节流函数
// 当事件被触发后，函数会立即执行，然后在一定时间内不管触发多少次事件，都不会再次执行函数，直到过了这段时间才会重新执行。
function throttle (func, delay) {
  let timer = null; // 定义一个计时器
  let lastExecutedTime = 0; // 定义上一次执行时间
  return function (...args) {
    const currentTime = Date.now(); // 获取当前时间
    if (currentTime - lastExecutedTime > delay) { // 如果当前时间减去上一次执行时间大于延迟时间
      lastExecutedTime = currentTime; // 更新上一 次执行时间
      func.apply(this, args); // 执行函数
    } else {
      clearTimeout(timer); // 清除计时器
      timer = setTimeout(() => {
        lastExecutedTime = Date.now(); // 更新上一次执行时间
        func.apply(this, args); // 执行函数
      }, delay - (currentTime - lastExecutedTime)); // 延迟执行时间
    }
  };
}

