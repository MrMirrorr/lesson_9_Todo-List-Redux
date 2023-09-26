import styles from './list-item.module.css';
import iconPencil from './icons/pencil.svg';
import iconDelete from './icons/delete.svg';
import { Checkbox } from './components';
import { Button } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditId, selectIsLoading, selectRefreshTodos } from '../../../../selectors';
import {
	SET_IS_LOADING_START,
	SET_IS_LOADING_STOP,
	setEditId,
} from '../../../../actions';
import {
	setErrorMessage,
	setRefreshTodos,
	setValue,
} from '../../../../actions/options-actions';

export const ListItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const editId = useSelector(selectEditId);
	const isLoading = useSelector(selectIsLoading);
	const refreshTodos = useSelector(selectRefreshTodos);

	const onEditingTodo = (id, title) => {
		dispatch(setEditId(id));
		dispatch(setValue(title));
	};

	const deleteTodo = (id) => {
		const fetchData = () => {
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'DELETE',
			})
				.then(() => {
					dispatch(setRefreshTodos(!refreshTodos));
				})
				.catch((error) => {
					dispatch(setErrorMessage('Ошибка удаления записи'));
					console.error('Ошибка удаления записи:', error);
				})
				.finally(() => {
					dispatch(SET_IS_LOADING_STOP);
				});
		};

		dispatch(SET_IS_LOADING_START);
		fetchData();
	};

	return (
		<li
			className={
				editId && id === editId
					? `${styles.listItem} ${styles.editing}`
					: styles.listItem
			}
		>
			<Checkbox id={id} title={title} completed={completed} />
			<div className={styles.itemText}>{title}</div>
			<div className={styles.itemControls}>
				<Button
					name="EDIT_BUTTON"
					onClick={() => onEditingTodo(id, title)}
					disabled={isLoading}
				>
					<img src={iconPencil} alt="Редактировать" width={24} />
				</Button>
				<Button
					name="DELETE_BUTTON"
					onClick={() => deleteTodo(id)}
					disabled={isLoading || editId}
				>
					<img src={iconDelete} alt="Удалить" width={24} />
				</Button>
			</div>
		</li>
	);
};
