import React from "react";

const Gift = ({ item, onEdit }) => {
	function handleClick() {
		onEdit(item);
	}

	return (
		<div className="giftItem">
			<span className="giftTitle">{item}</span>
			<button onClick={handleClick} type="button" className="updateButton">
				Editar
			</button>
		</div>
	);
};

export default Gift;
