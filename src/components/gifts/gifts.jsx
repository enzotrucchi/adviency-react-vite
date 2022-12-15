import React, { useEffect, useState } from "react";
import Gift from "./gift";

import "./gifts.css";
// import NewGift from "./newGift/newGift";

import Modal from "../modal/modal";

const Gifts = () => {
	const CACHE_KEY = "ADVIENCY_GIFTS";
	const [regalos, setRegalos] = useState([]);
	const [runEffect, setRunEffect] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const localData = localStorage.getItem(CACHE_KEY);
		if (localData) {
			setRegalos(JSON.parse(localData));
		}
	}, []);

	//useEffect for setRegalos
	//prevent this on first render
	useEffect(() => {
		if (runEffect) {
			localStorage.setItem(CACHE_KEY, JSON.stringify(regalos));
		}
	}, [runEffect, regalos]);

	function addGift(gift) {
		if (regalos.find((regalo) => regalo.name === gift.name)) {
			alert("El regalo ya existe");
			return;
		}

		setRegalos([...regalos, gift]);
	}

	function deleteGift(gift) {
		const newGifts = regalos.filter((regalo) => regalo !== gift);

		setRegalos(newGifts);
	}

	function handleDeleteAll() {
		setRegalos([]);
	}

	const onModalCloseRequest = () => {
		setIsModalOpen(false);
	};

	// setRunEffect to true after first render
	useEffect(() => {
		setRunEffect(true);
	}, []);

	return (
		<div className="giftsList">
			<h1>Lista de Regalos</h1>

			{/* <NewGift onCreate={addGift} /> */}
			<button type="button" className="" onClick={setIsModalOpen}>
				AGREGAR
			</button>

			<Modal
				isOpen={isModalOpen}
				onAddGift={addGift}
				onCloseRequest={onModalCloseRequest}
			/>

			<h3>{regalos.length === 0 && "No hay regalos, agrega uno ahora!"}</h3>

			{regalos.map((regalo, index) => {
				return <Gift item={regalo} key={index} onDelete={deleteGift} />;
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
