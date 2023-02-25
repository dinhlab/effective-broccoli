import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ListItems from './components/ListItems'
import AddNewTask from './components/AddNewTask'

export default function App () {
  const defaultValue = [
    { id: Date.now(), title: 'Learn JavaScript', status: 'not-done' },
    { id: Date.now() + 1, title: 'Code a To Do List', status: 'done' }
  ]
  const [appTasks, setAppTasks] = useState(defaultValue)

  return (
    <div className='container'>
      <Header title='To Do List' subTitle='Get things done' />
      <ListItems taskItem={appTasks} setTaskItem={setAppTasks} />
      <AddNewTask tasks={appTasks} setTasks={setAppTasks} />
    </div>
  )
}
