import { Link } from "react-router-dom";
import Cart from "../imgs/shopping-cart-icon.png";
import Wishlist from "../imgs/heart-icon.png";

const Navbar = () => {
	return (
		<nav>
			<div className="navbar">
				<div className="navbarBrand">
					<Link to={"/"} className="navbar-brand">
						<h1>The Store</h1>
					</Link>
				</div>
				<div className="navbarButtonsGroup">
					<div className="navbarLeftButtonsGroup">
						<Link to="/mens">
							<button>Men</button>
						</Link>
						<Link to="/womens">
							<button>Women</button>
						</Link>
						<Link to="/jewelery">
							<button>Jewelry</button>
						</Link>
						<Link to="/electronics">
							<button>Electronics</button>
						</Link>
					</div>
					<div className="navbarRightButtonsGroup">
						<Link to="/wishlist">
							<img src={Wishlist} className="navbarIcons" />
						</Link>
						<Link to="/cart">
							<img src={Cart} className="navbarIcons" />
						</Link>
					</div>
				</div>
			</div>
			<div className="second-navbar">
				<div>
					<p>The Store card - get up to 50% off</p>
				</div>
				<div>
					<p>Free standard shipping over 50€</p>
				</div>
				<div>
					<p>
						Shop now, pay later.
						<Link style={{ color: "black" }}> Learn more</Link>
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
