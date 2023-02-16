const initialState={
    todo:[{
        "id": 4,
        "task": "clock-in",
        "status": "Done",
        isChecked: false,
      }]
    }


const todoReducer=(state=initialState,action)=>{
    if(action.type==='LOAD_TODOS'){
        return {...state, todo: [...action.payload]}
    }

    if(action.type==='ADD_TODOS'){
        return {...state, todo: action.payload}
    }
   
 
        return state;
}

export default todoReducer ;