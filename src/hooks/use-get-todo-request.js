import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSorted, selectRefreshTodos, selectSearchValue } from '../selectors';
import { ACTION_TYPE } from '../actions';

export const useGetTodosRequest = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector(selectSearchValue);
	const isSorted = useSelector(selectIsSorted);
	const refreshTodos = useSelector(selectRefreshTodos);

	let url = 'http://localhost:3005/todos?';

	if (searchValue) {
		url += `&title_like=${searchValue}`;
	}

	if (isSorted) {
		url += '&_sort=title&_order=asc';
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();

				dispatch({ type: ACTION_TYPE.RESET_ERROR_MESSAGE });
			} catch (error) {
				dispatch(
					{ type: ACTION_TYPE.SET_ERROR_MESSAGE },
					'Ошибка при запросе данных от сервера! Обновите страницу либо попробуйте еще раз позднее...',
				);
				console.error('Ошибка при запросе:', error);
			} finally {
				dispatch({ type: ACTION_TYPE.SET_IS_LOADING_STOP });
			}
		};

		dispatch({ type: ACTION_TYPE.SET_IS_LOADING_START });
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshTodos]);
};
