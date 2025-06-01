import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "study physics",
    description: "study Physics from 9-10",
    completed: true
  },
  {
    title: "study math",
    description: "study math from 9-10",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <>
    <div>
      <div>
        <button onClick={addTodo}>Add a Todo</button>
      </div>
      {todos.map(function(todo){
        return <Todo title = {todo.title} description = {todo.description} />
      })}
    </div>

    </>
  )
}


function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
}

export default App
