import React from "react";
import "../styles/font.css";
import "../styles/info.css";
import "../styles/zindex.css";
import EucalyptusBouquet from "../img/eucalyptus_bouquet_03.png";
import CustomBouquet from "../img/custom_bouquet_01.png";


const InfoEng = () => {
	return (
		<div className="info_container">
			<div className="info_bg" />
			<article className="card">
				<div className="inv_container z1">
				<img className="bouquet1 z2" alt="bouquet" src={EucalyptusBouquet} />
				<img className="bouquet2 z2" alt="bouquet" src={CustomBouquet} />

				<h2 className="waterbrush invitation z3">Wedding invitation</h2>

				<div className="spectral_sc dear_all z3">
					Dear Friends!
				</div>

				<p className="spectral_sc announce z3">
				  Together with our families,
          you are cordinally invited to our wedding on
				</p>

				<div className="spectral the_date z3">1 October 2022</div>

				<p className="spectral_sc eternal z3">
					to witness our vows to each other.
					After the ceremony and the dinner,
          we will start the celebration, until the sun rises
				</p>

				<div className="line"></div>

				<section className="spectral_sc happening z3">
					<strong>Wedding ceremony</strong>
					<div className="happening_time">16:30</div>
					<div>Páduai Szent Antal church</div>
					<div>Baja, Bartók Béla utca 5.</div>
				</section>

				<section className="spectral_sc happening z3">
					<strong>Dinner</strong>
					<div className="happening_time">18:00</div>
					<div>Turisztikai központ</div>
					<div>Baja, Petőfi sziget 11.</div>
				</section>

				<div className="waterbrush come z3">See you soon!</div>

				<q className="spectral gift z3">
					If a gift is on your mind,
					<br />
					A contribution would kind.
				</q>
			</div>
		</article>
		</div>
	);
};

export default InfoEng;
