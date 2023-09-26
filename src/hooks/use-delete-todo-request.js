import { useState } from 'react';

export const useDeleteTodoRequest = (refreshTodos, setRefreshTodos) => {
	const [isRequestDeleteLoading, setIsRequestDeleteLoading] = useState(false);

	const requestDeleteTodo = (id) => {
		setIsRequestDeleteLoading(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).finally(() => {
			setIsRequestDeleteLoading(false);
			setRefreshTodos(!refreshTodos);
		});
	};

	return { requestDeleteTodo, isRequestDeleteLoading };
};
