import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
	//remove this when finished
	fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((json) => console.log("ALL: ", json));

	fetch("https://fakestoreapi.com/products/categories")
		.then((res) => res.json())
		.then((json) => console.log(json));

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
