import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
	fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((json) => console.log("fakestoreapi: ", json));
	fetch("https://fakestoreapi.com/products/20")
		.then((res) => res.json())
		.then((json) => console.log("one product", json));
	return (
		<div>
			<Navbar />
			<h1>Welcome to SUPER COOL Clothes Store</h1>
			<div>
				<button>
					<Link to="/mens">Shop for men</Link>
				</button>
				<button>
					<Link to="/womens">Shop for women</Link>
				</button>
			</div>
		</div>
	);
};

export default Homepage;
