import { ACTION_TYPE } from '../actions';

const optionsInitialState = {
	refreshTodos: false,
	errorMsg: '',
	value: '',
	searchValue: '',
	isSorted: false,
};

export const optionsReducer = (state = optionsInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_ERROR_MESSAGE:
			return {
				...state,
				errorMsg: payload,
			};

		case ACTION_TYPE.RESET_ERROR_MESSAGE:
			return {
				...state,
				errorMsg: payload,
			};

		case ACTION_TYPE.SET_VALUE:
			return {
				...state,
				value: payload,
			};

		case ACTION_TYPE.RESET_VALUE:
			return {
				...state,
				value: payload,
			};

		case ACTION_TYPE.SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: payload,
			};

		case ACTION_TYPE.RESET_SEARCH_VALUE:
			return {
				...state,
				searchValue: payload,
			};

		case ACTION_TYPE.SET_REFRESH_TODOS:
			return {
				...state,
				refreshTodos: payload,
			};

		case ACTION_TYPE.SET_ON_SORT:
			return {
				...state,
				isSorted: payload,
			};

		default:
			return state;
	}
};
