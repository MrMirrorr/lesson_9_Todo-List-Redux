import { useDispatch, useSelector } from 'react-redux';
import styles from './search-input.module.css';
import { selectEditId, selectSearchValue } from '../../selectors';
import { setSearchValue } from '../../actions/options-actions';

export const SearchInput = () => {
	const dispatch = useDispatch();
	const editId = useSelector(selectEditId);
	const searchValue = useSelector(selectSearchValue);

	const onChangeSearchValue = (e) => {
		dispatch(setSearchValue(e.target.value));
	};

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
