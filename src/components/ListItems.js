import { useState } from 'react'

export default function ListItems (props) {
  const { taskItem, setTaskItem } = props
  const [showIncomplete, setShowIncomplete] = useState(false)
  const setTaskStatus = (taskId, status) => {
    setTaskItem(
      taskItem.map((task) => {
        if (taskId === task.id) {
          return { ...task, status: status ? 'done' : 'not-done' }
        }
        return task
      })
    )
  }
  const removeTask = (taskId) => {
    setTaskItem(taskItem.filter((task) => task.id !== taskId))
  }
  return (
    <>
      <ul className='task-list'>
        {taskItem
          .filter((task) =>
            showIncomplete ? task.status === 'not-done' : 'all-tasks'
          ) // all taks is show (truthy value) by default
          .map((task) => (
            <li
              key={task.id}
              className={task.status === 'done' ? 'task-done' : ''}
            >
              <span className='label'>{task.title}</span>
              <div className='actions'>
                <input
                  type='checkbox'
                  className='btn-action btn-action-done'
                  checked={task.status === 'done'}
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                />
                <button
                  onClick={() => removeTask(task.id)}
                  className='btn-action btn-action-delete'
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
      </ul>
      <div className='filter-wrapper'>
        <label htmlFor='filter' className='filter-label'>
          Show incompleted tasks only
        </label>
        <input
          type='checkbox'
          id='filter'
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  )
}
