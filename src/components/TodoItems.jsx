import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";
import { useState } from "react";
import { FaEdit } from 'react-icons/fa'

export const TodoItems = ({
    todo, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    handleCompleteTodo,
}) => {
  const [edit, setEdit] = useState(true);
  if(edit) {
    return (
      <li>
          <span
             onClick={() => handleCompleteTodo(todo.id)}>
              { <label
               className={`container-done ${todo.done ? 'active' : ''} `}>
  
               </label> }
          </span>
            <h3>{todo.taskName}</h3>
            <h3>{todo.description}</h3>
              <button className="btn-edit" type="submit" onClick={() => {setEdit(!edit)}} >
                <FaEdit/>
              </button>
          <button 
            className="btn-delet"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <FaTrash/>
          </button>
      </li>
    )
  } else{
    return (
    <div>
 <TodoUpdate
             setEdit={setEdit}
             todo={todo}
             handleUpdateTodo={handleUpdateTodo}
          />
    </div>
    )
  }
 
}
