export function HeroBanner() {
    return (
        <section className="hero-banner" aria-labelledby="hero-title">
            <div className="hero-banner__content">
                <h1 id="hero-title">Venha conhecer nossas promoções</h1>

                <p>
                    <strong>50% OFF</strong> nos produtos
                </p>

                <a href="#products-title" className="hero-banner__button">
                    Ver produtos
                </a>
            </div>
        </section>
    );
}