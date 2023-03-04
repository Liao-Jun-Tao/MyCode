import { defineStore } from "pinia"; //某个模块的状态函数化
import { Ref, ref, reactive } from "vue";
import { nanoid } from "nanoid";
//持久化 localStorage
//告别类似编程  函数式
type Todo = { id: string; text: string; isComplete: boolean }; //定义义类型
const IsKey = "_v_todos";
export const useTodoStore = defineStore("todos", () => {
  // 泛型
  const todos: Ref<Todo[]> = ref([]);
  // 5%
  const addTodo = (text: string) => {
    todos.value = [
      ...todos.value,
      {
        id: nanoid(), //生成一个唯一的ID
        isComplete: false, //未完成
        text, //文本的内容
      },
    ];
    updateLocalStorage();
  };

  const updateLocalStorage = () => {
    localStorage.setItem(IsKey, JSON.stringify(todos.value));
  };
  const initFromLocalStorage = () => {
    const Istodos = localStorage.getItem(IsKey);

    if (Istodos === null) {
      todos.value = [];
    } else {
      todos.value = JSON.parse(Istodos);
    }
  };
  return {
    todos,
    addTodo,
    initFromLocalStorage,
  };
});
