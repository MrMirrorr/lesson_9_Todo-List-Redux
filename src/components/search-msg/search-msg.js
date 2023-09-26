import styles from './search-msg.module.css';

export const SearchMsg = () => {
	return (
		searchValue && (
			<div
				className={styles.searchMessage}
			>{`Поиск по запросу: "${searchValue}"`}</div>
		)
	);
};
