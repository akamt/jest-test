import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todo'

type Props = {
  editItemText: (event: React.ChangeEvent<HTMLInputElement>) => void
  toggleItemCompletion: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteItem: () => void
} & ContainerProps

type ContainerProps = {
  item: {
    text: string
    isComplete: boolean
  }
}

const replaceItemAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
]

const removeItemAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

const Component: React.FC<Props> = ({
  item,
  editItemText,
  deleteItem,
  toggleItemCompletion,
}) => (
  <div>
    <input type="text" value={item.text} onChange={editItemText} />
    <input
      type="checkbox"
      checked={item.isComplete}
      onChange={toggleItemCompletion}
    />
    <button onClick={deleteItem}>X</button>
  </div>
)

const TodoItemContainer: React.FC<ContainerProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <Component
      deleteItem={deleteItem}
      item={item}
      editItemText={editItemText}
      toggleItemCompletion={toggleItemCompletion}
    />
  )
}

export default TodoItemContainer
