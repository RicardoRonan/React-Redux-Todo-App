import { createStore,applyMiddleware}  from 'redux';
import todoReducer from './Todo.reducer'
import thunk from 'redux-thunk'
const store = new createStore(todoReducer,applyMiddleware(thunk));
export default store;