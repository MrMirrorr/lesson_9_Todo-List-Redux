import { ACTION_TYPE } from '../actions';
import { RESET_ERROR_MESSAGE, setErrorMessage } from './options-actions';

export const setTodos = (data) => ({
	type: ACTION_TYPE.SET_TODOS,
	payload: data,
});

export const SET_IS_LOADING_START = {
	type: ACTION_TYPE.SET_IS_LOADING_START,
	payload: true,
};

export const SET_IS_LOADING_STOP = {
	type: ACTION_TYPE.SET_IS_LOADING_STOP,
	payload: false,
};

export const setEditId = (id) => ({
	type: ACTION_TYPE.SET_EDIT_ID,
	payload: id,
});

export const RESET_EDIT_ID = {
	type: ACTION_TYPE.RESET_EDIT_ID,
	payload: '',
};

export const getTodos = (searchValue, isSorted) => (dispatch) => {
	let url = 'http://localhost:3005/todos?';

	if (searchValue) {
		url += `&title_like=${searchValue}`;
	}

	if (isSorted) {
		url += '&_sort=title&_order=asc';
	}

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();

			dispatch(RESET_ERROR_MESSAGE);
			dispatch(setTodos(data));
		} catch (error) {
			dispatch(
				setErrorMessage(
					'Ошибка при запросе данных от сервера! Обновите страницу либо попробуйте еще раз позднее...',
				),
			);
			console.error('Ошибка при запросе:', error);
		} finally {
			dispatch(SET_IS_LOADING_STOP);
		}
	};

	dispatch(SET_IS_LOADING_START);

	fetchData();
};
