import React from "react";
import "../styles/font.css";
import "../styles/info.css";
import EucalyptusBouquet from '../img/eucalyptus_bouquet_03.png'
import CustomBouquet from '../img/custom_bouquet_01.png'

const Info = () => {
	return (
		<article className="info_container">
			<h2 className="waterbrush invitation z3">Meghívó</h2>
			<div className="spectral dear_all z3">Kedves Család és Barátok!</div>
			<p className="spectral announce z3">
				Örömmel tudatjuk veletek, hogy úgy döntöttünk,<br/>
        szerelmünket házassággal pecsételjük meg.<br/>
        Szeretettel értesítünk, hogy
			</p>
			<div className="spectral the_date z3">2022. október 1-én</div>
			<p className="spectral eternal z3">örök hűséget fogadunk egymásnak.</p>

      <img className="bouquet1 z2" alt="bouquet" src={EucalyptusBouquet}/>
      <img className="bouquet2 z2" alt="bouquet" src={CustomBouquet}/>
		</article>
	);
};

export default Info;
