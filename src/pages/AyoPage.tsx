import { useEffect, useMemo, useState } from "react";
import "./AyoPage.css";

const menu = {
  Fruehstueck: [
    ["AYO Breakfast", "Sauerteigbrot, Ei, Avocado, Hummus, Salat", "14,90"],
    ["Avo Crush", "Geröstetes Brot, Avocado, Sesam, Kräuter", "10,90"],
    ["Yoghurt Bowl", "Joghurt, Granola, Früchte, Ahornsirup", "8,90"],
    ["French Toast", "Brioche, Beeren, Creme und Zimt", "11,90"],
  ],
  Waffeln: [
    ["AYO Special", "Bubble Waffle, Creme, Beeren und Crunch", "10,90"],
    ["Matcha Cloud", "Matcha-Creme, weiße Schokolade, Erdbeere", "11,90"],
    ["Simply Sweet", "Zimt, Zucker und hausgemachte Sauce", "7,90"],
    ["Build your own", "Basis plus Toppings nach Wahl", "ab 7,50"],
  ],
  Drinks: [
    ["Ceremonial Matcha", "Pur oder als cremiger Latte", "ab 4,80"],
    ["Strawberry Matcha", "Erdbeere, Matcha und Milch nach Wahl", "6,50"],
    ["Espresso & Coffee", "Klassiker mit sorgfältig ausgewählten Bohnen", "ab 2,80"],
    ["Homemade Lemonade", "Saisonal, frisch und nicht zu süß", "5,50"],
  ],
};

const reviews = [
  ["Ein besonderer Ort", "Liebevoll angerichtet, freundlicher Service und eine Atmosphäre, in der man gern länger bleibt."],
  ["Matcha-Favorit", "Wirklich guter Matcha und außergewöhnliche Kombinationen. Man merkt die Sorgfalt in jedem Detail."],
  ["Immer wieder gern", "Schönes Frühstück, tolle Waffeln und mitten in der Ravensburger Altstadt."],
];

