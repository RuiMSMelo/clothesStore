import { useContext } from "react";
import { CartContext } from "../Contexts/Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Cart = () => {
	const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
		useContext(CartContext);

	return (
		<div>
			<Navbar />
			<div className="mainContent">
				<div className="itemsMainDiv">
					<TransitionGroup component={null}>
						{cartItems.map((item) => (
							<CSSTransition key={item.id} timeout={200} classNames="item">
								<div className="cartItemsDiv">
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
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				{cartItems.length > 0 ? (
					<div className="cartSummary">
						<h2>{`Total: ${getCartTotal()}€`}</h2>
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
						<h2 className="emptyCartMessage">Your cart is empty!</h2>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
