export function getTodos() {
    return (dispatch) => {
      fetch("http://localhost:8080/todoList")
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
        dispatch({type:'LOAD_TODOS',payload:data})
      })
    };
  }
  export function add(task,status) {
    const data = { task,status};
    return (dispatch) => {
        fetch('http://localhost:8080/todoList', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        getTodos();
        })
        .catch((error) => {
        console.error('Error:', error);
        });
       
    };
  }
export function deleteTodo(id){
    fetch('http://localhost:8080/todoList/'+id, { method: 'DELETE' })
    .then(()=>getTodos());
}
export function update(task,status,eid){
    const data = { task,status};
    return (dispatch) => {
        fetch('http://localhost:8080/todoList/'+eid, {
            method: 'PUT', 
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        getTodos();
        })
        .catch((error) => {
        console.error('Error:', error);
        });
       
    };
}

