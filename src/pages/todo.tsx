import { useState } from 'react'
import { useRecoilValue, useSetRecoilState, selector } from 'recoil'
import TodoItem from '../components/todoItem'
import TodoListStats from '../components/todoStats'
import TodoListFilter from '../components/todoFilter'
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
const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" className="" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
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
