import { useEffect, useRef } from 'react';

export const useFocusInput = (editId, todos, setValue) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (editId) {
			const { title } = todos.find(({ id }) => id === editId);
			setValue(title);
			inputRef.current.focus();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editId]);

	return { inputRef };
};
