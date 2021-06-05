import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import TodoItem from '../components/todoItem'
import { todoListState } from '../atoms/todo'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
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

export default TodoList
