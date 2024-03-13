import { useContext } from "react";
import { CartContext } from "../Contexts/Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
	const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
		useContext(CartContext);

	return (
		<div>
			<Navbar />
			<div className="mainContent">
				<div className="itemsMainDiv">
					{cartItems.map((item) => (
						<div key={item.id} className="cartItemsDiv">
							<div className="cartCard">
								<img src={item.image} style={{ width: "100px" }} />
							</div>
							<div>
								<h4>{item.title}</h4>
								<p>{item.price}</p>
							</div>
							<div className="cartButtons">
								<button onClick={() => removeFromCart(item)}>-</button>
								<p>{item.quantity}</p>
								<button onClick={() => addToCart(item)}>+</button>
							</div>
						</div>
					))}
				</div>
				{cartItems.length > 0 ? (
					<div className="cartSummary">
						<h2>{`Total: ${getCartTotal()}`}</h2>
						<button
							onClick={() => {
								clearCart();
							}}
						>
							Clear Cart
						</button>
					</div>
				) : (
					<div className="emptyCart">
						<h2>Your cart is empty!</h2>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
