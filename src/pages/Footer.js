import React from "react";
import facebook from "../icon/facebook.svg";
import github from "../icon/github.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<h3 className="footer-title">nguyenpatz</h3>
				<p>Contact me</p>
				<div className="contact-link">
					<a href="https://www.facebook.com/profile.php?id=100027709310564">
						<img src={facebook} alt="" />
					</a>
					<a href="https://github.com/nguyenpatz/react-cocktail">
						<img src={github} alt="" />
					</a>
				</div>
		</footer>
	)
}

export default Footer;