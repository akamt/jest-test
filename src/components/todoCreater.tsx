import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todo'

type Props = {
  inputValue: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  addItem: (event: React.MouseEvent<HTMLInputElement>) => void
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}

const Component: React.FC<Props> = ({ inputValue, onChange, addItem }) => (
  <form className="w-full max-w-sm">
    <div className="flex items-center border-b border-teal-500 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        aria-label="TODO"
        placeholder="TODO"
        onChange={onChange}
        value={inputValue}
      />
      <button
        className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
        type="submit"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  </form>
)

const TodoItemCreateContenar = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = (e) => {
    e.preventDefault()

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
