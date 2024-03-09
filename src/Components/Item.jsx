import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Item = () => {
	const itemId = useParams();
	const [itemData, setItemData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	console.log("itemId:", itemId.id);

	const options = {
		method: "GET",
		url: "https://kohls.p.rapidapi.com/products/detail",
		params: { webID: `${itemId.id}` },
		headers: {
			"X-RapidAPI-Key": "c8692ba461mshea48716bc3fc8bcp13f13djsn423c425332cb",
			"X-RapidAPI-Host": "kohls.p.rapidapi.com",
		},
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			console.log("response: ", response);
			setItemData(response.data.payload.products[0]);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [itemId]);

	console.log("single item data: ", itemData);

	return (
		<div>
			<Navbar />
			{isLoading ? (
				<div>
					<ThreeCircles color={"#4d61a9"} />
				</div>
			) : (
				<div>
					<img src={itemData.images[0].url} alt="" />
					<h2>{itemData.brand}</h2>
					<h3>{itemData.productTitle}</h3>
					<p>{itemData.description.shortDescription}</p>
				</div>
			)}
		</div>
	);
};

export default Item;
