import { content, type Lang } from "./content";
import { Layout } from "./Layout";

export const Invitation = ({ lang }: { lang: Lang }) => {
	const t = content[lang];
	return (
		<Layout lang={lang} description={t.description}>
			<header>
				<div class="header_container">
					<div class="header_bg" />
					<div class="couplepicture">
						<h1 class="roseville maintitle">Adri&nbsp; &amp;Peti</h1>
					</div>
					<a href={t.otherLang.href} class="language" hreflang={lang === "hu" ? "en" : "hu"}>
						{t.otherLang.label}
					</a>
				</div>
			</header>
			<main>
				<div class="info_container">
					<div class="info_bg" />
					<article class="card">
						<div class="inv_container z1">
							<img class="bouquet1 z2" alt="" src="/src/img/eucalyptus_bouquet_03.png" />
							<img class="bouquet2 z2" alt="" src="/src/img/custom_bouquet_01.png" />

							<h2 class="waterbrush invitation z3">{t.invitation}</h2>
							<div class="spectral_sc dear_all z3">{t.dearAll}</div>
							<p class="spectral_sc announce z3">{t.announce}</p>
							<div class="spectral the_date z3">{t.date}</div>
							<p class="spectral_sc eternal z3">{t.eternal}</p>

							<div class="line"></div>

							<section class="spectral_sc happening z3">
								<strong>{t.ceremony.title}</strong>
								<div class="happening_time">16:30</div>
								<div>{t.ceremony.place}</div>
								<div>Baja, Bartók Béla utca 5.</div>
							</section>

							<section class="spectral_sc happening z3">
								<strong>{t.dinner.title}</strong>
								<div class="happening_time">18:00</div>
								<div>Turisztikai központ</div>
								<div>Baja, Petőfi sziget 11.</div>
							</section>

							<div class="waterbrush come z3">{t.come}</div>

							<q class="spectral gift z3">
								{t.gift[0]}
								<br />
								{t.gift[1]}
							</q>
						</div>
					</article>
				</div>
			</main>
		</Layout>
	);
};
