import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_LOADING_START, SET_IS_LOADING_STOP } from '../actions';
import { selectRefreshTodos, selectValue } from '../selectors';
import {
	RESET_VALUE,
	setErrorMessage,
	setRefreshTodos,
} from '../actions/options-actions';

export const usePostTodoRequest = () => {
	const dispatch = useDispatch();
	const value = useSelector(selectValue);
	const refreshTodos = useSelector(selectRefreshTodos);

	if (value) {
		dispatch(SET_IS_LOADING_START);

		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ title: value, completed: false }),
		})
			.then(() => {
				dispatch(setRefreshTodos(!refreshTodos));
			})
			.catch((error) => {
				dispatch(setErrorMessage('Ошибка создания новой записи'));
				console.error('Ошибка создания новой записи:', error);
			})
			.finally(() => {
				dispatch(RESET_VALUE);
				dispatch(SET_IS_LOADING_STOP);
			});
	}
};
