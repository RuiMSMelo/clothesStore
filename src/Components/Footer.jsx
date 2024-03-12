import { Link } from "react-router-dom";
import socialMediaIcons from "../imgs/socialmedia_iconset1.png";
import visaIcon from "../imgs/visa_icon.png";
import mastercardIcon from "../imgs/mastercard_icon.png";
import amexIcon from "../imgs/amex_icon.png";

const Footer = () => {
	return (
		<div className="footerDiv">
			<div className="footerLeftDiv">
				<Link>About</Link>
				<Link>Careers</Link>
				<Link>Contact us</Link>
				<Link>Help</Link>
				<Link>Privacy Policy</Link>
			</div>
			<div className="footerMiddleDiv">
				<p>Follow us on:</p>
				<Link>
					<img src={socialMediaIcons} className="socialmedia-icons" />
				</Link>
			</div>
			<div className="footerRightDiv">
				<img src={visaIcon} className="acceptedCardsIcons" />
				<img src={mastercardIcon} className="acceptedCardsIcons" />
				<img src={amexIcon} className="acceptedCardsIcons" />
			</div>
		</div>
	);
};

export default Footer;
