
import {Provider} from 'react-redux'
import Todo from './Todo'
import store from './store'


function App() {
  return (
    <Provider store={store}>
        <h1 id="heading">Todo List</h1>
        <Todo />
    </Provider>
  );
}
export default App