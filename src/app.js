import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	MainInput,
	Button,
	SearchMsg,
	TodosField,
	SearchInput,
	ErrorMsg,
} from './components';
import { RESET_EDIT_ID, SET_IS_LOADING_START, SET_IS_LOADING_STOP } from './actions';
import {
	selectEditId,
	selectErrorMsg,
	selectIsLoading,
	selectIsSorted,
	selectRefreshTodos,
	selectValue,
} from './selectors';
import styles from './app.module.css';
import {
	RESET_ERROR_MESSAGE,
	RESET_VALUE,
	setErrorMessage,
	setOnSort,
	setRefreshTodos,
} from './actions/options-actions';

export const App = () => {
	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const value = useSelector(selectValue);
	const isSorted = useSelector(selectIsSorted);
	const refreshTodos = useSelector(selectRefreshTodos);
	const editId = useSelector(selectEditId);
	const isLoading = useSelector(selectIsLoading);

	const postTodo = (value) => {
		const fetchData = () => {
			fetch('http://localhost:3005/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ title: value, completed: false }),
			})
				.then(() => {
					dispatch(setRefreshTodos(!refreshTodos));
					dispatch(RESET_VALUE);
					dispatch(RESET_ERROR_MESSAGE);
				})
				.catch((error) => {
					dispatch(setErrorMessage('Ошибка создания новой записи'));
					console.error('Ошибка создания новой записи:', error);
				})
				.finally(() => {
					dispatch(SET_IS_LOADING_STOP);
				});
		};

		if (value) {
			dispatch(SET_IS_LOADING_START);
			fetchData();
		}
	};

	const putTodo = (editId, value) => {
		dispatch(SET_IS_LOADING_START);

		fetch(`http://localhost:3005/todos/${editId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ title: value, completed: false }),
		})
			.then(() => {
				dispatch(RESET_VALUE);
				dispatch(RESET_EDIT_ID);
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

	const exitEditMode = () => {
		dispatch(RESET_EDIT_ID);
		dispatch(RESET_VALUE);
	};

	const onSort = () => {
		dispatch(setOnSort(!isSorted));
		dispatch(setRefreshTodos(!refreshTodos));
	};

	const renderButtons = () => {
		return editId ? (
			<>
				<Button
					name="UPDATE_BUTTON"
					onClick={() => putTodo(editId, value)}
					disabled={isLoading}
				>
					Обновить задачу
				</Button>
				<Button name="CANCEL_BUTTON" onClick={exitEditMode} disabled={isLoading}>
					Отмена
				</Button>
			</>
		) : (
			<Button
				name="ADD_BUTTON"
				onClick={() => postTodo(value)}
				disabled={isLoading}
			>
				Добавить задачу
			</Button>
		);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.title}>Список задач</h1>
			<div className={styles.flexWrapper}>
				<div className={styles.flexLeft}>
					<MainInput inputRef={inputRef} />
					{renderButtons()}
				</div>
				<div className={styles.flexRight}>
					<SearchInput />
					<Button
						name="SORT_BUTTON"
						onClick={onSort}
						disabled={isLoading || editId}
						isSorted={isSorted}
					>
						ABab
					</Button>
				</div>
			</div>
			<SearchMsg />
			<ErrorMsg />
			<TodosField />
		</div>
	);
};
