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
			<div className="itemsMainDiv">
				{cartItems.map((item) => (
					<div key={item.id}>
						<div>
							<img src={item.image} style={{ width: "100px" }} />
							<h4>{item.title}</h4>
							<p>{item.price}</p>
						</div>
						<div>
							<button onClick={() => removeFromCart(item)}>-</button>
							<p>{item.quantity}</p>
							<button onClick={() => addToCart(item)}>+</button>
						</div>
					</div>
				))}
			</div>
			{cartItems.length > 0 ? (
				<div>
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
				<div className="itemsMainDiv">
					<h2>Your cart is empty!</h2>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Cart;
