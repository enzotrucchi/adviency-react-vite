import React, { useState } from "react";
import Gift from "./gift";

import "./gifts.css";
import NewGift from "./newGift";

const Gifts = () => {
	const [regalos, setRegalos] = useState(["Camiseta", "Medias", "Calzones"]);

	function addGift(gift) {
		setRegalos([...regalos, gift]);
	}

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			<NewGift onCreate={addGift} />

			<ul>
				{regalos.map((regalo, index) => {
					return <Gift item={regalo} key={index} />;
				})}
			</ul>
		</div>
	);
};

export default Gifts;
