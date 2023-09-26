import { ListItem } from './components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectTodos,
	selectIsLoading,
	selectSearchValue,
	selectIsSorted,
	selectRefreshTodos,
} from '../../selectors';
import { useEffect } from 'react';
import { getTodos } from '../../actions';
import styles from './todos-field.module.css';

export const TodosField = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);
	const searchValue = useSelector(selectSearchValue);
	const isSorted = useSelector(selectIsSorted);
	const refreshTodos = useSelector(selectRefreshTodos);

	useEffect(() => {
		dispatch(getTodos(searchValue, isSorted));
	}, [dispatch, searchValue, isSorted, refreshTodos]);

	return (
		<ul className={styles.list}>
			{isLoading ? (
				<div className={styles.loader}>Загрузка...</div>
			) : (
				todos.map(({ id, ...todo }) => <ListItem key={id} id={id} {...todo} />)
			)}
		</ul>
	);
};
