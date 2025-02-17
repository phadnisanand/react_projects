import { useState } from "react";

function UpdateToDo (props) {
  const prevValue = props.value;
  const [updateTodoInput, setUpdateTodo] = useState(prevValue);
  const todos = props.todos;
  const setTodos = props.setTodos;
  const currentTodo = props.currentTodo;
  const setCurrentTodo = props.setCurrentTodo;
  const setCurrentTodoFlag = props.setCurrentTodoFlag;

   const updateTodoFunc = () => {
    console.log('currentTodo', currentTodo);
    setTodos(
       todos.map((todo) =>
         todo.id === currentTodo ? { ...todo, text: updateTodoInput } : todo
      )
    );
     setCurrentTodo('');
     setCurrentTodoFlag(false);
  };

  return (
    <>
        <input type="text" value= {updateTodoInput}  onChange = {(e) => setUpdateTodo(e.target.value)} />
        <button  onClick={updateTodoFunc} className="edit-btn">Update</button>
    </>
  )
}
export default UpdateToDo
