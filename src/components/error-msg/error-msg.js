import styles from './error-msg.module.css';

export const ErrorMsg = ({ children }) => {
	return <div className={styles.error}>{children}</div>;
};
