import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import LatestDeals from "./Components/LatestDeals";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Item from "./Components/Item";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/latestdeals" element={<LatestDeals />} />
			<Route path="/mens" element={<Mens />} />
			<Route path="/womens" element={<Womens />} />
			<Route path="/item/:id" element={<Item />}></Route>
		</Routes>
	);
}

export default App;
