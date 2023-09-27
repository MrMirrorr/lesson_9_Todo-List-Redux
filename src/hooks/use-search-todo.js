import { useEffect, useState } from 'react';
import { useDebounce } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshTodos } from '../selectors';
import { setRefreshTodos } from '../actions/options-actions';

export const useSearchTodo = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isDirty, setIsDirty] = useState(false);
	const refreshTodos = useSelector(selectRefreshTodos);
	const dispatch = useDispatch();

	const debouncedSearchValue = useDebounce(searchValue, 1000);

	const onChangeSearchValue = ({ target }) => {
		setSearchValue(target.value);
		setIsDirty(true);
	};

	useEffect(() => {
		if (isDirty) {
			dispatch(setRefreshTodos(!refreshTodos));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchValue]);

	return { searchValue, onChangeSearchValue, debouncedSearchValue };
};
