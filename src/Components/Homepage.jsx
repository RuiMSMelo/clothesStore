import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
	fetch("https://fakestoreapi.com/products").then((res) => res.json());
	fetch("https://fakestoreapi.com/products/categories").then((res) =>
		res.json()
	);

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
				<button>
					<Link to="/jewelery">Shop jewelery</Link>
				</button>
				<button>
					<Link to="/electronics">Shop electronics</Link>
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
