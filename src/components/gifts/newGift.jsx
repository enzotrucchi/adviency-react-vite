import React, { useState } from "react";

const NewGift = ({ onCreate }) => {
	const [gift, setGift] = useState("");

	function handleClick(e) {
		e.preventDefault();
		console.log("The link was clicked.");
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (gift === "") {
			return;
		}

		onCreate(gift);

		setGift("");
	}

	function handleChange(e) {
		setGift(e.target.value);
	}

	return (
		<form className="newGiftForm" onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" value={gift}></input>

			<button type="submit" className="newGiftButton">
				Agregar
			</button>
		</form>
	);
};

export default NewGift;
