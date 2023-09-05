import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  function addTodo() {
    setTodos([...todos, newTodo])
    setNewTodo("")
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        Add
      </Button>
      <div>{todos}</div>
    </div>
  )
}

export default App
