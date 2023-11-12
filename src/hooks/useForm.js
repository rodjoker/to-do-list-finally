
import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (taskName, description) => {
        
        setFormState({
            ...formState,
            taskName,
            description
        });
    };
        const onResetForm = () => {
            setFormState(initialForm)
        };

        return {
            ...formState,
            formState,
            onInputChange,
            onResetForm
        }
    
};