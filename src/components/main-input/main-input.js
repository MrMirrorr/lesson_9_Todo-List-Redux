import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from '../../selectors';
import styles from './main-input.module.css';
import { setValue } from '../../actions/options-actions';

export const MainInput = ({ inputRef }) => {
	const dispatch = useDispatch();
	const value = useSelector(selectValue);

	const onChangeMainInput = (e) => {
		dispatch(setValue(e.target.value));
	};

	return (
		<input
			className={styles.input}
			type="text"
			name="todo"
			placeholder="Введите текст задачи..."
			autoComplete="off"
			value={value}
			onChange={onChangeMainInput}
			ref={inputRef}
		/>
	);
};
