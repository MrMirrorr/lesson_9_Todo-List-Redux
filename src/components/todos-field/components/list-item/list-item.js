import styles from './list-item.module.css';
import iconPencil from './icons/pencil.svg';
import iconDelete from './icons/delete.svg';
import { Checkbox } from './components';
import { Button } from '../../../../components';
import { useSelector } from 'react-redux';
import { selectEditId } from '../../../../selectors';

export const ListItem = ({ id, title, completed }) => {
	const editId = useSelector(selectEditId);

	return (
		<li
			className={
				editId && id === editId
					? `${styles.listItem} ${styles.editing}`
					: styles.listItem
			}
		>
			<Checkbox
				completed={completed}
				// onChangeCheckboxRequest={(completed) =>
				// 	requestPutTodo(id, title, completed)
				// }
			/>
			<div className={styles.itemText}>{title}</div>
			<div className={styles.itemControls}>
				{/* <Button
					name="EDIT_BUTTON"
					onClick={() => setEditId(id)}
					disabled={isRequestPutLoading || isRequestDeleteLoading}
				>
					<img src={iconPencil} alt="Редактировать" width={24} />
				</Button>
				<Button
					name="DELETE_BUTTON"
					onClick={() => requestDeleteTodo(id)}
					disabled={isRequestDeleteLoading || editId}
				>
					<img src={iconDelete} alt="Удалить" width={24} />
				</Button> */}
			</div>
		</li>
	);
};
