import { useForm } from "../hooks/useForm"
import { useState } from "react";


export const TodoAdd = ({ handleNewTodo}) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const { 
     onInputChange, onResetForm
  } = useForm({
    taskName: '',
    description:'',
  })

  const onFormSubmit = e => {
    e.preventDefault()
    
    if(description.length <= 1 || name.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      taskName: name,
      description: description,
      done: false
    }

    handleNewTodo(newTodo);
    onInputChange(name, description);
    onResetForm();

    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={onFormSubmit} >
      <input 
        type="text" 
        className="input-add" 
        name='taskName'
        value={name}
        onChange={({target}) => setName(target.value)}
        placeholder='add task'
      />
      <input 
        type="text" 
        className="input-add" 
        name='description'
        value={description}
        onChange={({target}) => setDescription(target.value)}
        placeholder='add description'
      />
      <button className='btn-add' type='submit' >
             Add
      </button>
    </form>
  );
};
