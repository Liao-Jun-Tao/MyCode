# promise A+ 规范

- Promise 类 then catch resolve reject all race finally...
- 传一个参数,函数, 也叫executor 立即执行
- executor有两个参数, resolve reject 函数
- 三个状态 pending  fulfilled rejected
      - pending, 可以转化为fulfilled 和rejected
      不可以多彩执行同一个promise
      - 成功时, 不可转为其他状态, 且拥有一个不可改变的值
      - 失败时, 不可转为其他状态, 且有一个不可改变的原因

      - executor 报错, 直接 reject()


      - then(onFulfilled, onRejected)
            - state 转为fulfilled, this.value -> onFulfilled 运行
            - rejected this,

