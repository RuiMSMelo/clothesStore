import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mainImage from "../imgs/main_image.jpg";

const Homepage = () => {
	fetch("https://fakestoreapi.com/products").then((res) => res.json());
	fetch("https://fakestoreapi.com/products/categories").then((res) =>
		res.json()
	);

	return (
		<div>
			<Navbar />
			<div className="itemsMainDiv">
				<div className="homepageMainImageDiv">
					<img src={mainImage} className="homepageMainImage" />
				</div>
				<div className="homepageButtonsDiv">
					<Link to="/mens">
						<button>Shop for men</button>
					</Link>
					<Link to="/womens">
						<button>Shop for women</button>
					</Link>
					<Link to="/jewelery">
						<button>Shop jewelery</button>
					</Link>
					<Link to="/electronics">
						<button>Shop electronics</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
