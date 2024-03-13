import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./Contexts/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<CartProvider>
				<App />
			</CartProvider>
		</HashRouter>
	</React.StrictMode>
);
