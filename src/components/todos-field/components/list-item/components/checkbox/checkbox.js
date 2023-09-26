import { useState } from 'react';
import styles from './checkbox.module.css';

export const Checkbox = ({ completed, onChangeCheckboxRequest }) => {
	const [isChecked, setIsChecked] = useState(completed);

	const onCheckboxChange = () => {
		onChangeCheckboxRequest(!isChecked);
		setIsChecked(!isChecked);
	};

	return (
		<input
			className={styles.checkbox}
			type="checkbox"
			checked={isChecked}
			onChange={onCheckboxChange}
		/>
	);
};
