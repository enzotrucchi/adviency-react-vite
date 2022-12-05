import React from "react";

const Gift = ({ item, onEdit, onDelete }) => {
	function handleClick() {
		onEdit(item);
	}

	function handleDelete() {
		onDelete(item);
	}

	return (
		<div className="giftItem">
			<span className="giftTitle">{item}</span>
			<button onClick={handleClick} type="button" className="updateButton">
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
};

export default Gift;
