import { useSelector } from 'react-redux';
import styles from './search-msg.module.css';
import { selectSearchValue } from '../../selectors';

export const SearchMsg = () => {
	const searchValue = useSelector(selectSearchValue);

	return (
		searchValue && (
			<div
				className={styles.searchMessage}
			>{`Поиск по запросу: "${searchValue}"`}</div>
		)
	);
};
