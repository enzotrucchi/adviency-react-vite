import React, { useState } from "react";

const Gift = ({ item, onDelete }) => {
	const [newValue, setNewValue] = useState(item);

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
				<span className="giftTitle">
					{item.name} x {item.quantity}
				</span>

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

	return <div>{GiftItem()}</div>;
};

export default Gift;
