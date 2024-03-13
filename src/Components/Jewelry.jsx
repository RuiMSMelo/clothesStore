import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Mens = () => {
	const [jeweleryData, setJeweleryData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const options = {
		method: "GET",
		url: "https://fakestoreapi.com/products/category/jewelery",
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			setJeweleryData(response.data);
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
				<div className="itemsMainDiv">
					<div className="itemsMainDivTitle">
						<h1>Jewelery</h1>
					</div>
					<div className="item-cardDiv">
						{jeweleryData.map((item) => (
							<div key={item.id} className="item-card">
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
									<h4>
										{item.title.length > 40
											? `${item.title.slice(0, 40)}...`
											: item.title}
									</h4>
								</div>
								<div>
									<p style={{ color: "grey", fontWeight: "800" }}>
										{item.price}€
									</p>
									<p>
										{item.rating.rate} • {item.rating.count} Votes
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Mens;
