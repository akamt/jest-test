import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import TodoItem from '../components/todoItem'
import TodoListStats from '../components/todoStats'
import TodoListFilter, { filteredTodoListState } from '../components/todoFilter'
import TodoItemCreator from '../components/todoCreater'

const TodoListPage = (): JSX.Element => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoListPage
