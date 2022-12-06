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

	function editGift(gift, newValue) {
		const index = regalos.indexOf(gift);
		const newGifts = [...regalos];
		newGifts[index] = newValue;
		setRegalos(newGifts);
	}

	function deleteGift(gift) {
		const newGifts = regalos.filter((regalo) => regalo !== gift);

		setRegalos(newGifts);
	}

	function handleDeleteAll() {
		setRegalos([]);
	}

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			<NewGift onCreate={addGift} />

			<h3>{regalos.length === 0 && "No hay regalos, agrega uno ahora!"}</h3>

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

			{regalos.length > 0 && (
				<button
					onClick={handleDeleteAll}
					className="deleteButton"
					type="button"
				>
					Borrar lista
				</button>
			)}
		</div>
	);
};

export default Gifts;
