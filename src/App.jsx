import { useState } from "react";

//css
import "./App.css";

function App() {
	const [regalos, setRegalos] = useState(["Camiseta", "Medias", "Calzones"]);

	return (
		<div className="App">
			<h1>Lista de Regalos</h1>

			<ul>
				{regalos.map((regalo, index) => {
					return <li key={index}>{regalo}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
