import { useEffect, useState } from 'react';
import { useDebounce } from '.';

export const useSearchTodo = (refreshTodos, setRefreshTodos) => {
	const [searchValue, setSearchValue] = useState('');
	const [isDirty, setIsDirty] = useState(false);

	const debouncedSearchValue = useDebounce(searchValue, 1000);

	const onChangeSearchValue = ({ target }) => {
		setSearchValue(target.value);
		setIsDirty(true);
	};

	useEffect(() => {
		if (isDirty) {
			setRefreshTodos(!refreshTodos);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchValue]);

	return { searchValue, onChangeSearchValue, debouncedSearchValue };
};
