import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Mens = () => {
	const [mensData, setMensData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const options = {
		method: "GET",
		url: "https://fakestoreapi.com/products/category/men's clothing",
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			setMensData(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	console.log("mens data: ", mensData);

	return (
		<div>
			{isLoading === true ? (
				<div className="loading_screen">
					<h1>Fetching men&apos;s clothing...</h1>
					<ThreeCircles color={"#4d61a9"} />
				</div>
			) : (
				<div>
					<Navbar />
					<h1>Men&apos;s clothing</h1>
					{mensData.map((item) => (
						<div key={item.id}>
							<div>
								<Link to={`/item/${item.id}`}>
									<img
										className="productMainImage"
										src={item.image}
										alt=""
										style={{ width: "120px" }}
									/>
								</Link>
							</div>
							<div>
								<h3>{item.title}</h3>
								<p>{item.price}€</p>
								<p>
									{item.rating.rate} • {item.rating.count} Votes
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Mens;
