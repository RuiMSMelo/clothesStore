import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Item from "./Components/Item";
import Jewelry from "./Components/Jewelry";
import Electronics from "./Components/Electronics";
import Cart from "./Components/Cart";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/mens" element={<Mens />} />
			<Route path="/womens" element={<Womens />} />
			<Route path="/jewelery" element={<Jewelry />} />
			<Route path="/electronics" element={<Electronics />} />
			<Route path="/item/:id" element={<Item />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
		</Routes>
	);
}

export default App;
