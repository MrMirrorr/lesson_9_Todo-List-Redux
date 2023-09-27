import { useDispatch, useSelector } from 'react-redux';
import styles from './search-input.module.css';
import { selectEditId, selectSearchValue } from '../../selectors';
import { setSearchValue } from '../../actions/options-actions';
import { useSearchTodo } from '../../hooks';
import { useEffect } from 'react';

export const SearchInput = () => {
	const dispatch = useDispatch();
	const editId = useSelector(selectEditId);
	const searchValueFromRedux = useSelector(selectSearchValue);

	const { searchValue, onChangeSearchValue, debouncedSearchValue } = useSearchTodo();

	useEffect(() => {
		if (debouncedSearchValue !== searchValueFromRedux) {
			dispatch(setSearchValue(debouncedSearchValue));
		}
	}, [debouncedSearchValue, dispatch, searchValueFromRedux]);

	return (
		<>
			<input
				className={styles.input}
				type="search"
				name="search"
				placeholder="Поиск..."
				autoComplete="off"
				disabled={editId}
				value={searchValue}
				onChange={(e) => onChangeSearchValue(e)}
			/>
		</>
	);
};
