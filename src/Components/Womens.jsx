import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Navbar from "./Navbar";

const Mens = () => {
	const [womensData, setWomensData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const options = {
		method: "GET",
		url: "https://kohls.p.rapidapi.com/products/list",
		params: {
			limit: "24",
			offset: "1",
			dimensionValueID: "Gender:Womens",
		},
		headers: {
			"X-RapidAPI-Key": "c8692ba461mshea48716bc3fc8bcp13f13djsn423c425332cb",
			"X-RapidAPI-Host": "kohls.p.rapidapi.com",
		},
	};

	const getData = async () => {
		try {
			const response = await axios.request(options);
			setWomensData(response.data.payload.products);
			console.log(response);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	console.log("womens data: ", womensData);

	return (
		<div>
			{isLoading === true ? (
				<div className="loading_screen">
					<h1>Fetching Women&apos;s clothing...</h1>
					<ThreeCircles color={"#4d61a9"} />
				</div>
			) : (
				<div>
					<Navbar />
					<h1>Women&apos;s clothing</h1>
					{womensData.map((item) => (
						<div key={item.webID}>
							{item.prices[0].promotion === null ? (
								<br />
							) : (
								<p>{item.prices[0].promotion}!</p>
							)}
							<div className="productImageDiv">
								<img
									className="productMainImage"
									src={item.image.url}
									alt=""
									style={{ width: "120px" }}
									onMouseOver={(e) => {
										e.currentTarget.src =
											item.altImageUrl === null
												? item.image.url
												: item.altImageUrl;
									}}
									onMouseOut={(e) => {
										e.currentTarget.src = item.image.url;
									}}
								/>
								<div className="swatchImagesDiv">
									{item.swatchImages.length === 0
										? null
										: item.swatchImages.map((image) => (
												<img
													key={image.URL}
													src={image.URL}
													style={{ width: "16px" }}
													alt="Swatch"
												/>
										  ))}
								</div>
							</div>
							<div>
								<p>Usual price: {item.prices[0].regularPrice.minPrice}€</p>
								{item.prices[0].salePrice === null ? (
									<p></p>
								) : (
									<p>
										Our price: {item.prices[0].salePrice.minPrice}€ •{" "}
										{Math.round(
											((item.prices[0].regularPrice.minPrice -
												item.prices[0].salePrice.minPrice) /
												item.prices[0].regularPrice.minPrice) *
												1000
										) / 10}
										% cheaper!{" "}
									</p>
								)}
							</div>
							<p>{item.productTitle}</p>
							<p>
								{item.rating.avgRating === null ? null : item.rating.avgRating}{" "}
								<span style={{ opacity: 0.6 }}>
									• {item.rating.count === null ? "0" : item.rating.count} Votes
								</span>
							</p>
							<hr />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Mens;
