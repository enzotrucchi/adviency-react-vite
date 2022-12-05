import React, { useState } from "react";
import Gift from "./gift";

import "./gifts.css";
import NewGift from "./newGift";

const Gifts = () => {
	const [regalos, setRegalos] = useState(["Camiseta", "Medias", "Calzones"]);

	function addGift(gift) {
		if (regalos.includes(gift)) {
			alert("El regalo ya existe");
			return;
		}

		setRegalos([...regalos, gift]);
	}

	function editGift(gift) {
		const index = regalos.indexOf(gift);
		const newGift = prompt("Editar regalo", gift);
		const newGifts = [...regalos];
		newGifts[index] = newGift;
		setRegalos(newGifts);
	}

	function deleteGift(gift) {
		const newGifts = regalos.filter((regalo) => regalo !== gift);

		setRegalos(newGifts);
	}

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			<NewGift onCreate={addGift} />

			{regalos.map((regalo, index) => {
				return (
					<Gift
						item={regalo}
						key={index}
						onEdit={editGift}
						onDelete={deleteGift}
					/>
				);
			})}
		</div>
	);
};

export default Gifts;
