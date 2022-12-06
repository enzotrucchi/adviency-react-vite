import React, { useState } from "react";

const Gift = ({ item, onEdit, onDelete }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [newValue, setNewValue] = useState(item);

	function handleClick() {
		onEdit(item, newValue);
		setIsEdit(false);
	}

	function handleDelete() {
		onDelete(item);
	}

	function handleChange(e) {
		setNewValue(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function GiftEdit() {
		return (
			<form className="updateGiftForm" onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" value={newValue}></input>

				<button onClick={handleClick} className="updateButton">
					Guardar
				</button>
			</form>
		);
	}

	function GiftItem() {
		return (
			<div className="giftItem">
				<span className="giftTitle">{item}</span>

				<button
					onClick={() => setIsEdit(true)}
					type="button"
					className="updateButton"
				>
					Editar
				</button>

				<button
					type="button"
					className="deleteButton"
					onClick={() => {
						handleDelete(item);
					}}
				>
					Eliminar
				</button>
			</div>
		);
	}

	return <div>{isEdit ? GiftEdit() : GiftItem()}</div>;
};

export default Gift;
