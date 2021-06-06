import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todo'

type Props = {
  inputValue: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  addItem: () => void
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}

const Component: React.FC<Props> = ({ inputValue, onChange, addItem }) => (
  <div>
    <input type="text" className="" value={inputValue} onChange={onChange} />
    <button onClick={addItem}>Add</button>
  </div>
)

const TodoItemCreateContenar = () => {
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
    <Component addItem={addItem} onChange={onChange} inputValue={inputValue} />
  )
}

export default TodoItemCreateContenar
