import React, { useState } from "react";

import "./newGift.css";

const NewGift = ({ onCreate }) => {
	const [gift, setGift] = useState({
		name: "",
		quantity: 0,
		image: "",
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
			image: "",
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

	function handleChangeImage(e) {
		setGift({
			...gift,
			image: e.target.value,
		});
	}

	return (
		<form className="newGiftForm" onSubmit={handleSubmit}>
			<input
				style={{ width: "200px" }}
				className="newGiftInputName"
				onChange={handleChange}
				type="text"
				value={gift.name}
			></input>

			<input
				style={{ width: "100px" }}
				type="text"
				onChange={handleChangeImage}
				value={gift.image}
			/>

			<input
				style={{ width: "50px" }}
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
