import { useState } from 'react';

export const usePutTodoRequest = (refreshTodos, setRefreshTodos, setEditId, setValue) => {
	const [isRequestPutLoading, setIsRequestPutLoading] = useState(false);

	const requestPutTodo = (id, title, completed) => {
		if (completed === undefined) {
			setIsRequestPutLoading(true);
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ title, completed: false }),
			}).finally(() => {
				setValue('');
				setEditId(null);
				setIsRequestPutLoading(false);
				setRefreshTodos(!refreshTodos);
			});
		} else {
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ title, completed }),
			});
		}
	};

	return { requestPutTodo, isRequestPutLoading };
};
