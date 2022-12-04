import React, { useState } from "react";
import Gift from "./gift";

import "./gifts.css";

const Gifts = () => {
	const [regalos, setRegalos] = useState(["Camiseta", "Medias", "Calzones"]);

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			<ul>
				{regalos.map((regalo, index) => {
					return <Gift item={regalo} key={index} />;
				})}
			</ul>
		</div>
	);
};

export default Gifts;
