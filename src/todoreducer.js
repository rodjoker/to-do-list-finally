export const todoReducer = (initialState, action) => {

  switch (action.type) {
    case 'add_todo':
      return [...initialState, action.payload]
    
    case 'delete_todo':
      return initialState.filter(todo => todo.id !== action.payload)
    
    case 'complete_todo':
      return initialState.map(todo => {
        if(todo.id === action.payload){
            return {
                ...todo,
                done: !todo.done
            }
        }
        return todo;
      })
   
    case 'update_todo':
      return initialState.map(todo => {
        if(todo.id === action.payload.id){
            return {
                 ...todo,
                 description: action.payload.description,
                }
            }
            return todo;
          })

default:
    return initialState
  }

}