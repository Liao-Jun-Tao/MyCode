# vue3 + typescript + composition api

- js 和 ts 区别 ?
      js语言 ? 弱类型的脚本 代码的编译在运行的一刹那, 
      .ts 静态强类型 提前编译 语法检查和类型检测专门的编译阶段
      .ts -> .js -> 运行 
      ts 比js 更适合大型项目? js 缺乏类型检测, 很多默默奇妙的bug
      ts 可以解决百分之90% 这些问题, 编译阶段发现
- 为什么要用ts?
      1. 大型项目多人协作,接口, type 等 可以约束代码如何被使用
      ts 起到了文档 代码建议, 不容易出错
      2. js 弱类型 容易出现类似input 12 确实字符串

- Props
      泛型约束 defineProps<{ }>
      interface Props {
            bar?: number
      }
      defineProps<Props>
      interface 缺点是 不支持 默认值, 宏函数 withDefaults(defineP
      
      rops,{})

- defineEmits
//运行时, const emit = defineEmits(['change','update'])  


