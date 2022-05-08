import React from "react";
import "../styles/font.css";
import "../styles/info.css";
import "../styles/zindex.css";
import EucalyptusBouquet from "../img/eucalyptus_bouquet_03.png";
import CustomBouquet1 from "../img/custom_bouquet_01.png";


const Info = () => {
	return (
		<article className="card">
			<div className="info_container z1">
				<img className="bouquet1 z2" alt="bouquet" src={EucalyptusBouquet} />
				<img className="bouquet2 z2" alt="bouquet" src={CustomBouquet1} />

				<h2 className="waterbrush invitation z3">Meghívó</h2>

				<div className="spectral_sc dear_all z3">
					Kedves Családunk és Barátaink!
				</div>

				<p className="spectral_sc announce z3">
					Örömmel tudatjuk veletek, hogy úgy döntöttünk,
					szerelmünket házassággal pecsételjük meg.
					Szeretettel értesítünk, hogy
				</p>

				<div className="spectral the_date z3">2022. október 1-én</div>

				<p className="spectral_sc eternal z3">
					örök hűséget fogadunk egymásnak.
					A szertartást és vacsorát követően megkezdjük a hajnalig tartó
					közös ünneplést.
				</p>

				<div className="line"></div>

				<section className="spectral_sc happening z3">
					<strong>Esküvő</strong>
					<div className="happening_time">16:30</div>
					<div>Páduai Szent Antal templom</div>
					<div>Baja, Bartók Béla utca 5.</div>
				</section>

				<section className="spectral_sc happening z3">
					<strong>Lakodalom</strong>
					<div className="happening_time">18:00</div>
					<div>Turisztikai központ</div>
					<div>Baja, Petőfi sziget 11.</div>
				</section>

				<div className="waterbrush come z3">Szeretettel várunk!</div>

				<q className="spectral gift z3">
					Ajándékon ne tört fejed,
					<br />
					Egy borítékban elrejtheted.
				</q>
			</div>
		</article>
	);
};

export default Info;
