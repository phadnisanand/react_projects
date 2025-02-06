import { useState } from "react";

function AddToDo(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [newTodo , setNewTodo] = useState('');

  const addTodo = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      localStorage.setItem('todosonline', JSON.stringify(todos));
      setNewTodo('');
    }
  }

   return (
    <>
      <h1>React ToDo App</h1>
      <input type="text" value={newTodo}  onChange = {(e) => setNewTodo(e.target.value)}  placeholder="Enter a new todo"/>
      <button onClick={addTodo}>Add Todo</button>
    </>
  )

}

export default AddToDo
