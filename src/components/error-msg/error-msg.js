import { useSelector } from 'react-redux';
import styles from './error-msg.module.css';
import { selectErrorMsg } from '../../selectors';

export const ErrorMsg = () => {
	const errorMsg = useSelector(selectErrorMsg);

	return errorMsg && <div className={styles.error}>{errorMsg}</div>;
};
