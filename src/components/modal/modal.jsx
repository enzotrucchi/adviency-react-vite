import React from "react";
import NewGift from "../gifts/newGift/newGift";
import "./modal.scss";

const Modal = ({ isOpen = false, onCloseRequest, onAdd }) => {
	if (!isOpen) {
		return null;
	}

	function addGift() {
		onAdd();
	}

	return (
		<div className="modal">
			<h2>Agregar Regalo</h2>

			<div className="content">
				<NewGift onAdd={addGift} />
			</div>

			<div className="actions">
				<button className="btn-red" onClick={onCloseRequest}>
					CANCELAR
				</button>
				<button className="toggle-button">OK</button>
			</div>
		</div>
	);
};

export default Modal;
