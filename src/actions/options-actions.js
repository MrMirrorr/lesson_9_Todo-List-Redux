import { ACTION_TYPE } from '../actions';

export const setRefreshTodos = (value) => ({
	type: ACTION_TYPE.SET_REFRESH_TODOS,
	payload: value,
});

export const setErrorMessage = (message) => ({
	type: ACTION_TYPE.SET_ERROR_MESSAGE,
	payload: message,
});

export const RESET_ERROR_MESSAGE = {
	type: ACTION_TYPE.RESET_ERROR_MESSAGE,
	payload: '',
};

export const setValue = (value) => ({
	type: ACTION_TYPE.SET_VALUE,
	payload: value,
});

export const RESET_VALUE = {
	type: ACTION_TYPE.RESET_VALUE,
	payload: '',
};

export const setSearchValue = (value) => ({
	type: ACTION_TYPE.SET_SEARCH_VALUE,
	payload: value,
});

export const RESET_SEARCH_VALUE = {
	type: ACTION_TYPE.RESET_SEARCH_VALUE,
	payload: '',
};

export const setOnSort = (value) => ({
	type: ACTION_TYPE.SET_ON_SORT,
	payload: value,
});
