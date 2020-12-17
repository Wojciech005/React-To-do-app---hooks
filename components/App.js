import React, {useState} from 'react';
import Task from './Task.js'

import './App.css'


const App = () => {

  const [tasks, setTasks] = useState( 
    
   [
    // {
    //   id: 1,
    //   text: 'clean floor',
    // },
    // {
    //   id: 2,
    //   text: 'read book',
    // },
    // {
    //   id: 3,
    //   text: 'cook dinner',
    // },
    // {
    //   id: 4,
    //   text: 'go gym',
    // }
  ])

  const [newTask, setNewTask] = useState([])
  const  [value, setValue] = useState('')
  // const [index, setIndex] = useState(1)
    
 

    const handleValue = (e) => {
        const value = e.target.value;
        setValue(value)
          }

    const handleClick = (e) => {
        e.preventDefault()
        if(value !== '' )  {

          
         
            const newTask = 
             {
                 id: Math.floor(Math.random() * 1000),
                 text: value,
            }
            
            setTasks([...tasks,{
                  id: tasks.id,
                  text: value,
                 } ])
                
                 setTasks([...tasks, newTask])
                
             
                 
        } else {
          alert('add new task')
           
        }
        }
    
  // const handleTaskList = () => {
  //   setTasks([tasks, newTask ])
    
  // }

  const handleDeleteTask = (id) => {
    console.log(tasks)
    // const tasks = [...tasks]
    const index = tasks.findIndex(task => tasks.id === id)
    tasks.splice(index, 1)
    setTasks([...tasks])
  
  }


  

  return (
    <div className="wrap" >
      <h1>To do list!</h1>  <span>How many to do ? <span className="wrap">{tasks.length}</span>  </span>
       
      <form action="toDoList">
                <input type="text" placeholder="get new task" value={value} onChange = {handleValue} /> 
                <button className='add' onClick = {handleClick}  >Add new Task</button>
                
      </form>

          {tasks.map(task => (
            <Task key={task.id}  text = {task.text} clickDelete={handleDeleteTask}/>
           ))}
      
    </div>
  );
};

export default App;