export default function AyoPage() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState<keyof typeof menu>("Fruehstueck");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setScroll(Math.min(window.scrollY / max, 1));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const today = useMemo(() => new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(new Date()), []);

  return (
    <main className={`ayo-site ${dark ? "ayo-dark" : ""}`}>
      <div className="ayo-progress" style={{ transform: `scaleX(${scroll})` }} />
      <div className="ayo-concept">
        <span>Unverbindliches Website-Konzept · nicht die offizielle Website</span>
        <a href="/">Konzept von Aura Systems ↗</a>
      </div>

      <nav className="ayo-nav" aria-label="AYO Navigation">
        <a href="#start" className="ayo-logo" aria-label="AYO Startseite"><span>A</span><span>Y</span><span>O</span></a>
        <div className={`ayo-links ${mobileOpen ? "is-open" : ""}`}>
          <a href="#story" onClick={() => setMobileOpen(false)}>Unsere Story</a>
          <a href="#menu" onClick={() => setMobileOpen(false)}>Speisekarte</a>
          <a href="#momente" onClick={() => setMobileOpen(false)}>Momente</a>
          <a href="#besuch" onClick={() => setMobileOpen(false)}>Besuch</a>
        </div>
        <div className="ayo-nav-actions">
          <button className="ayo-theme" onClick={() => setDark(!dark)} aria-label={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}>{dark ? "☼" : "◐"}</button>
          <a className="ayo-reserve" href="https://app.resmio.com/ayo/widget" target="_blank" rel="noreferrer">Tisch reservieren</a>
          <button className="ayo-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Menü öffnen"><i /><i /></button>
        </div>
      </nav>

      <section className="ayo-hero" id="start">
        <div className="ayo-hero-media" style={{ transform: `scale(${1.04 + scroll * .13}) translateY(${scroll * 7}%)` }}>
          <video autoPlay muted loop playsInline preload="metadata" poster="/ayo/ayo-matcha-before.jpg" aria-label="Animierter AYO Matcha mit fallenden Eiswürfeln">
            <source src="/ayo/ayo-matcha-flow.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="ayo-hero-wash" />
        <div className="ayo-orbit" aria-hidden="true"><span>JOY · MATCHA · SOULFOOD · RAVENSBURG · </span></div>
        <div className="ayo-hero-copy">
          <p><i /> Ravensburger Altstadt · seit 2017</p>
          <h1>Freude,<br /><em>die man schmeckt.</em></h1>
          <div className="ayo-hero-sub">
            <p>Matcha, Soulfood und gute Momente – mitten in Ravensburg.</p>
            <a href="#menu">Entdecken <span>↓</span></a>
          </div>
        </div>
        <div className="ayo-hero-index"><span>47°47&apos;N</span><span>09°37&apos;E</span><b>01</b></div>
      </section>

      <section className="ayo-intro" id="story">
        <p className="ayo-eyebrow">AYO bedeutet Freude</p>
        <h2>Mehr als ein Café.<br /><em>Ein Gefühl.</em></h2>
        <div className="ayo-intro-grid">
          <p className="ayo-large-copy">In der Sprache Yoruba steht AYO für Freude. Genau die soll in jedem Teller, jedem Drink und jedem Besuch spürbar werden.</p>
          <div><span>Unsere Haltung</span><p>Gutes Essen darf unkompliziert sein. Wir verbinden sorgfältige Zutaten, handgemachte Lieblingsgerichte und eine offene Atmosphäre.</p></div>
        </div>
      </section>

      <section className="ayo-motion-story" aria-label="Vom Produktbild zur AYO Animation">
        <div className="ayo-motion-copy">
          <p className="ayo-eyebrow">Ein Drink. Acht Sekunden. Volle Aufmerksamkeit.</p>
          <h2>Vom ersten Bild<br />zum <em>AYO-Moment.</em></h2>
          <p>Das ruhige Produktbild wird zur kurzen, filmischen Sequenz: Eis fällt, Matcha spritzt auf und der AYO-Becher bleibt klar im Mittelpunkt.</p>
          <span>Originale Konzeptmedien aus dem AYO-Flow-Projekt</span>
        </div>
        <div className="ayo-motion-frames">
          <figure><img src="/ayo/ayo-matcha-before.jpg" alt="AYO Matcha vor der Animation" /><figcaption><span>00:00</span>Ruhe vor dem Moment</figcaption></figure>
          <figure><img src="/ayo/ayo-matcha-after.jpg" alt="AYO Matcha mit Eiswürfeln und Splash" /><figcaption><span>00:08</span>Der finale Splash</figcaption></figure>
        </div>
      </section>

      <section className="ayo-gallery" aria-label="AYO Speisen und Getränke">
        <figure className="ayo-gallery-tall"><img src="/ayo/bubble-waffle.jpg" alt="Bubble Waffle mit Erdbeeren und Pistazie" /><figcaption><span>01</span><strong>Bubble Waffle</strong><small>knusprig · warm · verspielt</small></figcaption></figure>
        <figure className="ayo-gallery-wide"><img src="/ayo/brunch-table.jpg" alt="Brunch mit Avocado-Toast, Bowl und Ei" /><figcaption><span>02</span><strong>Brunch table</strong><small>für langsame Vormittage</small></figcaption></figure>
        <figure className="ayo-gallery-drink"><img src="/ayo/ayo-matcha-after.jpg" alt="AYO Matcha mit Eiswürfeln und Splash" /><figcaption><span>03</span><strong>AYO Matcha</strong><small>als filmischer Signature-Moment</small></figcaption></figure>
        <div className="ayo-gallery-statement"><p>Made for<br /><em>good moods.</em></p><span>Ravensburg · AYO</span></div>
      </section>

      <section className="ayo-bento" aria-label="Was AYO besonders macht">
        <article className="ayo-bento-main">
          <span>01 / Handwerk</span><h3>Von der Idee<br />bis zum letzten<br /><em>Topping.</em></h3><p>Frisch zubereitet, bewusst kombiniert und mit einem Blick fürs Detail serviert.</p>
          <div className="ayo-line-art" aria-hidden="true"><i /><i /><i /><i /></div>
        </article>
        <article className="ayo-bento-stat"><span>Seit</span><strong>2017</strong><p>Streetfood-Erfahrung rund um Bodensee und Oberschwaben.</p></article>
        <article className="ayo-bento-word"><small>Yoruba</small><strong>AYO</strong><p>[ a-jo ] · Freude</p></article>
        <article className="ayo-bento-local"><span>03 / Zuhause</span><h3>Ravensburg,<br />Marienplatz.</h3><div className="ayo-map-dots" aria-hidden="true" /></article>
      </section>

      <section className="ayo-menu-section" id="menu">
        <div className="ayo-section-title"><p className="ayo-eyebrow">Zum Bleiben oder Mitnehmen</p><h2>Lieblingsstücke.<br /><em>Für jede Tageszeit.</em></h2></div>
        <div className="ayo-menu-tabs" role="tablist" aria-label="Speisekarten-Kategorien">
          {(Object.keys(menu) as Array<keyof typeof menu>).map((item) => <button key={item} role="tab" aria-selected={category === item} onClick={() => setCategory(item)}>{item === "Fruehstueck" ? "Frühstück" : item}</button>)}
        </div>
        <div className="ayo-menu-list">
          {menu[category].map(([name, description, price], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{description}</p></div><strong>{price} €</strong></article>)}
        </div>
        <p className="ayo-menu-note">Auszug aus einer Konzept-Speisekarte · Produkte, Preise und Allergene müssen vor Veröffentlichung durch Café AYO bestätigt werden.</p>
      </section>

      <section className="ayo-moments" id="momente">
        <div className="ayo-moment-photo"><img src="/ayo/brunch-table.jpg" alt="Gemeinsamer Brunch-Moment im Café" /><span>Slow mornings</span></div>
        <div className="ayo-moment-copy"><p className="ayo-eyebrow">Ein Moment nur für dich</p><h2>Ankommen.<br />Durchatmen.<br /><em>Genießen.</em></h2><p>Ob schnelles Frühstück, Matcha-Date oder ein langer Nachmittag mit Freunden: AYO soll sich leicht anfühlen.</p><a href="https://www.instagram.com/ayo_rv" target="_blank" rel="noreferrer">Mehr auf Instagram ↗</a></div>
      </section>

      <section className="ayo-reviews" aria-label="Stimmen zum Café">
        <div className="ayo-section-title"><p className="ayo-eyebrow">Google-Stimmen · Konzeptdarstellung</p><h2>Von Gästen.<br /><em>Für Gäste.</em></h2></div>
        <div className="ayo-review-grid">{reviews.map(([title, quote], index) => <article key={title}><div><span>★★★★★</span><b>0{index + 1}</b></div><h3>{title}</h3><p>„{quote}“</p><small>Textbeispiel – vor Nutzung mit Originalbewertung abgleichen</small></article>)}</div>
      </section>

      <section className="ayo-visit" id="besuch">
        <div className="ayo-visit-head"><p className="ayo-eyebrow">Komm vorbei</p><h2>Wir freuen uns<br /><em>auf dich.</em></h2><span>Heute ist {today}</span></div>
        <div className="ayo-visit-grid">
          <article><span>Adresse</span><h3>Marienplatz 54–58<br />88212 Ravensburg</h3><a href="https://www.google.com/maps/dir/?api=1&destination=Marienplatz+54+88212+Ravensburg" target="_blank" rel="noreferrer">Route öffnen ↗</a></article>
          <article><span>Öffnungszeiten*</span><div className="ayo-hours"><p><b>Mo–Di</b><em>09:30–18:00</em></p><p><b>Mi–Do</b><em>Ruhetag</em></p><p><b>Freitag</b><em>09:30–18:00</em></p><p><b>Sa–So</b><em>ab 09:30 / 10:00</em></p></div><small>* vor Veröffentlichung aktuell bestätigen</small></article>
          <article><span>Kontakt</span><h3><a href="tel:+4975195222685">0751 95 222 685</a><br /><a href="mailto:hello@cafe-ayo.de">hello@cafe-ayo.de</a></h3><a href="https://app.resmio.com/ayo/widget" target="_blank" rel="noreferrer">Tisch reservieren ↗</a></article>
        </div>
      </section>

      <footer className="ayo-footer">
        <div className="ayo-footer-logo">AYO<span>Freude auf Yoruba</span></div>
        <div><a href="#story">Story</a><a href="#menu">Speisekarte</a><a href="#besuch">Besuch</a><a href="https://www.instagram.com/ayo_rv" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <div><p>Unverbindliche Konzeptdemo<br />Keine offizielle Website von Café AYO.</p><a href="#start">Nach oben ↑</a></div>
      </footer>
    </main>
  );
}
