import React, { useState } from "react";

import "./newGift.css";

const NewGift = ({ onCreate }) => {
	const [gift, setGift] = useState({
		name: "",
		quantity: 0,
	});

	function handleSubmit(e) {
		e.preventDefault();

		if (gift.name === "") {
			return;
		}

		onCreate(gift);

		setGift({
			name: "",
			quantity: 1,
		});
	}

	function handleChange(e) {
		setGift({
			...gift,
			name: e.target.value,
		});

		// setGift(e.target.value);
		// e.preventDefault();
	}

	function handleChangeQty(e) {
		setGift({
			...gift,
			quantity: e.target.value,
		});
		// e.preventDefault();
	}

	return (
		<form className="newGiftForm" onSubmit={handleSubmit}>
			<input
				className="newGiftInputName"
				onChange={handleChange}
				type="text"
				value={gift.name}
			></input>

			<input
				className="newGiftInputQty"
				type="number"
				value={gift.quantity}
				onChange={handleChangeQty}
			/>

			<button type="submit">Agregar</button>
		</form>
	);
};

export default NewGift;
