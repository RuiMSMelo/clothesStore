import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
	return (
		<div>
			<Navbar />
			<h1>Welcome to SUPER COOL Clothes Store</h1>
			<div>
				<button>
					<Link to="/latestdeals">Latest Deals</Link>
				</button>
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
