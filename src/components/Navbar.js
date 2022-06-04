import React from "react";
import { Link } from "react-router-dom";
import img from "../img-logo/19509.jpg";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-left">
				<img src={img} alt="img" />
			</div>
			<div className="nav-right">
				<Link to="/" className="navbar-button">Home</Link>
				<Link to="about" className="navbar-button">About</Link>
			</div>
		</nav>
	);
}

export default Navbar;