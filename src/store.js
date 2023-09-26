import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer, editIdReducer, optionsReducer } from './reducers';

const rootReducer = combineReducers({
	todos: todosReducer,
	options: optionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
