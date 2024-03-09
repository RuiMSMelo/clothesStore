import { Link } from "react-router-dom";
import banner from "../imgs/random_clothing_banner.jpg";

const Navbar = () => {
	return (
		<nav>
			<button>
				<Link to="/mens">Men</Link>
			</button>
			<button>
				<Link to="/womens">Women</Link>
			</button>
			<Link to={"/"}>
				<img src={banner} style={{ height: "150px" }} />
			</Link>
			<button>
				<Link to="/wishlist">Wishlist</Link>
			</button>
			<button>
				<Link to="/cart">Cart</Link>
			</button>
		</nav>
	);
};

export default Navbar;
