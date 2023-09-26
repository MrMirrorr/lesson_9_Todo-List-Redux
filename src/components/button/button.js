import styles from './button.module.css';

export const Button = ({ children, name, onClick, disabled, isSorted }) => {
	const getClassName = () => {
		switch (name) {
			case 'ADD_BUTTON':
				return 'addBtn';
			case 'UPDATE_BUTTON':
				return 'updateBtn';
			case 'CANCEL_BUTTON':
				return 'cancelBtn';
			case 'EDIT_BUTTON':
				return 'editBtn';
			case 'DELETE_BUTTON':
				return 'deleteBtn';
			case 'SORT_BUTTON':
				return isSorted ? 'sortBtnSorted' : 'sortBtn';
			default:
				break;
		}
	};

	return (
		<button className={styles[getClassName()]} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
