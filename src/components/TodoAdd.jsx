import { useForm } from "../hooks/useForm"


export const TodoAdd = ({ handleNewTodo}) => {

  const { 
    taskName ,description, onInputChange, onResetForm
  } = useForm({
    taskName: '',
    description:'',
  })

  const onFormSubmit = e => {
    e.preventDefault()
    
    if(description.length <= 1 || taskName.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      taskName: taskName,
      description: description,
      done: false
    }

    handleNewTodo(newTodo);
    onResetForm();

  }

  return (
    <form onSubmit={onFormSubmit} >
      <input 
        type="text" 
        className="input-add" 
        name='taskName'
        value={taskName}
        onChange={onInputChange}
        placeholder='add task'
      />
      <input 
        type="text" 
        className="input-add" 
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='add description'
      />
      <button className='btn-add' type='submit' >
             Add
      </button>
    </form>
  );
};
