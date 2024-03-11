import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Womens = () => {
	const [womensData, setWomensData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const options = {
		method: "GET",
		url: "https://fakestoreapi.com/products/category/women's clothing",
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			setWomensData(response.data);
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
			{isLoading === true ? (
				<div className="loading_screen">
					<ThreeCircles color={"#4d61a9"} />
				</div>
			) : (
				<div>
					<h1>Women&apos;s clothing</h1>
					{womensData.map((item) => (
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
			<Footer />
		</div>
	);
};

export default Womens;
