import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { todoListState } from '../atoms/todo'

type Props = {
  totalNum: number
  totalCompletedNum: number
  totalUncompletedNum: number
  formattedPercentCompleted: number
}

// eslint-disable-next-line @typescript-eslint/ban-types
type ContainerProps = {}

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

const Component: React.FC<Props> = ({
  totalNum,
  totalCompletedNum,
  totalUncompletedNum,
  formattedPercentCompleted,
}) => (
  <ul>
    <li>Total items: {totalNum}</li>
    <li>Items completed: {totalCompletedNum}</li>
    <li>Items not completed: {totalUncompletedNum}</li>
    <li>Percent completed: {formattedPercentCompleted}</li>
  </ul>
)

const TodoListStatsContainer: React.FC<ContainerProps> = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <Component
      totalNum={totalNum}
      totalCompletedNum={totalCompletedNum}
      totalUncompletedNum={totalUncompletedNum}
      formattedPercentCompleted={formattedPercentCompleted}
    />
  )
}

export default TodoListStatsContainer
