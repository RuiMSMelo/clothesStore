import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Item = () => {
	const itemId = useParams();
	const [itemData, setItemData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

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
					<p>product code: {itemData.id}</p>
				</div>
			)}
		</div>
	);
};

export default Item;
