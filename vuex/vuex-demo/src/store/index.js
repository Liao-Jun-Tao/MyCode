import { createStore } from 'vuex' // 创建一个状态仓库
// 统一管理好处是  维护成本降低, 管理更科学

export default createStore({
    // 组件可以使用它
    state: {
        count: 1 // 中央状态 count  data() 私有 reactive/ref  props 传参  computed  
    },
    // 管理规定, 状态不能直接修改,  修改走一定的流程  会计 写
    // 修改   一定是这样修改的, 不会随意改
    mutations: {
        // store mutation 
        add(state) { // 第一个参数就是state对象
            state.count++; // 只有mutations 才能修改状态
        }
    }
})
