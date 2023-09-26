import { ACTION_TYPE } from '../actions';

const todosInitialState = {
	todos: [],
	isLoading: true,
	editId: null,
};

export const todosReducer = (state = todosInitialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_TODOS:
			return { ...state, todos: payload };

		case ACTION_TYPE.SET_IS_LOADING_START:
			return {
				...state,
				isLoading: payload,
			};

		case ACTION_TYPE.SET_IS_LOADING_STOP:
			return {
				...state,
				isLoading: payload,
			};

		default:
			return state;
	}
};
