
import { TodoAdd } from "../components/TodoAdd"
import { Todolist } from "../components/Todolist"
import { useTodo } from "../hooks/useTodo";

export default function Diary() {
  const { 
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
   } = useTodo();
  return (
    <>
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>
        <div className="counter-todos">
          <h3>N° tareas: <span>{todosCount}</span> </h3>
          <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
        </div>

          <div className="add-todo">
           <h3>Agregar tarea</h3>
           <TodoAdd handleNewTodo={handleNewTodo}/>
          </div>
       
          <Todolist
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
      </div>
    </>
  )
}
