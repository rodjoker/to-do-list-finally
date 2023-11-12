import { TodoItems } from "./TodoItems";


export  const Todolist = ({
  todos, 
  handleUpdateTodo, 
  handleDeleteTodo, 
  handleCompleteTodo,
}) => {
  return (
    <ul>
      {todos.map(todo => (
         <TodoItems
           key={todo.id}
           todo={todo}
           handleUpdateTodo={handleUpdateTodo}
           handleDeleteTodo={handleDeleteTodo}
           handleCompleteTodo={handleCompleteTodo}
     />
    ))}
    
  </ul>
  );
}
