import { useState } from "react";

import "./App.css";

function App() {
	const [regalos, setRegalos] = useState([
		"Caja de bombones",
		"Lapicera",
		"Skate",
	]);

	return (
		<div className="App">
			<h1>Regalos</h1>

			<ul>
				{regalos.map((regalo) => (
					<li>{regalo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
