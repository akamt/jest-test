import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import TodoItem from '../components/todoItem'
import TodoListStats from '../components/todoStats'
import TodoListFilter, { filteredTodoListState } from '../components/todoFilter'
import TodoItemCreator from '../components/todoCreater'

const TodoListPage = (): JSX.Element => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Todo list</h1>

        <TodoListStats />
        <TodoListFilter />
        <TodoItemCreator />

        <div className="flex flex-col my-2">
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoListPage
