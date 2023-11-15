import { useRef, useState } from 'react'

import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ 
    todo, 
    handleUpdateTodo,
    setEdit 
})  => {


const [task, setTask] = useState("");
const [description, setDescription] = useState(todo.description);
const [name, setName] = useState(todo.taskName);


    const { onInputChange } = useForm({
    updateTaskName: todo.name,
		updateDescription: todo.description, 
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
	console.log("sirve")

		handleUpdateTodo(id, description, name);
console.log(id, description, name)
		setDisabled(!disabled);

		focusInputRef.current.focus();

    onInputChange(task, description);
    setEdit(true);
	};


  return (
    <form onSubmit={onSubmitUpdate} >
      <input 
        type="text"  
        className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`} 
        name='updateTask'
        value={name}
        onChange={({target}) => setName(target.value) }
        placeholder="MODIFY?"
        //readOnly={disabled}
		ref={focusInputRef}
      />
      <input 
        type="text"  
        className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`} 
        name='updateDescription'
        value={description}
        onChange={({target}) => setDescription(target.value) }
        placeholder="MODIFY?"
        //readOnly={disabled}
		ref={focusInputRef}
      />
      <button className="btn-edit" type="submit">
        UPDATE
      </button>
    </form>
  )
}
