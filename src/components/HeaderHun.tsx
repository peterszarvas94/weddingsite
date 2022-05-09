import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/font.css";

const HeaderHun = () => {
	return (
		<>
			<div className='couplepicture'>
				<h1 className="roseville maintitle">Adri&nbsp; &amp;Peti</h1>
				<Link to={'/en'} className="language">
					ENGLISH
				</Link>
			</div>
		</>
	);
};

export default HeaderHun;
