import { useRecoilValue, selector } from 'recoil'
import TodoItem from '../components/todoItem'
import TodoListStats from '../components/todoStats'
import TodoListFilter from '../components/todoFilter'
import TodoItemCreator from '../components/todoCreater'
import { todoListState, todoListFilterState } from '../atoms/todo'

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export default TodoList
