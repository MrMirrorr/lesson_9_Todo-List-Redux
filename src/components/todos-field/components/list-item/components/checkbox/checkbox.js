import styles from './checkbox.module.css';
import { SET_IS_LOADING_START, SET_IS_LOADING_STOP } from '../../../../../../actions';
import {
	RESET_ERROR_MESSAGE,
	setErrorMessage,
	setRefreshTodos,
} from '../../../../../../actions/options-actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshTodos } from '../../../../../../selectors';

export const Checkbox = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const refreshTodos = useSelector(selectRefreshTodos);

	const changeCompleteTodo = (id, title, completed) => {
		dispatch(SET_IS_LOADING_START);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ id, title, completed: !completed }),
		})
			.then(() => {
				dispatch(RESET_ERROR_MESSAGE);
				dispatch(setRefreshTodos(!refreshTodos));
			})
			.catch((error) => {
				dispatch(setErrorMessage('Ошибка обновления записи'));
				console.error('Ошибка обновления записи:', error);
			})
			.finally(() => {
				dispatch(SET_IS_LOADING_STOP);
			});
	};

	return (
		<input
			className={styles.checkbox}
			type="checkbox"
			checked={completed}
			onChange={() => changeCompleteTodo(id, title, completed)}
		/>
	);
};
