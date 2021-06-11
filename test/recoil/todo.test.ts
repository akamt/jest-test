import { snapshot_UNSTABLE } from 'recoil'
import { todoListState } from '../../src/atoms/todo'

test('Test todoListState', () => {
  const initialSnapshot = snapshot_UNSTABLE()
  expect(
    initialSnapshot.getLoadable(todoListState).valueOrThrow()
  ).toStrictEqual([])

  const testSnapshot = snapshot_UNSTABLE(({ set }) =>
    set(todoListState, [
      {
        id: 1,
        text: 'test todo',
        isComplete: false,
      },
    ])
  )
  expect(testSnapshot.getLoadable(todoListState).valueOrThrow()).toStrictEqual([
    { id: 1, isComplete: false, text: 'test todo' },
  ])
})
