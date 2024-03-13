import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartContext } from "../Contexts/Cart";

const Item = () => {
	const itemId = useParams();
	const [itemData, setItemData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const { cartItems, addToCart } = useContext(CartContext);

	const options = {
		method: "GET",
		url: `https://fakestoreapi.com/products/${itemId.id}`,
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			setItemData(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Navbar />
			{isLoading ? (
				<div>
					<ThreeCircles color={"#4d61a9"} />
				</div>
			) : (
				<div>
					<img src={itemData.image} alt="" style={{ height: "300px" }} />
					<h3>{itemData.title}</h3>
					<p>{itemData.description}</p>
					<p>{itemData.price}€</p>
					<button onClick={() => addToCart(itemData)}>Add to Cart</button>
					<div>
						<p>product code: {itemData.id}</p>
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Item;
