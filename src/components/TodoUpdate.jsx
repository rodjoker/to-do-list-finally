import { useRef, useState } from 'react'

import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ 
    todo, 
    handleUpdateTodo, 
})  => {

const [task, setTask] = useState("");
const [description, setDescription] = useState("");

    const { updateDescription, updateTaskName ,onInputChange } = useForm({
    updateTaskName: todo.taskName,
		updateDescription: todo.description, 
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;
    const taskName = updateTaskName;

		handleUpdateTodo(id, description, taskName);

		setDisabled(!disabled);

		focusInputRef.current.focus();

    onInputChange(task, description);
	};


  return (
    <form onSubmit={onSubmitUpdate} >
      <input 
        type="text"  
        className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`} 
        name='updateTask'
        value={updateTaskName}
        onChange={({target}) => setTask(target.value) }
        placeholder="MODIFY?"
        readOnly={disabled}
		ref={focusInputRef}
      />
      <input 
        type="text"  
        className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`} 
        name='updateDescription'
        value={updateDescription}
        onChange={({target}) => setDescription(target.value) }
        placeholder="MODIFY?"
        readOnly={disabled}
		ref={focusInputRef}
      />
      <button className="btn-edit" type="submit">
        UPDATE
      </button>
    </form>
  )
}
