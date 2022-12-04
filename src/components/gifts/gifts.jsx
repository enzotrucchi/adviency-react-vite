import React, { useState } from "react";
import Gift from "./gift";

import "./gifts.css";
import NewGift from "./newGift";

const Gifts = () => {
	const [regalos, setRegalos] = useState(["Camiseta", "Medias", "Calzones"]);

	function addGift(gift) {
		setRegalos([...regalos, gift]);
	}

	function editGift(gift) {
		const index = regalos.indexOf(gift);
		const newGift = prompt("Editar regalo", gift);
		const newGifts = [...regalos];
		newGifts[index] = newGift;
		setRegalos(newGifts);
	}

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			<NewGift onCreate={addGift} />

			{regalos.map((regalo, index) => {
				return <Gift item={regalo} key={index} onEdit={editGift} />;
			})}
		</div>
	);
};

export default Gifts;
