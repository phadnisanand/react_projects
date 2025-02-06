import { useState } from "react";
import AddToDo from "./AddToDo";
import UpdateToDo from "./UpdateToDo";

function ToDoList(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [currentTodo, setCurrentTodo] = useState(null);
  const [currentTodoFlag, setCurrentTodoFlag] = useState(false);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
     setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
     setCurrentTodo(id)
     setCurrentTodoFlag(true);
  }

  return (
    <div className="app-container">
        <AddToDo todos={todos} setTodos={setTodos} />
          <ul className="todo-list">
            {
              todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed todo-item" : "todo-item"} >
                   {
                      currentTodo == todo.id ?
                      <>
                        <UpdateToDo todos={todos} setTodos={setTodos} currentTodo={currentTodo} value={todo.text} setCurrentTodo= {setCurrentTodo} setCurrentTodoFlag={setCurrentTodoFlag} />
                      </>
                        :
                      <>
                          <span onClick={() => toggleTodo(todo.id)}> {todo.text}</span>
                          <div>
                            <button
                            onClick={() => editTodo(todo.id)}
                            className="edit-btn"
                            >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="delete-btn"
                            >
                            Delete
                          </button>
                        </div>
                        </>
                      }
                </li>
              ))
            }
          </ul>
    </div>
  )
}
export default ToDoList
