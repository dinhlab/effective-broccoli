import { useState } from 'react'

export default function AddNewTask (props) {
  const { tasks, setTasks } = props
  const [newTask, setNewTask] = useState('Add new task')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 'not-done'
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }
  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='newitem'>Add to the todo list</label>
      <input
        type='text'
        id='newitem'
        value={newTask}
        onChange={handleInputChange}
      />
      <button type='submit'>Add Item</button>
    </form>
  )
}
